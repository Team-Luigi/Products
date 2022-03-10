// File not in use

const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let styles = mongoose.Schema({
    name: String,
    original_price: Number,
    sale_price: Number,
    default?: Boolean
})

let photos = mongoose.Schema({
  thumbnail_url: String,
  url: String
})

let products = mongoose.Schema({
  // TODO: your schema here!
  _id: Number,
  productId: Number,
  name: String,
  slogan: String,
  description: String,
  default_price: Number,
  feature: String,
  value: String,
  styles: [styles],
  photos: [photos],
  skus: Number,
  quantity: Number,
  size: String,
  relatedProductId: Number
});

let Product = mongoose.model('Product', productSchema);