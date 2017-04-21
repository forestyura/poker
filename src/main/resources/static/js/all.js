'use strict';

var pokerApp = angular.module('pokerApp', ["ngRoute"]);

pokerApp.controller('MainController', function MainController() {});

pokerApp.config(function config($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        template: '<home-page></home-page>'
    }).when('/login', {
        template: '<login-form></login-form>'
    }).when('/statistic', {
        template: '<statistic-page></statistic-page>'
    }).when('/game', {
        template: '<game-page></game-page>'
    }).when('/registration', {
        template: '<registration-form></registration-form>'
    }).when('/404', {
        template: '<page404></page404>'
    }).otherwise('/404');
    $locationProvider.html5Mode(true);
});
pokerApp.component('gamePage', {
    templateUrl: 'pages/game.html',
    controller: function controller() {
        gamescript();
    }
});
var gamescript = function gamescript() {

    //Fisher-Yates Shuffle
    function shuffle(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {}
        return o;
    }

    function range(start, end) {
        var result = [];
        for (var i = start; i <= end; i++) {
            result.push(i);
        }
        return result;
    }

    var deck = shuffle(range(1, 52));

    function dealCard(cardNumber, max, target) {
        if (cardNumber > max) {
            return;
        }

        var rotationDegree = Math.floor(Math.random() * 60) - 30;
        $('<img />', {
            src: 'img/cards/' + deck.pop() + '.png',
            style: 'transform: rotate(' + rotationDegree + 'deg);'
        }).appendTo('#' + target);

        setTimeout(function () {
            dealCard(cardNumber + 1, max, target);
        }, 500);
    }

    setTimeout(function () {
        dealCard(1, 2, 'player1');
    }, 500);

    setTimeout(function () {
        dealCard(1, 2, 'player2');
    }, 1500);

    setTimeout(function () {
        dealCard(1, 5, 'table');
    }, 2500);
};

pokerApp.controller('headerController', function ($scope, userService) {
    showUsername();

    function showUsername() {
        var username = userService.getUsername();
        if (username) {
            $scope.username = username;
            $scope.isLogin = true;
        } else {
            $scope.username = "Guest";
            $scope.isLogin = false;
        }
    }

    $scope.login = function () {};

    $scope.logout = function () {
        userService.logout();
        showUsername();
    };
});
pokerApp.component('homePage', {
    templateUrl: 'pages/home-page.html',
    controller: function controller() {}
});
pokerApp.component('loginForm', {
    templateUrl: 'pages/login-form.html',
    controller: function controller($scope, userService) {
        $scope.user = {};
        $scope.submitLogin = function () {
            userService.login(angular.toJson($scope.user));
            console.log(angular.toJson($scope.user));
        };
    }
});
pokerApp.component('page404', {
    templateUrl: 'pages/page-404.html',
    controller: function controller() {}
});
pokerApp.component('registrationForm', {
    templateUrl: 'pages/registration-form.html',
    controller: function controller($scope, userService) {
        $scope.user = {};
        $scope.submitForm = function () {
            userService.registration(angular.toJson($scope.user));
        };
    }
});
pokerApp.component('statisticPage', {
    templateUrl: 'pages/statistic.html',
    controller: function controller($scope, statisticService) {
        var _this = this;

        statisticService.getStatistics().then(function (data) {
            return _this.highScores = data;
        });
    }
});
pokerApp.filter('humaniseScore', function () {
    return function (input) {
        if (input < 1000) {
            return input;
        } else if (Number(input) < 10000) {
            return 'thousands';
        } else {
            return 'tens of thousands';
        }
    };
});
pokerApp.factory('statisticService', function ($http, $q) {
    var promise = void 0;
    return {
        getStatistics: getStatistics
    };

    function getStatistics() {
        if (!promise) {
            promise = $http.get('/statistics').then(function (response) {
                return response.data;
            });
        }
        return promise;
    }
});
pokerApp.factory('userService', function ($http) {
    var username = void 0;
    return {
        getUsername: getUsername,
        login: login,
        logout: logout,
        registration: registration
    };

    function getUsername() {
        return username;
    }

    function login(data) {
        /* var headers = data ? {authorization : "Basic "
         + btoa(data.username + ":" + data.password)
         } : {};
           $http.post('/login', data, {headers : headers})*/
        $http.post('/login', data).success(function () {
            username = data.username;
        });
    }

    function logout() {
        username = null;
    }

    function registration(data) {
        $http.post('/registration', data);
    }
});