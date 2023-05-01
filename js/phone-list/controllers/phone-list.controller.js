'use strict'
// Define the `phoneList` module for controllers
angular.module('phoneList')
    .controller('PhoneListController',['$scope',  'PhoneService' ,function(se, ps){
      se.orderProp = 'age';
        se.phones = ps.query();
        console.log(se.phones);
    }])
;