'use strict'
// Define the `phonecatApp` module
angular.module('phoneApp', ['phoneList']);/*
.config(['$locationProvider', function(locRo) {
    locRo.hashPrefix('');
}])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/", {
            controller: "PhoneController",
            templateUrl: "templates/phoneList-partial.html"
        })
        .when("/404", {
            controller: "",
            templateUrl: "templates/notFound-partial.html"
        })
        .otherwise("/404")
}])
;*/