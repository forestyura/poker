pokerApp.component('registrationForm', {
    templateUrl: 'pages/registration-form.html',
    controller: function ($scope, userService) {
        $scope.user = {};
        $scope.submitForm = function(){
            userService.registration(angular.toJson($scope.user));
        }
    }
});