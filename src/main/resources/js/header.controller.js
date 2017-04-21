pokerApp.controller('headerController', function ($scope, userService) {
    showUsername();
    
    function showUsername() {
        var username = userService.getUsername();
        if (username) {
            $scope.username = username;
            $scope.isLogin = true;
        }
        else {
            $scope.username = "Guest";
            $scope.isLogin = false;
        }
    }

    $scope.login = function () {
        
    };

    $scope.logout = function () {
        userService.logout();
        showUsername();
    };
});