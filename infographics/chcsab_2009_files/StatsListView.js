define([
    'jquery',
    'underscore',
    'backbone',
    './StatsListItemView',
    'text!templates/StatsListView.html'
], function($, _, Backbone, StatsListItemView, StatsListViewTemplate) {

    var StatsListView = Backbone.View.extend({

        initialize: function(params) {
            this.dataset = params.dataset;
            this.render();
            var self = this;
            this.loadData(function(){
                self.models.sort(self.sortFuntions.sortById);
            });            

        },

        events: {
            'change input[type=radio]': 'changeSort',
            'change #datasets': 'changeDataset'
        },

        loadData: function(callback) {
            var self = this;
            this.$el.find('.thumbnails').html('<br><i class="icon-spinner icon-spin icon-large"></i> loading data...please wait.');
            
            var CollectionStats = Backbone.Collection.extend({
                url: "/collection_meta?dataset=" + this.dataset
            });
            var stats = new CollectionStats();
            stats.fetch({
                success: function() {
                    self.models = stats.models;
                    self.displayItems();
                    callback();
                },
                error: function(err) {
                    $('#content').html("Error! Dataset not found.");
                }
            });
        },

        changeDataset: function() {
            this.dataset = this.$el.find('#datasets').val();
            this.loadData();
        },

        setDatasets: function(datasetName) {
            var self = this;
            $.getJSON('/dataset', function(datasets) {
                var html = '';
                datasets.forEach(function(dataset) {
                    if (datasetName.toLowerCase() === dataset.name.toLowerCase())
                        html += '<option selected class="datasetOption" value="' + dataset.name + '">' + dataset.name + '</option>';
                    else
                        html += '<option class="datasetOption" value="' + dataset.name + '">' + dataset.name + '</option>';

                });
                self.$el.find('#datasets').html(html);
            });
        },

        sortFuntions: {
            sortById: function(a, b) {
                var aStr = a.get('collection').toString();
                var bStr = b.get('collection').toString();
                return aStr.localeCompare(bStr);
            },
            sortBySize: function(a, b) {
                var aStr = a.get('originalStorageSize').toString();
                var aSize = parseInt(aStr);
                var bStr = b.get('originalStorageSize').toString();
                var bSize = parseInt(bStr);
                return bSize - aSize;
            },
            sortByCount: function(a, b) {
                var aCount = parseInt(a.get('count').toString());
                var bCount = parseInt(b.get('count').toString());
                return bCount - aCount;
            },
            sortByTotalAssertions: function(a, b) {
                var aCount = parseInt(a.get('totalAssertions') === null ? '0' : a.get('totalAssertions'));
                var bCount = parseInt(b.get('totalAssertions') === null ? '0' : b.get('totalAssertions'));
                return bCount - aCount;
            }
        },

        changeSort: function() {
            var sortBy = this.$el.find('input[name="sort"]:checked').val();
            switch (sortBy) {
                case 'id':
                    this.models.sort(this.sortFuntions.sortById);
                    this.displayItems();
                    break;
                case 'size':
                    this.models.sort(this.sortFuntions.sortBySize);
                    this.displayItems();
                    break;
                case 'count':
                    this.models.sort(this.sortFuntions.sortByCount);
                    this.displayItems();
                    break;
                case "totalassertions":
                    this.models.sort(this.sortFuntions.sortByTotalAssertions);
                    this.displayItems();
                    break;
            }
        },

        displayItems: function(sortFunc) {
            var len = this.models.length;

            this.$el.find('.thumbnails').html('');
            for (var i = 0; i < len; i++) {
                var name = this.models[i].get('collection').toString();
                this.models[i].set('dataset', this.dataset);

                $('.thumbnails', this.el).append(new StatsListItemView({
                    model: this.models[i]
                }).render().el);

            }
        },

        render: function() {
            $(this.el).html(_.template(StatsListViewTemplate));
            //this.displayItems();
            this.setDatasets(this.dataset);
            return this;
        }
    });

    return StatsListView;

});