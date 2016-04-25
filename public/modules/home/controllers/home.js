'use strict';

angular.module('home').controller('HomeController', ['$scope', 
    function($scope) {
        $scope.name = App.name;
    }
]);