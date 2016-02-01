define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/HomeView.html'
], function($, _, Backbone, HomeViewTemplate) {

    var HomeView = Backbone.View.extend({

        initialize:function () {
        this.render();
    },

    render:function () {
        $(this.el).html(HomeViewTemplate);
		this.displayDataset();
		return this;
    },
	
	displayDataset:function () {
	    var self = this;
		$.getJSON('/dataset', function(datasets) {
			var html = '<table>';
			html += '<tr><th> Dataset </th><th> Description </th><th> Database </th><th> Raw </th><th> Schema </th><th> Date Created </th><th> Date Reloaded</th></tr>' ;
			datasets.forEach(function(dataset) {
				html += '<tr><td>' + dataset.name + '</td><td>' + dataset.description + '</td><td>' + dataset.database
                    + '</td><td>' + dataset.rawChcs + '</td><td>' + dataset.schema + '</td><td>' + dataset.dateCreated
                    + '</td><td>' + dataset.dateReloaded +  '</td></tr>' ;
			});
			html += '</table>';
            self.$el.find(".home-dataset").html(html);        
		});
		
	}


    });
    return HomeView;

});