var app = angular.module('charts', [])
app.directive('highchart', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        replace: true,

        link: function(scope, element, attrs) {

            scope.$watch(function() {
                return attrs.chart;
            }, function() {

                if (!attrs.chart) return;

                var charts = JSON.parse(attrs.chart);

                $(element[0]).highcharts(charts);

            });
        }
    };
});

app.controller('Ctrl', function ($scope, $http, $timeout) {
$http.get('data.json').success(function (data, status) {

    $scope.jsondatafeed = data.yData;
    $scope.PlotData =[];
    $scope.Plotcat =[];
    for (var key in $scope.jsondatafeed) {
      console.log($scope.jsondatafeed[key]); // the whole array (index)
      $scope.PlotData.push($scope.jsondatafeed[key]);
      //var category = data[key][].splice(1, 1);
      var category = $scope.jsondatafeed[key];
      $scope.Plotcat.push(category.name);
    }

    $scope.renderChart = {
        chart: {
            type: 'bar'
        },

        series:  $scope.PlotData,


        legend: {
            enabled: false
        }
    };
}).error("error message");
$timeout($scope.fetch, 1000);
});
