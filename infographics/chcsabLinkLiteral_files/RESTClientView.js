define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/RestClientView.html'
], function($, _, Backbone, RESTClientViewTemplate) {

    var RESTClientView = Backbone.View.extend({

        initialize: function() {
            this.render();
            $('#content').html(this.el);
        },

        setDatasets: function() {
            var self = this;
            $.getJSON('/dataset', function(datasets) {
                var html = '';
                datasets.forEach(function(dataset) {

                    html += '<option class="datasetOption" value="' + dataset.name + '">' + dataset.name + '</option>';

                });
                self.$el.find('#dataset').html(html);
            });
        },

        render: function() {
            $(this.el).html(RESTClientViewTemplate);
            this.setDatasets();
            return this;
        },

        events: {
            'click #submit': 'run'
        },

        run: function() {
            var command = this.$el.find('#commands').val().trim().toLowerCase();
			var dataset =this.$el.find('#dataset').val();
            var self = this;
			function getJSON(url) {
				$.getJSON( url, function(data) {
					var html = '<h4>JSON Link</h4><a href="' + url + '">' + url + '</a><h4>Result</h4><pre class="clearboth"><code>' + JSON.stringify(data, undefined, 2) + '</code></pre>';
					self.$el.find('#result').html(html);
				});			   
			}
			
			if (command.indexOf('select document') == 0) {
			   var docId = command.substring(16);
			
  			   var url = '/record?dataset=' + dataset + '&datatype=' + docId.substring(0, docId.indexOf('-')) + '&id='  + docId;
			   getJSON(url);
			}
			else {
				switch (command) {
					case 'select datasets':
					    getJSON('/dataset');
						break;
					case 'select datatypes':
					    getJSON('/collection_meta?dataset=' + dataset);
						break;
						
					default:
					 var html = '<h4>Result</h4><pre class="clearboth">invalid command</prd>';
							self.$el.find('#result').html(html);

				}
			}
        }

    });
    return RESTClientView;

});