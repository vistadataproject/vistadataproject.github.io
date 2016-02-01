define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/StatsListItemView.html', 
    '../../util'
], function($, _, Backbone, StatsListItemViewTemplate, Util) {

    var StatsListItemView = Backbone.View.extend({

        tagName: "li",

        //this is hard coded, should change after schema meta is loaded to mongo
        
        initialize: function() {
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
            this.model.set('countStr', Util.numberWithCommas(this.model.get('count')));
            var collection = this.model.get('collection');
            if(Util.CHCS_Cllection_Labels[collection]) {
                this.model.set('collectionName', Util.CHCS_Cllection_Labels[collection] + ' (' + collection + ')');
            } else {
                this.model.set('collectionName', collection.toString());
            }
        },

        render: function() {            
            $(this.el).html(_.template(StatsListItemViewTemplate, this.model.toJSON()));
            return this;
        },


        events: {
            'click .stats-box' : 'getCollectionRecords'
        },

        getCollectionRecords: function() {
            location.href = '#record?dataset=' + this.model.get('dataset') + '&datatype=' + this.model.get('collection');
        }

    });

    return StatsListItemView;

});