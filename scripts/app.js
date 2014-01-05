/// <reference path="angular.js" />

angular.module('app', [])

.controller('AppCtrl', function ($scope, moviesData) {

    var page = 1;
    var pageLimit = 5;
    
    $scope.movies = [];

    var loadData = function () {
        moviesData.getMovies(page, pageLimit).then(function (response) {  
            $scope.movies = response.data.movies;                                      
        });
    }    
    
    $scope.hasNext = function () {
        return ($scope.movies.length === pageLimit);
    }
    
    $scope.showNext = function () {
        page += 1;
        loadData();
    }

    $scope.hasPrev = function () {
        return (page - 1);
    }

    $scope.showPrev = function () {
       page -= 1;
        loadData();
    }

    loadData();    

})

.factory('moviesData', function ($http) {
    return {
        getMovies: function (page, pageLimit) {
            var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json";
            var apikey = "sxu85vhd8898raqdwe7kx78y";
        	
        	var url = baseUrl + '?apikey=' + apikey + '&page=' + page + '&page_limit=' + pageLimit + '&callback=JSON_CALLBACK';

            return $http.jsonp(url);
        }
    }
});