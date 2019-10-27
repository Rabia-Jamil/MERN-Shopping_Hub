const mongoose = require('mongoose')
// DB Config
const db = require('../config/keys').MONGODB_URL;

mongoose.connect(db, 
    {useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    })
    .then(() => console.log("Mongo DB connected!"))
    .catch((err) => console.log("Error connectinng Mongo DB!", err))