const UserModel = require('../models/user.model');
const SlotModel = require('../models/slot.model');

exports.listAvailableSlots = (req, res) => {
	return res.send('List Available Slots');
};

exports.listOccupiedSlots = (req, res) => {
	return res.send('List Occupied Slots');
};

exports.listRegisteredUsers = (req, res) => {
	return res.send('List Registered Users');
};
