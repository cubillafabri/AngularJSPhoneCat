// Register the `phoneList` component on the `phoneList` module,
angular.module('phoneList')
    .component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
     // Note: The URL is relative to our `index.html` file
    templateUrl:'templates/phone-list/phone-list.template.html',
    controller: 'PhoneListController'
    })
;