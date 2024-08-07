// translationModel.js
const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
  word: { type: String, required: true },
  language: { type: String, required: true },
  answer: { type: String, required: true },
});

module.exports = mongoose.model('Translation', translationSchema);
