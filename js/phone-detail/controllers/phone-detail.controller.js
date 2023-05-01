'use strict'
// Define the `phoneDetail` module for controllers
angular.module('phoneDetail')
    .controller('PhoneDetailController',['$scope', '$routeParams', 'PhoneService' ,function(se, rp, ps){
      se.phoneId = rp.phoneId;

      se.phone = ps.get({phoneId: rp.phoneId}, function(phone){
        se.setImage(phone.images[0]);
      });
      /*
      hp.get('phones/' + rp.phoneId + '.json').then(function(response) {
        se.phone = response.data;
        se.setImage(se.phone.images[0]);
        console.log(se.phone);
      });*/
      // method (to be used as event handler) that will change the value of mainImageUrl
      se.setImage = function(imageUrl){
        se.mainImageUrl = imageUrl;
      }

      se.onDblclick = function(imageUrl){
        alert(imageUrl);
      }

    }])
;