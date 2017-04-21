pokerApp.component('statisticPage', {
    templateUrl: 'pages/statistic.html',
    controller: function ($scope, statisticService) {
        statisticService.getStatistics().then(data => this.highScores = data);
    }
});