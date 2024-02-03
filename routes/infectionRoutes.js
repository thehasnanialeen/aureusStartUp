const express = require('express');
const infectionController = require('../controllers/infectionController');

const router = express.Router();

router.post('/addInfection', infectionController.addInfection);
router.get('/getInfections', infectionController.getInfections);

module.exports = router;