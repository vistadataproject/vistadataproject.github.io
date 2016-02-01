define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/IgView.html',
    'd3',
    'barchart',
    'bardual',
    'c3',
    'piechart',
    'stackedbar',
    'circlepack',
    'circlechart',
    'directedgraph',
    'tree',
    'treemap'

], function($, _, Backbone, IgViewTemplate, d3, BarChart, BarDual, c3, 
    PieChart, StackedBar, CirclePack, CircleChart, DirectedGraph, 
    TreeChart, TreeMap) {

    var ChartView = Backbone.View.extend({

        initialize: function() {
            this.render();
            this.generateBarChart(this.el);
            this.generateDualBarChart(this.el);
            this.generateAreaChart(this.el); //by c3.js
            this.generateGenderPieChart(this.el);
            this.generateGenderPieChart2(this.el);
            this.generateStackedBarChart(this.el);
            this.generateCircleChart(this.el);
            this.generateCirclePackChart(this.el);
            this.generateDirectedGraphChart(this.el);
            this.generateTreeChart(this.el);
            this.generateTreeMapChart(this.el);
        },

        render: function() {
            $(this.el).html(IgViewTemplate);
            return this;
        },

        generateBarChart: function(el) {
            var selector = $(el).find('#barChart1 .loading-label');
            selector.html('loading...');
            BarChart.displayBarChart({
                jsonPath: '/chcs/ig/bar_chart',
                divId: 'barChart1',
                selector: el,
                margin: {
                    top: 40,
                    right: 10,
                    bottom: 50,
                    left: 100
                },
                width: 800,
                height: 400,
                nameTitle: 'name',
                valueTitle: 'properties',
                XLabelTitle: 'file',
                onDisplay: function() {
                    selector.html('');
                }
            });
        },

        generateDualBarChart: function(el) {
            var selector = $(el).find('#barChart2 .loading-label');
            selector.html('loading...');
            BarDual.displayBarChart({
                jsonPath: '/chcs/ig/dual_bar_chart',
                divId: 'barChart2',
                selector: el,
                margin: {
                    top: 40,
                    right: 10,
                    bottom: 50,
                    left: 100
                },
                width: 800,
                height: 400,
                nameTitle: 'file',
                valueTitle: 'chcssPop',
                valueTitle2: 'tc2Pop',
                valueTitleDisplay: 'CHCSS',
                valueTitleDisplay2: 'TC2',
                XLabelTitle: 'file',
                onDisplay: function() {
                    selector.html('');
                }
            });
        },
        //generate area chart demo by using c3.js
        generateAreaChart: function(el) {
            $.getJSON('/chcs/ig/area_chart').done(function(data) {
                var chart = c3.generate({
                    bindto: '#areaChart1',
                    data: {
                        // iris data from R
                        columns: data,
                        types: {
                            data1: 'area',
                            data2: 'area-spline'
                        }
                    }
                });
            });
        },
        //this is to use c3.js library to generate pie chart
        generateGenderPieChart: function(el) {
            ///convert data format for c3.js
            function convertData(data) {
                var res = [];
                data.forEach(function(d) {
                    var one = [];
                    one.push(d['_id']);
                    one.push(d.count);
                    res.push(one);
                });
                return res;
            };
            $.getJSON('/chcs/ig/patient_gender?dataset=chcs-1').done(function(data) {
                var chart = c3.generate({
                    bindto: d3.select(el).select('#pieChart1'),
                    data: {
                        // iris data from R
                        columns: convertData(data),
                        type: 'donut', //or 'pie'
                        onclick: function(d, i) {
                            console.log('onclick', d, i);
                        },
                        onmouseover: function(d, i) {
                            console.log('onmouseover', d, i);
                        },
                        onmouseout: function(d, i) {
                            console.log('onmouseout', d, i);
                        }
                    }
                });
            });
        },
        //this is to demo how to use our own IFG library to generate pie chart
        generateGenderPieChart2: function(el) {
            var selector = $(el).find('#pieChart2 .loading-label');
            selector.html('loading...');

            PieChart.displayPie({
                divId: 'pieChart2', //to display the pie
                selector: el,
                json: '/chcs/ig/patient_gender?dataset=chcs-1', //path to json file
                categoryTitle: '_id', //the category name of the json data
                valueTitle: 'count', //the value name of the json data
                width: 400,
                height: 400,
                innerCircleRadius: 50,
                onDisplay: function() {
                    selector.html('');
                }
            });
        },

        generateStackedBarChart: function(el) {
            var selector = $(el).find('#barChart3 .loading-label');
            selector.html('loading...');
            StackedBar.displayStackedBar({
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 130,
                    left: 40
                },
                width: 1000,
                height: 500,
                colors: ["#d0743c", "#6b486b"], //color of stacked bar
                divId: "barChart3", //div to show the chart
                selector: el, //parent container element
                jsonPath: "/chcs/ig/stacked_bar_chart", // json path
                categoryTitle: "fileIndex", //x axis category
                nameTitle: "name", //name to be displayed when mouse over
                valueTitles: ["propertiesDataType", "propertiesObjectType"], //values to show in each bar,
                valueTitlesDisplay: ["properties", "links"], //title to display on the bar tip
                YLegendText: "Property Count", //this is the text displayed on the Y Axis
                showXAxis: false, //show X Axis
                onDisplay: function() { //call back function after graph created
                    selector.html(''); //remove 'loading...'
                }
            });

        },

        generateCircleChart: function(el) {
            var selector = $(el).find('#circleChart1 .loading-label');
            selector.html('loading...');
            CircleChart.displayCircleChart({
                divId: 'circleChart1',
                selector: el,
                jsonPath: '/chcs/ig/circle_chart',
                title: 'Relative patient data sizes',
                minimumBubbleSize: 5,
                height: 400,
                width: 900,
                onDisplay: function() {
                    selector.html('');
                }
            });
        },

        generateCirclePackChart: function(el) {
            var selector = $(el).find('#circleChart2 .loading-label');
            selector.html('loading...');
            CirclePack.displayCirclePack({
                divId: "circleChart2",
                selector: el,
                jsonPath: "/chcs/ig/circle_pack_chart",
                margin: 10,
                outerDiameter: 800,
                colors: ["#FFFFFF", "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"], //colors to show on the circles
                nameTitle: "name", //the json key for the name of the circle
                valueTitle: "size", //the json key for the value of the circle       
                onDisplay: function() {
                    selector.html('');
                }
            });
        },

        generateDirectedGraphChart: function(el) {
            var selector = $(el).find('#directedChart1 .loading-label');
            selector.html('loading...');
            DirectedGraph.showDirectedGraph({
                jsonPath: '/chcs/ig/directed_graph_chart',
                showArrow: true,
                width: 1000,
                height: 1000,
                forceCharge: -20,
                linkDistance: 10,
                divId: "directedChart1",
                selector: el,
                onDisplay: function() {
                    selector.html('');
                }
            });
        },

        generateTreeChart: function(el) {
            var selector = $(el).find('#treeChart1 .loading-label');
            selector.html('loading...');
            TreeChart.displayTree({
                margin: [20, 20, 20, 120],
                width: 1000,
                height: 1000,
                jsonPath: "/chcs/ig/tree_chart",
                topDown: false, //false - left to right, true - top down
                divId: "treeChart1",
                selector: el,
                onDisplay: function() {
                    selector.html('');
                }
            });
        },

        generateTreeMapChart: function(el) {
            var selector = $(el).find('#treeMapChart1 .loading-label');
            selector.html('loading...');
            TreeMap.displayTreeMap({
                width: 1000,
                height: 620,
                jsonPath: "/chcs/ig/tree_map_chart",
                valueTitle: "size",
                nameTitle: "name",
                divId: "treeMapChart1",
                selector: el,
                onDisplay: function() {
                    selector.html('');
                }
            });
        }

    });
    return ChartView;

});



