define(['d3tip'], function(d3) {
    var IFG = IFG || {};
    IFG.showDirectedGraph = function(options) {

        var jsonPath = options.jsonPath,
            showArrow = options.showArrow,
            width = options.width || 1500,
            height = options.height || 1000,
            forceCharge = options.forceCharge || -20,
            linkDistance = options.linkDistance || 10,
            selector = options.selector,
            divId = options.divId,
            onDisplay = options.onDisplay;

        var color = d3.scale.category20();

        var force = d3.layout.force()
            .charge(forceCharge)
            .linkDistance(linkDistance)
            .size([width, height]);

        if (!selector) {
            selector = d3.select("#" + divId);
        } else {
            selector = d3.select(selector).select('#' + divId);
        }

        var svg = selector.html("").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "directedGraph");

        d3.json(jsonPath, function(error, graph) {
            display(error, graph);
            if (onDisplay) {
                onDisplay();
            }
        });


        function display(error, graph) {
            var radius = d3.scale.linear()
                .domain([0, d3.max(graph.nodes, function(n) {
                    return n.value;
                })])
                .range([4, 40]);
            force
                .nodes(graph.nodes)
                .links(graph.links)
                .start();

            // Per-type markers, as they don't inherit styles.
            svg.append("defs").selectAll("marker")
                .data(["arrow"])
                .enter().append("marker")
                .attr("id", function(d) {
                    return d;
                })
                .attr("viewBox", "0 -5 10 10")
                .attr("refX", 15)
                .attr("refY", -1.5)
                .attr("markerWidth", 6)
                .attr("markerHeight", 6)
                .attr("orient", "auto")
                .append("path")
                .attr("d", "M0,-5L10,0L0,5");

            link = svg.append("g").selectAll(".link")
                .data(force.links())
                .enter().append("line")
                .attr("class", function(d) {
                    return "link";
                });

            if (showArrow == 'showArrow') {
                link.attr("marker-end", function(d) {
                    return "url(#arrow)";
                });
            }

            var node = svg.selectAll(".node")
                .data(graph.nodes)
                .enter().append("circle")
                .attr("class", "node")
                .attr("r", function(d) {
                    return radius(d.value);
                })
                .style("fill", function(d) {
                    return color('');
                })
                .call(force.drag);

            node.append("title")
                .text(function(d) {
                    return d.name;
                });

            link.append("title").text(function(d) {
                return d.source;
            });

            force.on("tick", function() {
                link.attr("x1", function(d) {
                        return d.source.x;
                    })
                    .attr("y1", function(d) {
                        return d.source.y;
                    })
                    .attr("x2", function(d) {
                        return d.target.x;
                    })
                    .attr("y2", function(d) {
                        return d.target.y;
                    });

                node.attr("cx", function(d) {
                        return d.x;
                    })
                    .attr("cy", function(d) {
                        return d.y;
                    });
            });
        };
    };
    return IFG;
});