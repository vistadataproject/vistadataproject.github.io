define([
    'jquery',
    'underscore',
    'backbone',
    './CollectionRecordsItemView',
    'text!templates/CollectionRecordsView.html'
], function($, _, Backbone, CollectionRecordsItemView, CollectionRecordsTemplate) {

    var CollectionRecordsListView = Backbone.View.extend({

        initialize: function(params) {
            this.dataset = params.dataset;
            this.collectionName = params.collectionName;
            this.container = $("#content");
            this.render();
        },

        events: {
            'click .prevPage': 'prevPage',
            'click .nextPage': 'nextPage'
        },

        template: _.template(CollectionRecordsTemplate),

        prevPage: function() {
            if (this.page > 1) {
                this.page--;
                this.setCollection();
            }
        },

        nextPage: function() {
            this.page++;
            this.setCollection();
        },

        page: 1, //current page

        pageSize: 50, //items to show for each page

        render: function() {
            var self = this;
            $(this.el).html(self.template({
                collectionName: self.collectionName
            }));

            this.setCollection();
            this.container.html(self.el);

            return this;
        },
        setPage: function() {
            this.$el.find('.page').html('Page ' + this.page);
        },
        setCollection: function() {
            var self = this;
            this.setPage();
            var Coll = Backbone.Collection.extend({
                url: '/record?dataset=' + this.dataset + '&datatype=' + this.collectionName + '&pagesize=' + this.pageSize + '&page=' + this.page
            });
            var coll = new Coll();
            coll.fetch({
                success: function() {
                    var len = coll.models.length;
                    self.showHideNexPrePage(len);
                    $('.thumbnails').html('');
                    for (var i = 0; i < len; i++) {
                        coll.models[i].set('collectionName', self.collectionName);
                        $('.thumbnails', self.el).append(new CollectionRecordsItemView({
                            dataset: self.dataset,
                            model: coll.models[i]
                        }).render().el);
                    }
                }
            });
        },
        showHideNexPrePage: function(len) {
            var self = this;
            if (len < self.pageSize) {
                self.$el.find('.nextPage').hide();
            } else {
                self.$el.find('.nextPage').show();
            }

            if(self.page == 1) {
                self.$el.find('.prevPage').hide();
            } else {
                self.$el.find('.prevPage').show();
            }

        }
    });

    return CollectionRecordsListView;

});