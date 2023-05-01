'use strict'
// Define the `phoneDetail` module for controllers
angular.module('phoneDetail')
    .controller('PhoneDetailController',['$scope', '$routeParams', '$http' ,function(se, rp, hp){
      se.phoneId = rp.phoneId;
      hp.get('phones/' + rp.phoneId + '.json').then(function(response) {
        se.phone = response.data;
        se.setImage(se.phone.images[0]);
        console.log(se.phone);
      });
      // method (to be used as event handler) that will change the value of mainImageUrl
      se.setImage = function(imageUrl){
        se.mainImageUrl = imageUrl;
      }

      se.onDblclick = function(imageUrl){
        alert(imageUrl);
      }
      
    }])
;