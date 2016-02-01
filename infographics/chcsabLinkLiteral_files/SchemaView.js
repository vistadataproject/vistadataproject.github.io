define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/SchemaView.html'
], function($, _, Backbone, SchemaViewTemplate) {

    var SchemaView = Backbone.View.extend({

        initialize: function(params) {
            //this.dataset = params.dataset;
            //this.id = params.id;
            //this.collectionName = params.collectionName;

            this.container = $('#content');
            this.render();

            if (params && params.dataset) {
                this.dataset = params.dataset;
                if (params.schemaId) {
                    this.schemaId = params.schemaId;
                    this.getJson();
                }

            }

        },

        events: {
            //'click .viewjson': 'viewJson',
            //'click .viewtable': 'viewTable'
            'click #btnSchemaId': 'getSchemaById',
            'change #dataset': 'changeDataset',
            'click a.accordion-toggle': 'showCollapsedTarget',
            'click a.pointer-to-class': 'showClassFromPointer'
        },

        setDatasets: function() {
            var self = this;
            var deferredObject = $.Deferred();
            $.getJSON('/dataset', function(datasets) {
                var html = '';

                datasets.forEach(function(dataset) {

                    if (dataset.schema) {
                        if (self.dataset && self.dataset === dataset.name) {
                            html += '<option class="datasetOption" selected="true" value="' + dataset.name + '">' + dataset.name + '</option>';
                        } else {
                            html += '<option class="datasetOption" value="' + dataset.name + '">' + dataset.name + '</option>';
                        }
                    }

                });
                self.$el.find('#dataset').html(html);

                deferredObject.resolve();
            });

            return deferredObject.promise();
        },

        changeDataset: function() {
            this.dataset = this.$el.find('#dataset').val();
            this.setIds();
        },

        setIds: function() {
            this.dataset = this.$el.find('#dataset').val();
            var self = this;
            $.getJSON('/schema_ids?dataset=' + self.dataset, function(schemaIds) {
                var html = '';
                schemaIds.forEach(function(schemaId) {

                    if  (self.schemaId && self.schemaId === schemaId.id) {
                        html += '<option class="schemaIdOption" selected="true" value="' + schemaId.id + '">' + schemaId.label + '</option>';
                    } else {
                        html += '<option class="schemaIdOption" value="' + schemaId.id + '">' + schemaId.label + '</option>';

                    }


                });
                self.$el.find('#schema-id').html(html);
            });
        },

        getSchemaById: function() {
            this.schemaId = this.$el.find('#schema-id').val();
            this.dataset = this.$el.find('#dataset').val();

            //this.$el.find('#pgrafContent').html(patientId + ' ' + domain);
            this.getJson();

        },

        showClassFromPointer: function(element) {
            this.schemaId = element.target.attributes.getNamedItem('data-schema-id').value;
            $('option.datasetOption[value="' + this.dataset +'"]').attr('selected', 'true');
            $('option.schemaIdOption[value="' + this.schemaId +'"]').attr('selected', 'true');

            $('body').scrollTop(0);
            this.getJson();
        },

        getJson: function() {
            var self = this;
            //show loading..
            this.$el.find('#schemaByIdContent').html('<br><i class="icon-spinner icon-spin icon-large"></i> loading data...please wait.');

            var url = '/schema?dataset=' + this.dataset + '&id=' + this.schemaId;
            $.getJSON(url, function(data) {
                var html = '';

                html = '<h4>Raw schema data:</h4><pre><code>' + JSON.stringify(data, undefined, 2) + '</code></pre><br/>';
                self.$el.find('#schemaByIdContent').html(html);

                if (data.properties) {
                    var filemanNo = data.id;
                    if (data.fmDD && data.fmDD.length > 0) {
                        filemanNo = data.fmDD.substring(5);
                    }
                    var descriptionHtml = '<h4>' + data.label + ' (' + filemanNo + ') Schema Properties:</h4></br>';

                    if (data.description && data.description.length > 0) {
                        var descriptionString = '' + data.description;
                        descriptionString = descriptionString.trim().replace(/\r/g, '<br/>');
                        descriptionHtml += descriptionString + '</br></br>';
                    }

                    var descriptionsTable = self.buildEmbeddedClassSubtableRow(self, data);

                    descriptionHtml += descriptionsTable;
                    if (data.clinicalClass && data.clinicalClass.id) {
                        self.$el.find('#schemaType').html('<h2 class="schema-clinical-type-label"> CLINICAL (' + data.clinicalClass.id + ')</h2>');
                        Backbone.history.navigate('clinical/' + self.dataset + '/' + self.schemaId, {trigger: "true"});
                    } else {
                        Backbone.history.navigate('schema/' + self.dataset + '/' + self.schemaId, {trigger: "true"});
                    }

                    self.$el.find('#schemaDescription').html(descriptionHtml);
                }
            });
        },

        buildEnumerationSubtableRow: function(range, target) {
            var html = '';
            var divOpenTagCollapse = '<div class="accordion-body collapse" id="' + target + '">';
            var divCloseTag = '</div>';
            var enumerationsTable = '<table class="table"><tbody>';

            if (range && range.length > 0) {

                var enumerationsListAsString = '';

                for (var i = 0; i < range.length; i++){
                    if (enumerationsListAsString) {
                        enumerationsListAsString += "; ";
                    }
                    enumerationsListAsString += range[i];
                }
                enumerationsTable += '<tr><td >&nbsp;</td><td>';
                enumerationsTable += enumerationsListAsString;
                enumerationsTable += '</td></tr></tbody></table>'

                html += '<tr><td colspan="4" class="hidden-row">' + divOpenTagCollapse
                    + enumerationsTable
                    + divCloseTag + '</td></tr>';
            }
            return html;
        },

        buildEmbeddedClassSubtableRow: function(self, embeddedClass, target, propertyNum) {
            var html = '';
            var divOpenTagCollapse = '<div class="accordion-body collapse" ';
            if (target) {
                divOpenTagCollapse += 'id="' + target + '">';
            } else {
                divOpenTagCollapse += '>';
            }


            var divCloseTag = '</div>';
            var embeddedClassTable = '<table class="table table-nested"><thead>';

            if (propertyNum) {
                var filemanNo = embeddedClass.id;
                if (embeddedClass.fmDD && embeddedClass.fmDD.length > 0) {
                    filemanNo = embeddedClass.fmDD.substring(5);
                }
                embeddedClassTable += '<th>&nbsp;</th><th colspan="3"><h5>Subclass: ' + embeddedClass.label + ' (' + filemanNo + ')</h5></th></tr>';
            }

            embeddedClassTable += '<tr><th>Order</th><th>Label</th><th>Type</th><th>Description</th></tr></thead><tbody>';

            if (embeddedClass && embeddedClass.properties && embeddedClass.properties.length > 0) {
                for (var i = 1; i <= embeddedClass.properties.length; i++) {
                    var currentProperty = embeddedClass.properties[i-1];
                    var currentRow = '';
                    var toggleTargetName;
                    var orderNum = '';
                    if (propertyNum) {
                        orderNum = propertyNum + "." + i;
                    } else {
                        orderNum = i;
                    }
                    toggleTargetName = ('property' + orderNum).replace('.', '-');

                    //currentRow += '<tr><td>'
                    //    + orderNum + '</td><td>'
                    //    + currentProperty.label + '</td><td>';

                    currentRow += '<tr><td>' + orderNum +'</td><td>'
                        + currentProperty.label + ' (' + currentProperty.id + ') </td><td>';

                    if (currentProperty.datatype === '[OBJECT]'
                        || currentProperty.datatype === 'ENUMERATION') {
                        currentRow += '<a data-toggle="collapse" href="#' + toggleTargetName
                            + '" class="accordion-toggle" aria-controls="' + toggleTargetName + '" aria-expanded="false">'
                            + currentProperty.datatype + '&nbsp;<i class="icon-chevron-down"></i></a></td><td>';

                    } else if (currentProperty.datatype === 'POINTER') {
                        if (currentProperty.range && currentProperty.range.id) {
                            currentRow += '<a class="pointer-to-class" data-schema-id="' + currentProperty.range.id + '" >'
                                + currentProperty.datatype + ' (' + currentProperty.range.id + ')</a></td><td>';
                        } else {
                            currentRow += currentProperty.datatype + '</td><td>';
                        }

                    } else {
                        currentRow += currentProperty.datatype + '</td><td>';

                    }

                    if (!currentProperty.description) {
                        currentProperty["description"] = "";
                    }
                    currentRow += currentProperty.description.trim().replace(/\r/g, '<br/>')
                        + '</td></tr>';

                    //descriptionsString += data.properties[i].description + "\n";


                    if (currentProperty.datatype === '[OBJECT]') {
                        currentRow += self.buildEmbeddedClassSubtableRow(self, currentProperty.range, toggleTargetName, orderNum);


                    } else if (currentProperty.datatype === 'ENUMERATION' ) {
                        // add in the toggle to the property row

                        // add the hidden table
                        currentRow += self.buildEnumerationSubtableRow(currentProperty.range, toggleTargetName);
                    }

                    embeddedClassTable += currentRow;
                }

                embeddedClassTable += '</tbody></table>';
                //descriptionHtml += descriptionsTable;

                if (target) {
                    html += '<tr><td class="hidden-row" width="5%"></td><td colspan="3" class="hidden-row">' + divOpenTagCollapse
                        + embeddedClassTable
                        + divCloseTag + '</td></tr>';
                } else {
                    html += embeddedClassTable;
                }
            }
            return html;
        },

        showCollapsedTarget: function(element) {
            console.log(element);

            console.log(element.target.attributes.getNamedItem('href').value);
            $('div.collapse'+element.target.attributes.getNamedItem('href').value).collapse('toggle');

            if (element.target.children) {
                $('a[href="' + element.target.attributes.getNamedItem('href').value + '"]').find('i').toggleClass('icon-chevron-down icon-chevron-up')
            }

        },

        template: _.template(SchemaViewTemplate),

        render: function() {
            var self = this;
            $(this.el).html(self.template());
            //this.setDatasets();

            var promise = this.setDatasets();
            promise.done(function () {
                self.setIds();
            });

            //this.currentDataset = "chcs-AB";
            //this.setIds();


            this.container.html(self.el);

            return this;
        }

    });

    return SchemaView;
});