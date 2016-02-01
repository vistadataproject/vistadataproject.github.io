// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
requirejs.config({
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        d3tip: {
            deps: ['d3']
        },
        c3: {
            deps: ['d3']
        },
        barchart: {
            deps: ['jquery', 'd3']
        },
        d3: {
            exports: 'd3'
        }
    },
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        templates: '../templates',
        bootstrap: 'libs/bootstrap/bootstrap.min',
        d3: 'libs/d3/d3.v3.min',
        d3tip: 'libs/d3/d3.tip.v0.6.3-amd',
        c3: 'libs/c3/c3.min',
        barchart: 'libs/igw/bar/js/barchart-amd',
        bardual: 'libs/igw/barDual/js/barchart-amd',
        piechart: 'libs/igw/pie/js/pie-amd',
        circlechart: 'libs/igw/circleChart/js/circleChart-amd',
        circlepack: 'libs/igw/circlePack/js/circlePack-amd',
        directedgraph: 'libs/igw/directedGraph/js/directedGraph-amd',
        stackedbar: 'libs/igw/stackedBar/js/stackedBar-amd',
        tree: 'libs/igw/tree/js/tree-amd',
        treemap: 'libs/igw/treeMap/js/treeMap-amd',
        prettyprint: 'libs/prettyprint/prettyprint'
    }
    

});

requirejs([
    // Load our app module and pass it to our definition function
    'router',
    'jquery',
    'bootstrap',
    'd3'
], function(Router, $) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    Router.initialize();
});