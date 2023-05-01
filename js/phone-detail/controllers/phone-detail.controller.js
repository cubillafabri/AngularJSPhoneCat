'use strict'
// Define the `phoneDetail` module for controllers
angular.module('phoneDetail')
    .controller('PhoneDetailController',['$scope', '$routeParams', '$http' ,function(se, rp, hp){
      se.phoneId = rp.phoneId;
      hp.get('phones/' + rp.phoneId + '.json').then(function(response) {
        se.phone = response.data;
        console.log(se.phone);
      });
    }])
;