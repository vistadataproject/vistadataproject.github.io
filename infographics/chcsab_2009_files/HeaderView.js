define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/HeaderView.html'
], function($, _, Backbone, HeaderViewTemplate) {

    var HeaderView = Backbone.View.extend({

        initialize: function() {
            this.render();
        },

        render: function() {
            $(this.el).html(HeaderViewTemplate);
            return this;
        },

        selectMenuItem: function(menuItem) {
            $('.nav li').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }

    });
    return HeaderView;

});