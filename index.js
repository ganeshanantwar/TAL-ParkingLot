const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5001;
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

const parkingRouter = require('./routes/parking.routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/parking', parkingRouter);

mongoose.Promise = global.Promise;

mongoose
	.connect(dbConfig.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log('Successfully connected to the database');
	})
	.catch((err) => {
		console.log('Could not connect to the database. Exiting now...', err);
		process.exit();
	});

app.listen(port, () => {
	console.log(`Parking-Lot Service is running on ${port}`);
});
