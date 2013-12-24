/// <reference path="angular.js" />

angular.module('app', [])

.controller('AppCtrl', function ($scope) {

    $scope.name = 'Alexandru';
    $scope.cities = [
        'Vancouver',
        'Burnaby',
        'Coquitlam'
    ];
});