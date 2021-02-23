const mongoose = require('mongoose');

const myschema = mongoose.Schema(
	{
		costID: String,
		header: String,
		location: String,
		le: String,
		month: String,
		totalCost: Number,
		volume: Number,
		perKGCost: Number,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Slot', myschema);
