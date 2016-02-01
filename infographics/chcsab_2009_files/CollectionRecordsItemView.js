define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/CollectionRecordsItemView.html'
], function($, _, Backbone, CollectionRecordsItemViewTemplate) {

    var CollectionRecordsItemView = Backbone.View.extend({

        tagName: "li",

        initialize: function(params) {
            this.dataset = params.dataset;
            this.model = params.model;
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },

        render: function() {
            this.model.set('dataset', this.dataset);
            $(this.el).html(_.template(CollectionRecordsItemViewTemplate, this.model.toJSON()));
            return this;
        }

    });

    return CollectionRecordsItemView;

});