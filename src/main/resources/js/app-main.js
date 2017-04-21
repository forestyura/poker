var pokerApp = angular.module('pokerApp', ["ngRoute"]);

pokerApp.controller('MainController', function MainController() {
});

pokerApp.config(function config($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        template: '<home-page></home-page>'
    }).
    when('/login',{
        template: '<login-form></login-form>'
     }).
    when('/statistic',{
        template: '<statistic-page></statistic-page>'
    }).
    when('/game',{
        template: '<game-page></game-page>'
    }).
    when('/registration',{
        template: '<registration-form></registration-form>'
    }).
    when('/404',{
        template: '<page404></page404>'
    }).
    otherwise('/404');
    $locationProvider.html5Mode(true);
});