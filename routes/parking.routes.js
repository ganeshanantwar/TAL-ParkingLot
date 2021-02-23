const express = require('express');
const router = express.Router();
const controller = require('../controllers/parking.controller');

router.get('/available', controller.listAvailableSlots);

router.get('/occupied', controller.listOccupiedSlots);

router.get('/users', controller.listRegisteredUsers);

router.post('/register', controller.registerParkingSlot);

module.exports = router;
