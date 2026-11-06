const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema(
  {
    word: { type: String, required: true },
    from: { type: String, default: 'auto' },
    language: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { timestamps: true }
);

translationSchema.index({ word: 1, from: 1, language: 1 });

module.exports = mongoose.model('Translation', translationSchema);
