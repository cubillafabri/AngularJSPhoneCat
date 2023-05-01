angular.module('phoneApp')
.config(['$locationProvider', function(locRo) {
    locRo.hashPrefix('');
}])
.config(['$routeProvider', 
    function ($routeProvider) {
        $routeProvider
        .when('/phones', {
            template: '<phone-list></phone-list>'
        })
        .when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        })
        .when('/404', {
            templateUrl: 'templates/notFound.template.html'
        })
        .otherwise('/404');
    }
])
;