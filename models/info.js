const mongoose = require('mongoose');

const subContentSchema = new mongoose.Schema({
  contentMotherTongue: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
}, { _id: false });

const infoSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
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
  contentMotherTongue: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
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
  pronunciation: {
    type: String,
    required: true
  },
  subContents: {
    type: [subContentSchema],
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  subjectMotherTongue: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true
  }
}, { collection: 'Info' }); // Use existing collection name

module.exports = mongoose.model('Info', infoSchema);
