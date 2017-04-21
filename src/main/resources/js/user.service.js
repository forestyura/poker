pokerApp.factory('userService', function($http) {
    let username;
    return {
        getUsername,
        login,
        logout,
        registration
    };
    
    function getUsername() {
        return username;
    }

    function login(data) {
        var headers = data ? {authorization : "Basic "
        + btoa(data.username + ":" + data.password)
        } : {};

        $http.post('/login', data, {headers : headers})
            .success(function () {
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