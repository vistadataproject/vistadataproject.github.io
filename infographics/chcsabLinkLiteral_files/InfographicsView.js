define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/InfographicsView.html',
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
        },

        events: {
            'change #dataset': 'changeDataset',
            'change #chart': 'loadCharts'
        },

        render: function() {
            $(this.el).html(IgViewTemplate);
            this.setDatasets();
            //this.$el.find('#year').style.display = 'none'; 
			
            return this;
        },

        //populate the dataset dropdown when page loads
        setDatasets: function() {
            var self = this;
            $.getJSON('/dataset', function(datasets) {
                var html = '';
				datasets.forEach(function(dataset) {
					if (dataset.rawChcs)
						html += '<option class="datasetOption" value="' + dataset.name + '">' + dataset.name + '</option>';

				});
				self.$el.find('#dataset').html(html);							
				self.dataset = self.$el.find('#dataset').val();
				//self.loadCharts();
				self.setCharts();
            });
        },

        //populate the chart dropdown based on the selected dataset
		setCharts: function() {
            var self = this;
            $.getJSON('/igTitles?dataset=' + this.dataset, function(datasets) {
                var html = '';
				datasets.sort(function (a, b) {
				    return a.title.localeCompare(b.title);
				});
				
                datasets.forEach(function(chart) {
                    html += '<option value="' + chart.id + '">' + chart.title + '</option>';
                });
                self.$el.find('#chart').html(html);
                
                self.loadCharts();
            });
        },

        //when user select a different dataset from dropdown
        changeDataset: function() {
            this.dataset = this.$el.find('#dataset').val();
            this.setCharts();
			this.loadCharts();
        },


        //when user select a different chart from dropdown
	    loadCharts: function() {
			var id = this.$el.find('#chart').val();
			var substr;
			if (id.length > 8 ) {
				substr = id.substring(0, 9); //for creation_
				isTree = id.substring(0, 4); // fore tree graph
			}
			if(id === 'how_data_populated') 
				this.generatePieChartDataPopulated(this.el);
			else if (id === 'patientOther')
				this.generateTreeMap(this.el);
			else if (id === 'providerPersonnel')
				this.generatePieChartDataPopulated(this.el);
			else if (id === 'linkVsLiteral')
				this.generatePieChartDataPopulated(this.el);
			else if (id === 'literalTypes')
				this.generatePieChartDataPopulated(this.el);			
			else if (id === 'gatheringClass')
				this.generateStackedBarChartForClasses(this.el);			     				
			else if (id === 'chcsUsers') 
				this.generatePieChartDataPopulated(this.el);
			else if (id === 'classesOfChcsUsers') 
				this.generatePieChartDataPopulated(this.el);				
			else if (substr ==='providerC')  //ex. providerCreation_2009, provierCreation_2008 etc.
				this.generatePieChartDataPopulated(this.el);			  
			else if(substr === 'creation_')   //ex creation_2009, creation_2008 etc.
				this.generateStackedBarChartCreation(this.el);
			else if (isTree === 'tree') 
				this.generateTreeChart(this.el);			
		},

        //use our own Infographics library to generate a pie chart
		//for more info please visit https://github.com/hokukahu/infographics/wiki
        generatePieChartDataPopulated: function(el) {
            var selector = $(el).find('#chartPopulated'); //id of the chart container
            selector.html('<div class="loadingLabel"><i class="icon-spinner icon-spin icon-large"></i> loading data..</div>');
            var id = this.$el.find('#chart').val();
            PieChart.displayPie({
                divId: 'chartPopulated', 
                selector: el,
                json: '/igData?dataset=' + this.dataset + '&id=' + id, //path to json file
                categoryTitle: 'Type', //the category name of the json data, needs to match the attribute case sensitive
                valueTitle: 'Count', //the value name of the json data
                width: 400,
                height: 400,
                innerCircleRadius: 50,
                onDisplay: function() {
                    selector.find('.loadingLabel').html('');
                }
            });
        },
		
		//stacked bar chart
		generateStackedBarChartCreation: function(el) {

            var selector = $(el).find('#chartPopulated');
            selector.html('<div class="loadingLabel"><i class="icon-spinner icon-spin icon-large"></i> loading data..</div>');
            var id = this.$el.find('#chart').val();
            var year = this.$el.find('#year').val();		
	        StackedBar.displayStackedBar({
		        "margin" : {top: 20, right: 20, bottom: 130, left: 40},
                "width" : 1000,
                "height" : 500,
                "colors" : ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22"],
                "divId" : "chartPopulated", //div to show the chart
                "jsonPath" : '/igData?dataset=' + this.dataset + '&id=' + id, //path to json file
                "categoryTitle" : "name", //x axis category
                "nameTitle" : "name", //name to be displayed when mouse over
                "valueTitles": ["Prescription", "Nursing", "Appointment", "Radiology Exam", "Lab Result", "Record Tracking", "Patient", "Fill Rx", "Order"],
                "valueTitlesDisplay" : ["Prescription", "Nursing", "Appointment", "Radiology Exam", "Lab Result", "Record Tracking", "Patient", "Fill Rx", "Order"],
                "YLegendText" : "Number Created", //this is the text displayed on the Y Axis
                "showXAxis" : true, //show X Axis
                "firstBarMarginLeft" : 15, //margin between the y axis and the first bar
                "legendLocation" : 'right', //show the legend to left or right options: left, right
                onDisplay: function() { //call back function after graph created
                    selector.find('.loadingLabel').html('');
                }
            });		
		
		},

		//tree chart
		generateTreeChart: function(el) {
            var selector = $(el).find('#chartPopulated');
            var id = this.$el.find('#chart').val();
            selector.html('<div class="loadingLabel"><i class="icon-spinner icon-spin icon-large"></i> loading data..</div>');
            TreeChart.displayTree({
                "margin": [20, 20, 20, 20],
                "width": 2000,
                "height": 500,
				"showRootText": true,
                "jsonPath": '/igData?dataset=' + this.dataset + '&id=' + id, //path to json file
                "topDown": false, //false - left to right, true - top down
                "divId": "chartPopulated",
                "selector": el,
                onDisplay: function() { //call back function after graph created
                    selector.find('.loadingLabel').html('');
                }
            });
        },	
		
		//tree map
		generateTreeMap: function(el) {
            var selector = $(el).find('#chartPopulated');
            var id = this.$el.find('#chart').val();
            selector.html('<div class="loadingLabel"><i class="icon-spinner icon-spin icon-large"></i> loading data..</div>');
            TreeMap.displayTreeMap({
                width: 1000,
                height: 620,
                jsonPath: '/igData?dataset=' + this.dataset + '&id=' + id, //path to json file
                valueTitle: "size",
                nameTitle: "name",
                divId: "chartPopulated",
                selector: el,
                onDisplay: function() {
                    selector.find('.loadingLabel').html('');
                }
            });
        },			
		
		//stacked bar chart for the chart "gathering classes" 
		generateStackedBarChartForClasses: function(el) {

            var selector = $(el).find('#chartPopulated');
            selector.html('<div class="loadingLabel"><i class="icon-spinner icon-spin icon-large"></i> loading data..</div>');
            var id = this.$el.find('#chart').val();
            var year = this.$el.find('#year').val();		
	        StackedBar.displayStackedBar({

		        "margin" : {top: 20, right: 20, bottom: 130, left: 40},
                "width" : 5000,
                "height" : 500,
                "colors" : ["#1f77b4", "#ff7f0e"],
                "divId" : "chartPopulated", //div to show the chart
                "jsonPath" : '/igData?dataset=' + this.dataset + '&id=' + id, //path to json file
                "categoryTitle" : "name", //x axis category
                "nameTitle" : "name", //name to be displayed when mouse over
                "valueTitles": ["link", "literal"],
                "valueTitlesDisplay" : ["link", "literal"],
                "YLegendText" : "Link vs Literal", //this is the text displayed on the Y Axis
                "showXAxis" : false, //show X Axis
                "firstBarMarginLeft" : 15, //margin between the y axis and the first bar
                "legendLocation" : 'left', //show the legend to left or right options: left, right
                onDisplay: function() { //call back function after graph created
                    selector.find('.loadingLabel').html('');
                }
            });		
		
		}


    });
    return ChartView;

});