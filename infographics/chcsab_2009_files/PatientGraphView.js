define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/PgrafView.html',
    'util'
], function($, _, Backbone, PgrafViewTemplate, Util) {

    var PatientGraphView = Backbone.View.extend({

        initialize: function() {
            this.container = $("#content");
            this.render();
        },

        events: {
            'click #btnPgraf': 'getPgraf',
            'keyup #patientid': 'keyPressHandler',
            'click #getTopPatients': 'getTopPatients',
            'click #topPatients': 'clickTopPatients',
            'change #dataset': 'changeDataset',
            'click a.accordion-toggle': 'showCollapsedTarget',
            'click a.record-update-link': 'updateRecord'
        },

        template: _.template(PgrafViewTemplate),

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

        changeDataset: function() {
            this.$el.find('#topPatients').html('');
        },

        render: function() {
            var self = this;
            $(this.el).html(self.template());
            this.setDatasets();
            this.container.html(self.el);

            return this;
        },

        keyPressHandler: function(event) {
            if (event.keyCode == 13) {
                this.getPgraf();
            }
        },

        getTopPatients: function(ev) {
            var self = this;
            ev.preventDefault();
            $.getJSON('/top_patients?dataset=' + this.$el.find('#dataset').val(), function(data) {
                var items = [];
                data.patients.forEach(function(patient) {
                    items.push("<a href='#' class='topPatients' style='margin-right:20px;' patientid='" + patient.id + "'>" + patient.name + "</a>  ");
                });
                self.$el.find('#topPatients').html(items.join(""));
            });
        },

        clickTopPatients: function(ev) {
            ev.preventDefault();
            var pid = $(ev.target).attr('patientid');
            this.$el.find('#patientid').val(pid);
            this.$el.find('#btnPgraf').click();
        },

        getPgraf: function() {
            this.patientId = this.$el.find('#patientid').val();
            this.domain = this.$el.find('#domain').val();
            this.dataset = this.$el.find('#dataset').val();

            //this.$el.find('#pgrafContent').html(patientId + ' ' + domain);
            this.getJson();
        },

        getJson: function(url) {
            var self = this;
            //show loading..
            this.$el.find('#pgrafContent').html('<br><i class="icon-spinner icon-spin icon-large"></i> loading data...please wait.');
            this.$el.find('#pgrafTable').html('<br><i class="icon-spinner icon-spin icon-large"></i> loading data...please wait.');

            if (!url) {
                url = '/patient_graph?dataset=' + this.dataset + '&patientid=' + this.patientId + '&datatype=' + this.domain;
            }
            $.getJSON(url, function(data) {
                var html = '';
                var graphTable;
                var count = 0;
                if (data['@graph']) {
                    count = Object.keys(data['@graph']).length;

                    graphTable = self.buildTableOfGraphNodes(self, data['@graph']);
                } else {
                    count = Object.keys(data).length;
                }
                //if return object is too large, it would crash chrome, so don't display it.
                if (count > 800) {
                    html = '<br>The data is too large to show. Please click <a href="' + url + '" >here to see raw data</a>.';
                } else {
                    html = '<pre><code>' + JSON.stringify(data, undefined, 2) + '</code></pre><br/>';
                }

                self.$el.find('#pgrafTable').html(graphTable);
                self.$el.find('#pgrafContent').html(html);
            });
        },

        buildTableOfGraphNodes: function (self, graphArray) {
            var html = '<table class="table">';
            var self = this;
            html += '<thead><tr> <th colspan="2">Type</th> <th>Label</th> <th>Id</th> </tr></thead><tbody>'

            for (var i=0; i < graphArray.length; i++) {
                var type = graphArray[i].type.substring(6);
                var typeLink = '<a href="#schema/' +  self.dataset + '/' + type + '" target="_blank">' + type + '</a>';
                var linkTag = '<a data-toggle="collapse" href="#' + graphArray[i]._id
                    + '" class="accordion-toggle">' + graphArray[i].label
                    + '&nbsp;<i class="icon-chevron-down"></i></a>';


                html += '<tr> <td colspan="2">' + typeLink
                    + '</td> <td>' + linkTag
                    + '</td> <td>' + graphArray[i]._id
                    + '</td> </tr>';

                var nodeType =  type.substring(type.lastIndexOf('-') + 1);
                html += self.buildHiddenTableOfProperties(self, graphArray[i], graphArray[i]._id, nodeType);
            }

            html += '</tbody></table>';

            return html;
        },

        buildHiddenTableOfProperties: function(self, node, target, nodeType, level) {
            var html = '';
            if (!level) {
                level = '';
            }

            var divOpenTagCollapse = '<div class="accordion-body collapse" ';
            if (target) {
                divOpenTagCollapse += 'id="' + target + '">';
            } else {
                divOpenTagCollapse += '>';
            }

            var embeddedClassTable = '<tr><td class="hidden-row" colspan="1"></td><td class="hidden-row" colspan="3">' + divOpenTagCollapse;
            embeddedClassTable += '<table class="table table-nested"><thead>';
            embeddedClassTable += '<tr><th colspan="2">Property</th><th>Label/Value</th><th>Id/Type</th></tr></thead><tbody>';
            for (var key in node) {
                if (node.hasOwnProperty(key) && key.endsWith(nodeType)) {
                    embeddedClassTable += '<tr>';
                    embeddedClassTable += '<td colspan="2">' + key + '</td>'

                    var nodeObject = node[key];
                    var idOrType, labelOrValue, hiddenRowHtml;
                    if ($.isArray(nodeObject)) {
                        idOrType ="Array";
                        labelOrValue = "&nbsp;";

                        var tableTarget = "table-" + key + level;

                        // create a link for the dropdown table
                        labelOrValue = '<a data-toggle="collapse" href="#' + tableTarget
                            + '" class="accordion-toggle">'
                            + '[ARRAY]&nbsp;<i class="icon-chevron-down"></i></a>'

                        // create the table that is the target of the dropdown
                        var tableHtml = '<table class="table">'
                            + '<thead><tr> <th colspan="2">Type</th> <th>Label</th> <th>Id</th> </tr></thead><tbody>';

                        // fill the table with the nodes of nodeObject
                        for (var i=0; i < nodeObject.length; i++) {
                            var type = nodeObject[i].type.substring(6);
                            var linkTag = '<a data-toggle="collapse" href="#level' + level + "-" + i
                                + '" class="accordion-toggle">'
                                + '[PROPERTIES]&nbsp;<i class="icon-chevron-down"></i></a>';


                            tableHtml += '<tr> <td colspan="2">' + type
                                + '</td> <td>' + linkTag
                                + '</td> <td>' + nodeObject[i].id
                                + '</td> </tr>';

                            var nodeType =  type.substring(type.lastIndexOf('-') + 1);
                            tableHtml += self.buildHiddenTableOfProperties(self, nodeObject[i], "level" + level + "-" + i, nodeType, level + "-" + i);
                        }

                        tableHtml += '</tbody></table>';


                        var divOpenTableTagCollapse = '<div class="accordion-body collapse" ';
                        if (tableTarget) {
                            divOpenTableTagCollapse += 'id="' + tableTarget + '">';
                        } else {
                            divOpenTableTagCollapse += '>';
                        }

                        hiddenRowHtml = '<tr><td class="hidden-row" colspan="1"></td><td colspan="3" class="hidden-row">' + divOpenTableTagCollapse
                            + tableHtml
                            + '</div></td></tr>';



                    } else if (typeof  nodeObject === 'string') {
                        idOrType = "&nbsp;";
                        labelOrValue = nodeObject;
                    } else if (nodeObject.id) {
                        var idType = nodeObject.id.match(/^[0-9]*_?[0-9]*-/);
                        if (idType && idType.length > 0) {
                            idType = idType[0];
                            idType = idType.substring(0, idType.length - 1);
                            idOrType = '<a class="record-update-link pointer-to-class" data-id-type="' + idType + '" data-id="' + nodeObject.id + '"> '
                                + nodeObject.id + '</a>';
                        } else {
                            idOrType = nodeObject.id;
                        }
                        labelOrValue = nodeObject.label;
                    } else if (nodeObject.type) {
                        idOrType = nodeObject.type;
                        labelOrValue = nodeObject.value;
                    }
                    embeddedClassTable += '<td>' + labelOrValue + '</td> <td>' + idOrType + '</td>';
                    if (hiddenRowHtml) {
                        embeddedClassTable += hiddenRowHtml;
                    }

                    embeddedClassTable+= '</tr>';
                }
            }

            embeddedClassTable += '</tbody></table></div></td></tr>';

            return embeddedClassTable;
        },

        updateRecord: function(event) {

            console.log(event);

            this.patientId = event.target.attributes["data-id"].value;
            this.domain = event.target.attributes["data-id-type"].value;
            this.dataset = this.$el.find('#dataset').val();

            //this.$el.find('#pgrafContent').html(patientId + ' ' + domain);
            var url = '/record?dataset=' + this.dataset + '&id=' + this.patientId + '&datatype=' + this.domain;
            this.getJson(url);

        },

        showCollapsedTarget: function(element) {
            console.log(element);

            console.log(element.target.attributes.getNamedItem('href').value);
            $('div.collapse'+element.target.attributes.getNamedItem('href').value).collapse('toggle');

            if (element.target.children) {
                $('a[href="' + element.target.attributes.getNamedItem('href').value + '"]').find('i').toggleClass('icon-chevron-down icon-chevron-up')
            }

        },

        viewJson: function() {


            var html = '';
            this.coll.models.forEach(function(record) {
                html += '<pre><code>' + JSON.stringify(record, undefined, 2) + '</code></pre><br/>';
            });
            this.$el.find('#pgrafContent').html(html);
        },

        getLabel: function(collection) {
            return Util.CHCS_Cllection_Labels[collection] ? Util.CHCS_Cllection_Labels[collection] + '(' + collection + ')' : collection;
        },

        viewAllTypes: function() {
            var html = '';

            var counts = this.coll.models[0].get('counts');
            for (var k in counts) {
                html += '<div class="labelresult"><b>' + this.getLabel(k) + '</b> count: ' + counts[k] + '</div>';
            }
            html += '<br/>';
            var data = this.coll.models[0].get('jsondata');
            for (var k in data) {
                if (data[k]['@graph'].length > 0) {
                    var lbl = k.replace('-records', '');
                    lbl = this.getLabel(lbl);
                    html += '<h5 class="clearboth" style="padding-top:30px;">' + lbl + '</h5>';
                    html += '<pre class="clearboth"><code>' + JSON.stringify(data[k], undefined, 2) + '</code></pre>';
                }
            }
            this.$el.find('#pgrafContent').html(html);
        }
    });

    return PatientGraphView;

});