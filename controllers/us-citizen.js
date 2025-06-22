const DynamicAnswer = require('../models/dynamic-answer');
const Info = require('../models/info');
const Vocabulary = require('../models/vocabulary');
const Question = require('../models/question');

exports.getVocabularies = (req, res, next) => {

  const filter = {};

  filter.version = req.query.version || 'Đề thi năm 2008';

  if (req.query.type) {
    filter.type = req.query.type;
  } else {
    filter.type = 'H';
  }

  const sortCondition = { 'category' : 1 , 'index' : 1 };

  Vocabulary.find(filter).sort(sortCondition)
  // .select('title price -_id')
  // .populate('userId', 'name')
  .then(vocabularies => {
    res.json(vocabularies);
  })
  .catch(err => console.log(err));
};

exports.getQuestions = (req, res, next) => {
  const filter = {};

  filter.version = req.query.version || 'Đề thi năm 2008';

  if (req.query.type) {
    filter.type = req.query.type;
  }

  const sortCondition = { 'category' : 1 , 'index' : 1 };

  Question.find(filter).sort(sortCondition)
  .then(questions => {
    console.log(questions.length);
    res.json(questions);
  })
  .catch(err => console.log(err));
};

exports.getDynamicAnswers = (req, res, next) => {
    const filter = {};
    
    filter.version = req.query.version || 'Đề thi năm 2008';

    if (req.query.filterCode) {
      filter.filterCode = req.query.filterCode;
    }

    const sortCondition = { 'index' : 1 };
    DynamicAnswer.find(filter).sort(sortCondition)
    .then(dynamicAnswers => {
      res.json(dynamicAnswers);
    })
    .catch(err => console.log(err));
};

exports.getInfos = (req, res, next) => {

  const filter = {};
  filter.version = req.query.version || 'Đề thi năm 2008';

  if (req.query.type) {
    filter.type = req.query.type;
  }

  const sortCondition = { 'category' : 1 , 'index' : 1 };

  Info.find(filter).sort(sortCondition)
  .then(infos => {
    res.json(infos);
  })
  .catch(err => console.log(err));
};