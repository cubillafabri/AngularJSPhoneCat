'use strict'
// Define the `phoneList` module for controllers
angular.module('phoneDetail')
    .controller('PhoneDetailController',['$scope', '$routeParams' ,function(se, rp){
      se.phoneId = rp.phoneId;
    }])
;