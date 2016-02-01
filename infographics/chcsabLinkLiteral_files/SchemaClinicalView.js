define([
    'jquery',
    'underscore',
    'backbone',
    'views/schema/SchemaView',
], function($, _, Backbone, SchemaView) {

    var SchemaClinicalView = SchemaView.extend({

        setIds: function() {
            this.dataset = this.$el.find('#dataset').val();
            var self = this;
            $.getJSON('/schema_clinical_ids?dataset=' + self.dataset, function (schemaIds) {
                var html = '';
                schemaIds.forEach(function (schemaId) {

                    if (self.schemaId && self.schemaId === schemaId.id) {
                        html += '<option class="schemaIdOption" selected="true" value="' + schemaId.id + '">' + schemaId.label + ' (' + schemaId.clinicalClass.id + ')</option>';
                    } else {
                        html += '<option class="schemaIdOption" value="' + schemaId.id + '">' + schemaId.label + ' (' + schemaId.clinicalClass.id + ')</option>';
                    }
                });
                self.$el.find('#schema-id').html(html);
            });

        }

    });

    return SchemaClinicalView;
});