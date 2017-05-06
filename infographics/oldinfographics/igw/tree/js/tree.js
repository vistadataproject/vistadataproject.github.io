//=====================
//this page is originally based on the codes from http://mbostock.github.io/d3/talk/20111018/tree.html
//=====================

var IFG = IFG || {};

IFG.displayTree = function(options) {
    var m = options.margin || [20, 20, 20, 20],
        w = (options.width || 1780) - m[1] - m[3],
        h = (options.height || 1600) - m[0] - m[2],
        jsonPath = options.jsonPath,
        topDown = options.topDown,
        divId = options.divId,
        selector = options.selector,
        showRootText = options.showRootText,
        i = 0,
        root,
        nameKey = options.nameKey || 'name',
        textColorFunc = options.textColorFunc || function(d) {},
        branchSize = options.branchSize || 250,
        onDisplay = options.onDisplay;


    var tree = d3.layout.tree()
        .size([h, w]);

    var diagonal = d3.svg.diagonal()
        .projection(function(d) {
            return [d.y, d.x];
        });

    var vis;

    function display(jsonPath) {
        d3.json(jsonPath, function(json) {
            h = Math.max(200, 20 * (json.children.length + 3) - m[0] - m[2]);
            tree.size([h, w]);

            if (!selector) {
                selector = d3.select("#" + divId);
                d3.select("#" + divId + " svg").remove();
            } else {
                selector = d3.select(selector).select('#' + divId);
                selector.select('svg').remove();
            }
            vis = selector
                .append("svg:svg")
                .attr("width", w)
                .attr("height", Math.max(100, h + m[0] + m[2]))
                .append("svg:g")
                .attr("transform", "translate(" + m[3] + "," + m[0] + ")")
                .attr("class", "treeChart");

            root = json;
            root.x0 = h / 2;
            root.y0 = 0;

            function toggleAll(d) {
                if (d.children) {
                    d.children.forEach(toggleAll);
                    toggle(d);
                }
            }

            // Initialize the display to show a few nodes.
            root.children.forEach(toggleAll);

            update(root);

            if (topDown == true)
                vis.attr("transform", "translate(" + h + ", 50), rotate(90)");

            if (onDisplay) {
                onDisplay();
            }

        });
    }



    function update(source) {
        var duration = d3.event && d3.event.altKey ? 5000 : 500;

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse();

        // Normalize for fixed-depth.
        nodes.forEach(function(d) {
            d.y = d.depth * branchSize;
        });

        // Update the nodes…
        var node = vis.selectAll(".treeChart g.node")
            .data(nodes, function(d) {
                return d.id || (d.id = ++i);
            });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("svg:g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on("click", function(d) {
                toggle(d);
                update(d);
            });

        nodeEnter.append("svg:circle")
            .attr("r", 1e-6)
            .style("fill", function(d) {
                return d._children ? "lightsteelblue" : "#fff";
            });

        nodeEnter.append("svg:text")
            .attr("x", function(d, i) {
                //if (i == 0) return -50; 
                return d.children || d._children ? 10 : 10;
            })
            .attr("y", function(d) {
                return d.children || d._children ? 0 : 0;
            })
            .attr("dy", ".35em")
            //.attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
            .text(function(d, i) {
                if (i == nodes.length - 1 && !showRootText)
                    return '';
                else return d[nameKey];
            })
            .style("fill-opacity", 1e-6)
            .attr("fill", textColorFunc);

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        nodeUpdate.select("circle")
            .attr("r", 4.5)
            .style("fill", function(d) {
                return d._children ? "lightsteelblue" : "#fff";
            });

        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        nodeExit.select("circle")
            .attr("r", 1e-6);

        nodeExit.select("text")
            .style("fill-opacity", 1e-6);

        // Update the links…
        var link = vis.selectAll("path.link")
            .data(tree.links(nodes), function(d) {
                return d.target.id;
            });

        // Enter any new links at the parent's previous position.
        link.enter().insert("svg:path", "g")
            .attr("class", "link")
            .attr("d", function(d) {
                var o = {
                    x: source.x0,
                    y: source.y0
                };
                return diagonal({
                    source: o,
                    target: o
                });
            })
            .transition()
            .duration(duration)
            .attr("d", diagonal);

        // Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr("d", function(d) {
                var o = {
                    x: source.x,
                    y: source.y
                };
                return diagonal({
                    source: o,
                    target: o
                });
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    // Toggle children.
    function toggle(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
    }

    display(jsonPath);

};