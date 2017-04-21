pokerApp.filter('humaniseScore', function () {
    return function (input) {
        if (input < 1000) {
            return input;
        }
        else if (Number(input) < 10000) {
            return 'thousands';
        }
        else {
            return 'tens of thousands';

        }
    }
});