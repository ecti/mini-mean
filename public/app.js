'use strict';

// App setup
var App = (function() {
	var name = 'mini-mean';

	var registerModule = function(moduleName, dependencies) {
		// Create new module and add to main module
		angular.module(moduleName, dependencies || []);		
		angular.module(name).requires.push(moduleName);
	}
	
	return {
		name: name,
		registerModule: registerModule
	};
})();

// Create main module
angular.module(App.name, ['ngRoute']);

// Initialize angular app
angular.element(document).ready(function() {
	angular.bootstrap(document, [App.name]);
});
