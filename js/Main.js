var ftmsapp = angular.module('ftms', ['ftms.controllers','ftms.Services','ngRoute']);

ftmsapp.config(function ($routeProvider,$locationProvider) {
    //use the HTML5 History API to remove '# tag in URL
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'html/login.html',
        controller: 'loginCtrl'
    })
    .when('/Home', {
        templateUrl: 'html/Home.html',
        controller: 'HomeCtrl'
    })
    .when('/Home/About', {
        templateUrl: 'html/About.html',
        controller: 'HomeCtrl'

    })
    .when('/Home/Contact', {
        templateUrl: 'html/Contact.html',
        controller: 'HomeCtrl'

    })
    .when('/Team/TeamDetails', {
        templateUrl: 'html/Team.html',
        controller: 'TeamCtrl'

    })
    .when('/event', {
        templateUrl: 'html/Event.html',
        controller : 'EventCtrl'

    })
    .when('/Account/AddUser', {
        templateUrl: 'html/adduser.html',
        controller : 'loginCtrl'
    })
    .when('/Funds', {
        templateUrl: 'html/funds.html',
        controller: 'FundCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

});