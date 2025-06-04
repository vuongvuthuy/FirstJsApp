const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  contentMotherTongue: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  }
}, { _id: false });

const questionSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  answers: {
    type: [answerSchema],
    required: true
  },
  category: {
    type: String,
    required: true
  },
  categoryMotherTongue: {
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
  dummyAnswers: {
    type: [answerSchema],
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
    type: String // optional field
  },
  questionNo: {
    type: String // optional field
  },
  type: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true
  }
}, { collection: 'Question' }); // Keep existing collection name

module.exports = mongoose.model('Question', questionSchema);
