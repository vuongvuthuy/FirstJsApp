const mongoose = require('mongoose');

const vocabularySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  contentMotherTongue: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  exampleInEnglish: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  motherTongueLanguage: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true
  }
}, { collection: 'Vocabulary' }); // Keep existing collection name

module.exports = mongoose.model('Vocabulary', vocabularySchema);
