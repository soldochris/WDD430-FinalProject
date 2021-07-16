const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sequenceSchema = new Schema({
  maxCoinId: {type: Number, required: true}
});

module.exports = mongoose.model('Sequence', sequenceSchema);