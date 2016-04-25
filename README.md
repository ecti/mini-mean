# Mini MEAN
A simple minimal MongoDB, Express, Angular 1, and Node.js web framework. Written in ES6 and transpiled by Babeljs.

#### Requirements
Node.js 5+
MongoDB 3+

#### Installing and running

```sh
$ npm install
$ bower install
$ npm start or nodemon index.js

Open up a browser and head to localhost:8000!
```

#### Directories

##### server
The server directory for all backend and api related files. The directory is created using MVC style.

##### config
The config directory is used for storing passport, tokens, api keys, or app specific configurations.

##### public
The public directory consists of all frontend related files and scripts. This is the only directory that is exposed to the client. All image assets, header logos, css, html templates, custom scripts should be placed in here. There are also two sub directories, modules, and vendor. The vendor directory is for all vendor specific plugins e.g. angular, jQuery, etc. The modules directory will consist of many frontend components that build up the website.
