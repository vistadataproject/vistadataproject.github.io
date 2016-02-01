// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/home/HomeView',
    'views/header/HeaderView',
    'views/about/AboutView',
    'views/stats/StatsListView',
    'views/charts/ChartsView',
    'views/charts/InfographicsView',
    'views/collection/CollectionRecordsView',
    'views/collection/OneRecordView',
    'util',
    'views/pgraf/PatientGraphView',
    'views/rest/RESTClientView',
    'views/schema/SchemaView',
    'views/schema/SchemaClinicalView'

], function($, _, Backbone, HomeView, HeaderView, AboutView, StatsListView,
    ChartsView, InfographicsView, CollectionRecordsView, OneRecordView, Util, PatientGraphView, RESTClientView, SchemaView, SchemaClinicalView) {

    var AppRouter = Backbone.Router.extend({
        initialize: function() {
            this.headerView = new HeaderView();
            $('.header').html(this.headerView.el);
        },
        routes: {
            '': 'home',
            'about': 'about',
            'meta?dataset=:dataset': 'meta',
            'ig': 'ig',
            'infographics': 'infographics',
            //queryString format: ?datatype=2&id=2-11
            'record?*queryString': 'getRecord',
            'pgraf': 'pgraf',
            'rest': 'restClient',
            'schema/*schemaParams': 'schemaWithId',
            'clinical/*clinicalParams': 'schemaClinicalWithId',
            'schema': 'schemaWithId',
            'clinical': 'schemaClinicalWithId'
        },

        getRecord: function(queryString) {
            var params = Util.parseQueryString(queryString);
            var id = params.id,
                collection = params.datatype,
                dataset = params.dataset;
            if (typeof id != 'undefined') {
                console.log(collection + ' ' + id);
                new OneRecordView({
                    dataset: dataset,
                    collectionName: collection,
                    id: id
                });
            } else if (typeof collection != 'undefined') {
                this.collectionList(dataset, collection);
            } else if (typeof dataset != 'undefined') {
                this.showStats(dataset);
            }
        },

        collectionList: function(dataset, collection) {
            new CollectionRecordsView({
                dataset: dataset,
                collectionName: collection
            });
            this.headerView.selectMenuItem('collection-menu');
        },

        home: function() {
            // We have no matching route, lets display the home page 
            if (!this.homeView) {
                this.homeView = new HomeView();
            }
            $('#content').html(this.homeView.el);
            this.headerView.selectMenuItem('home-menu');
        },

        //this is example only to show graphics
        ig: function() {
            if (!this.igView) {
                this.igView = new ChartsView();
            }
            $('#content').html(this.igView.el);
            this.headerView.selectMenuItem('ig-menu');
        },

        infographics: function() {
            if (!this.infographicsView) {
                this.infographicsView = new InfographicsView();
            }
            $('#content').html(this.infographicsView.el);
            this.headerView.selectMenuItem('ig-menu');
        },

        showStats: function(dataset) {
            $('#content').html(new StatsListView({
                dataset: dataset
            }).el);
            this.headerView.selectMenuItem('collection-menu');
        },

        about: function() {
            if (!this.aboutView) {
                this.aboutView = new AboutView();
            }
            $('#content').html(this.aboutView.el);
            this.headerView.selectMenuItem('about-menu');
        },

        pgraf: function() {
            new PatientGraphView();
            this.headerView.selectMenuItem('pgraf-menu');
        },

        restClient: function() {
            new RESTClientView();
            this.headerView.selectMenuItem('rest-menu');
        },

        schemaWithId: function(schemaParams) {
            var paramsArray;
            var schemaId, dataset;
            if (schemaParams) {
                paramsArray = schemaParams.split("/");
            }

            if (paramsArray && paramsArray.length > 0) {
                dataset = paramsArray[0];
                if (paramsArray.length > 1) {
                    // if it is a fmDD, it will be all digits or start with underscore and be all digits or start with
                    // digits and have an underscorein the middle so we need
                    // to find the schemaId
                    var secondParam = paramsArray[1];
                    if (secondParam.match(/^[0-9]*_?[0-9]*$/)) {
                        $.getJSON('/schema_class_name_by_fmdd?dataset=' + dataset + '&fmdd=' + secondParam, function(data) {
                            if (data && data.length > 0) {
                                setSchemaIdFromJson(dataset, data[0].id);
                            }
                        });

                        return;
                    } else {
                        // else we just assign the schemaId
                        schemaId = secondParam;
                    }
                }
            }

            function setSchemaIdFromJson(dataset, schemaId) {
                Backbone.history.navigate('schema/' + dataset + '/' + schemaId, {trigger: "true"});
            }

            new SchemaView({
                schemaId: schemaId,
                dataset: dataset
            });
            this.headerView.selectMenuItem('schema-menu');

        },

        schemaClinicalWithId: function(clinicalParams) {
            var paramsArray;
            var schemaId, dataset;
            if (clinicalParams) {
                paramsArray = clinicalParams.split("/");
            }

            if (paramsArray && paramsArray.length > 0) {
                dataset = paramsArray[0];
                if (paramsArray.length > 1) {
                    schemaId = paramsArray[1];
                }
            }

            new SchemaClinicalView({
                schemaId: schemaId,
                dataset: dataset,
                clinical: "clinical"
            });
            this.headerView.selectMenuItem('clinical-menu');
        }

    });

    var initialize = function() {

        var app_router = new AppRouter();
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});

