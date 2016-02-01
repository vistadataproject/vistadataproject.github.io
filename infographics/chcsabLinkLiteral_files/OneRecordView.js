define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/OneRecordView.html',
    'prettyprint'
], function($, _, Backbone, RecordViewTemplate, PrettyPrint) {

    var OneRecordView = Backbone.View.extend({

        initialize: function(params) {
            this.dataset = params.dataset;
            this.id = params.id;
            this.collectionName = params.collectionName;
            this.container = $('#content');
            this.render();
        },

        events: {
            'click .viewjson': 'viewJson',
            'click .viewtable': 'viewTable'
        },

        viewJson: function() {
            this.$el.find('.recordDetail').html('<pre><code>' + JSON.stringify(this.mod, undefined, 2) + '</code></pre>');
        },

        viewTable: function() {
            var self = this;
            var htmlEl = PrettyPrint(this.mod.toJSON());
            $(htmlEl).find('td').filter(function() {
                var text = $(this).text();
                return text.trim() === "id";
            }).each(function(i) {
                //the element after "id", the value of Id
                var el = $(this).next();
                var id = el.text();
                if (id) {
                    id = id.substring(1, id.length - 1); //remove quotes
                    //turn id text into link
                    var pos = id.indexOf('-');
                    if (pos > -1) {
                        var coll = id.substring(0, pos);
                        //#record?dataset=chcs-1&collection=2&id=2-42
                        var link = '<a href=#record?dataset=' + self.dataset + '&datatype=' + coll + '&id=' + id + '>' + id + '</a>';
                        el.html(link);
                    }
                }
            });
            this.$el.find('.recordDetail').html($(htmlEl)[0]);
        },

        getRecord: function() {
            var self = this;
            var Mod = Backbone.Model.extend({
                url: '/record?dataset=' + this.dataset + '&datatype=' + this.collectionName + '&id=' + this.id
            });
            this.mod = new Mod();
            this.mod.fetch({
                success: function() {
                    self.viewTable();
                }
            });
        },

        template: _.template(RecordViewTemplate),

        render: function() {
            $(this.el).html(this.template({
                id: this.id
            }));
            this.getRecord();
            this.container.html(this.el);
            return this;
        }

    });

    return OneRecordView;
});