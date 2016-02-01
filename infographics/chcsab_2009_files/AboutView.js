define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/AboutView.html'
], function($, _, Backbone, AboutViewTemplate) {

    var AboutView = Backbone.View.extend({

        initialize: function() {
            this.render();
        },

        render: function() {
            $(this.el).html(AboutViewTemplate);
            return this;
        }

    });
    return AboutView;

});