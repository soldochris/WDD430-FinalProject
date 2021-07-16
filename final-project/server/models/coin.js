const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
  id: {type: String, required: true},
  symbol: {type: String, required: true},
  name: {type: String, required: true},
  rank:{type:Number},
  price_usd:{type: String, required: true},
  imageUrl: {type: String, required: true},
});

module.exports = mongoose.model('Coin', schema);