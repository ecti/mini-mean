import mongoose from 'mongoose';
import express from 'express';
import configExpress from './config/express';
import configMongoDB from './config/mongodb';
import setup from './server';
import chalk from 'chalk';

const app = express();

// Setup connection to mongoDB
mongoose.connect(configMongoDB.uri, configMongoDB.options, (err) => {
	if(err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});
mongoose.connection.on('error', (err) => {
	console.error(chalk.red('MongoDB connection error: ' + err));
	process.exit(-1);
});

// Config express specific settings
configExpress(app);

// Setup server app controllers, models, routes
setup(app);

app.listen(8000, () => {
	console.log('App listening on port 8000');
});