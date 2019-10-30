const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const passport = require('passport');

//Product Model
const Product = require('../models/Product')

// Load Validation
const validateProductInput = require('../validation/product');
const validateColorsInput = require('../validation/color');

// @route   GET api/products/test
// @desc    Tests products route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Products Works' }));

// @route   GET api/products/all
// @desc    Get all products 
// @access  Public
router.get('/all', (req, res) => {
  const errors = {};
  Product.find()
    .populate('user', ['first_name', 'last_name'])
    .sort({ date: -1 })
    .then(products => {
      if (!products) {
        errors.noproduct = 'There are no products';
        return res.status(404).json(errors);
      }
      res.json(products)
    })
    .catch(err => res.status(404).json({ noproductsfound: 'No products found' }));
});

// @route   POST api/products
// @desc    Create products 
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const { errors, isValid } = validateProductInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    //Get fields
    const productFields = {};
    productFields.user = req.user.id;
    productFields.name = req.body.name
    productFields.front_view = req.body.front_view
    productFields.back_view = req.body.back_view
    productFields.side_view = req.body.side_view
    productFields.interior_view = req.body.interior_view
    productFields.category = req.body.category
    productFields.seller = req.body.seller
    productFields.price = req.body.price
    productFields.description = req.body.description
    productFields.cod = req.body.cod

    // Save Profile
    errors.serverError = 'Unable to add Product. Please try again later!';
    new Product(productFields).save()
      .then(product => res.json(product))
      .catch(err => res.status(500).json(errors));
  })

// @route   POST api/products/colors
// @desc    Add product colors to product
// @access  Private
router.post(
  '/colors',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateColorsInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Product.findOne({ user: req.user.id }).then(product => {
      const newColor = {
        product_color: req.body.product_color,
        front_view: req.body.front_view,
        back_view: req.body.back_view,
        side_view: req.body.side_view,
        interior_view: req.body.interior_view
      };

      // Add to colors array
      product.product_colors.unshift(newColor);
      console.log("working")
      errors.serverError = 'Unable to add Colors to Product. Please try again later!';
      product.save()
      .then(product => res.json(product))
      .catch(err => res.status(500).json(errors));
    });
  }
);

// @route   GET api/products/:id
// @desc    Get product by id
// @access  Public
router.get('/:id', (req, res) => {
  const errors = {};
  Product.findById(req.params.id)
    .then(product => {
      if(!product){
        errors.noproduct = 'There is no product for this ID';
        res.status(404).json(errors);
      }
      res.json(product)
    })
    .catch(err =>
      res.status(404).json({ noproductfound: 'No product found with that ID' })
    );
});

// @route   GET api/products/user
// @desc    Get all products added by the current user
// @access  Private

router.get(
  '/current-user/all',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Product.find({ user: req.user.id })
      .then(products => {
        if (!products) {
          errors.noproduct = 'There are no products. You have not added products yet!';
          return res.status(404).json(errors);
        }
        res.json(products)
      })
      .catch(err => res.status(404).json({ product: 'There are no products' }))
  })

// @route   PUT api/products/discount/id   id => product ID
// @desc    Add discount to the product
// @access  Private

router.put(
  '/discount/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

  })


module.exports = router;