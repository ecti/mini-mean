import express from 'express';
import fs from 'fs';
import path from 'path';
import swig from 'swig';

export default function(app) {
	// Local variables
	app.locals.title = 'Mini MEAN';
	app.locals.jsFiles = getFilesRecursive('./public/modules', '.js');
	app.locals.cssFiles = getFilesRecursive('./public/modules', '.css');

	// Setup swig template engine
	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', './server/views');

	app.use(express.static(path.resolve('./public')));	
}

/**
 * Recursively find all files with given ext.
 * Returns an array of files and their path
 */
function getFilesRecursive(folder, ext) {
	let fileContents = fs.readdirSync(folder);
	let	files = [];
	let	stats;

	fileContents.forEach((fileName) => {
		stats = fs.lstatSync(folder + '/' + fileName);

		if (stats.isDirectory()) {
			files = files.concat(getFilesRecursive(folder + '/' + fileName, ext));
		} else {
			if(fileName.indexOf(ext) > -1) {
				files.unshift(folder.replace('./public/', '') + '/' + fileName);
			}
		}
	});

	return files;
};