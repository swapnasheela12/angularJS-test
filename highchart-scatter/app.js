angular.module('myModule', [])
    // Directive for generic chart, pass in chart options
    .directive('hcChart', function () {
        return {
            restrict: 'E',//'A' - only matches attribute name/'E' - only matches element name/'C' - only matches class name/'M' - only matches comment (restrict:When you create a directive, it is restricted to attribute and elements only by default. )
            template: '<div></div>',
            scope: {
                options: '=' //option is a attribute of hc-chart
            },
            link: function (scope, element, attrs) {


                scope.$watch(function () { return attrs.chart; }, function () {

                    if (!attrs.chart) return;

                    var charts = JSON.parse(attrs.chart);
                    Highcharts.chart(element[0], scope.options);
                  //  $(element[0]).highcharts(charts);

                });
            }
        };
    })

  //controller function
    .controller('myController', function ($scope, $http) {
      $http.get('datascatter.json').success(function (data, status) {

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



        // Sample options for first chart
        $scope.chartOptions = {

          chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Height Versus Weight of 507 Individuals by Gender'
            },
            subtitle: {
                text: 'Source: Heinz  2003'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Height (cm)'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Weight (kg)'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x} cm, {point.y} kg'
                    }
                }
            },
            series: [{}]

        };
        // vm.getJSON("datascatter.json", function(data) {
        //
        //     options.series[0].data = data;
        //     var chart = new Highcharts.Chart(options);
        // });


        // function loadJson() {
        //   console.log("ddd");
        // $(document).ready(function()
        // {
        // //alert("inside");
        // var chart;
        // var url = "datascatter.json";
        // console.log(url,"hhhhh");
        // $scope.getJSON(url, function(data){
        //
        //   chartOptions.series[0].data = data;
        //   var chart = new Highcharts.Chart(chartOptions);
        //  });
        //
        // });
        // }


        })

    });
