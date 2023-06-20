const express = require('express');

const {AirPlaneController} = require('../../controllers');

const router = express.Router();

router.post('/', AirPlaneController.createAirplane);

module.exports = router;