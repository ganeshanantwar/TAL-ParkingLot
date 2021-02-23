const mongoose = require('mongoose');

const myschema = mongoose.Schema(
	{
		phone: String,
		firstName: String,
		lastName: String,
		gender: String,
		dob: String,
		totalCost: Number,
		volume: Number,
		perKGCost: Number,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('User', myschema);
