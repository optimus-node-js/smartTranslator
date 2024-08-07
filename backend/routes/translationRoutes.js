const express = require('express');
const router = express.Router();
const translationController = require('../controllers/translationController');

router.post('/', translationController.getTranslation);

module.exports = router;
