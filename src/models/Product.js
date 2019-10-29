const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  front_view: {
    type: String,
    required: true
  },
  back_view: {
    type: String,
    required: true
  },
  side_view: {
    type: String,
    required: true
  },
  interior_view: {
    type: String,
    required: true
  },
  product_colors: [
    {
      product_color: {
        type: String,
        required: true
      },
      front_view: {
        type: String,
        required: true
      },
      back_view: {
        type: String,
        required: true
      },
      side_view: {
        type: String,
        required: true
      },
      interior_view: {
        type: String,
        required: true
      }
    }
  ],
  category: {
      type: String,
      required: true
  },
  seller: {
      type: String,
      required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
  },
  description: {
      type: String,
      required: true
  },
  // delivery_options: {
      
  // },
  province: {
    type: String,
  },
  city: {
    type: String
  },
  area: {
    type: String
  },
  home_delivery: {
    type: String
  },
  cod: {
    type: Boolean,
    default: true
  },
  ratings: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  reviews: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Product = mongoose.model('product', ProductSchema);
