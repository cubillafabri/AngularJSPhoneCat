'use strict'
// Define the `phoneList` module for controllers
angular.module('phoneList')
    .controller('PhoneController',['$scope', '$http' ,function(se, hp){
      se.orderProp = 'age';
        se.phones = [];
          hp.get('phones/phones.json').then(function(response) {
            console.log(response.data);
            se.phones = response.data;
          });
    }])
;