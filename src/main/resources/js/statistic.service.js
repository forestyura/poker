pokerApp.factory('statisticService', function($http, $q) {
    let promise;
    return {
        getStatistics
    };

    function getStatistics() {
        if (!promise) {
            promise = $http.get('/statistics').then(response => {
                return response.data
            });
        }
        return promise;
    }
});