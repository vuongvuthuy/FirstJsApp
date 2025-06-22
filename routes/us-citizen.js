const path = require('path');

const express = require('express');

const usCitizenController = require('../controllers/us-citizen');

const router = express.Router();

// /admin/add-product => GET
router.get('/dynamicAnswers', usCitizenController.getDynamicAnswers);
router.get('/infos', usCitizenController.getInfos);
router.get('/questions', usCitizenController.getQuestions);
router.get('/vocabularies', usCitizenController.getVocabularies);
router.get('/versions', usCitizenController.getCivicVersionsDescending);

module.exports = router;