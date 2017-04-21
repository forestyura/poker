pokerApp.component('loginForm', {
    templateUrl: 'pages/login-form.html',
    controller: function ($scope, userService) {
        $scope.user = {};
        $scope.submitLogin = function(){
            userService.login(angular.toJson($scope.user));
            console.log(angular.toJson($scope.user))
            
        }
    }
});