const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys').JWT_SECRET;
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const validatePasswordInput = require('../validation/password')

// Load User model
const User = require('../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log("Error occured!", err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, first_name: user.first_name, last_name: user.last_name }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys,
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Incorrect Password';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      role: req.user.role
    });
  }
);

// @route   PUT api/users/edit/:id
// @desc    Edit user profile
// @access  Private

router.put(
  '/edit/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const fieldsToUpdate = Object.keys(req.body)
    const fieldsInModel = ['first_name', 'last_name']
    const isUpdateAllowed = fieldsToUpdate.every((field) => fieldsInModel.includes(field))

    if (!isUpdateAllowed) {
      return res.status(400).json({ msg: 'Invalid field!' })
    }

    //Get fields
    const userFields = {}
    // userFields.user = req.user.id
    if (req.body.first_name) userFields.first_name = req.body.first_name
    if (req.body.last_name) userFields.last_name = req.body.last_name
    User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: userFields },
      { new: true }
    )
      .then(user => {
        res.json(user)
      })
      .catch(err => res.status(400).json(err))

  })

// @route   PUT api/users/edit-password/:id
// @desc    Edit user password
// @access  Private

router.put(
  '/edit-password/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePasswordInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const old_password = req.body.old_password
    var new_password = req.body.new_password
    console.log("old password", old_password)
    console.log("new password before hashing", new_password)
    // Find user 
    User.findById({ _id: req.params.id }).then(user => {
      // Check for user
      if (!user) {
        errors.user = 'User not found';
        return res.status(404).json(errors);
      }

      // Check Password
      bcrypt.compare(old_password, user.password).then(isMatch => {
        if (isMatch) {
          // Password Matched
          // Now Encrypt new password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(new_password, salt, (err, hash) => {
              if (err) throw err;
              new_password = hash;
              console.log("new password after hashing", new_password)
              User.findByIdAndUpdate(
                { _id: req.params.id },
                { password: new_password },
                { new: true }
              )
                .then(user => res.json(user))
                .catch(err => {
                  errors.password = 'Error updating password. Please try again later!';
                  res.status(500).json(errors)
                })
            });
          });
        }
        else {
          errors.password = 'Old password is wrong!';
          return res.status(400).json(errors);
        }
      })
    })
  })

module.exports = router;
