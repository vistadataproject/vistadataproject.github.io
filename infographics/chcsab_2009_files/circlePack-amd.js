//=====================
//this page is originally based on the codes from http://bl.ocks.org/mbostock/7607535
//=====================
define(['d3tip'], function(d3) {
    var IFG = IFG || {};

    IFG.displayCirclePack = function(options) {

        var jsonPath = options.jsonPath;
        var margin = options.margin || 10,
            outerDiameter = options.outerdiameter || 900,
            innerDiameter = outerDiameter - margin - margin;

        var x = d3.scale.linear()
            .range([0, innerDiameter]);

        var y = d3.scale.linear()
            .range([0, innerDiameter]);

        var color = options.colors || ["#FFFFFF", "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"];

        var pack = d3.layout.pack()
            .padding(2)
            .size([innerDiameter, innerDiameter])
            .value(function(d) {
                return d[options.valueTitle];
            });
        var selector = options.selector;
        var divId = options.divId;
        var onDisplay = options.onDisplay;

        if (!selector) {
            selector = d3.select("#" + divId);
        } else {
            selector = d3.select(selector).select('#' + divId);
        }

        var svg = selector.html("").append("svg")
            .attr("width", outerDiameter)
            .attr("height", outerDiameter)
            .append("g")
            .attr("class", "circlePack")
            .attr("transform", "translate(" + margin + "," + margin + ")");

        d3.json(jsonPath, function(error, root) {
            var focus = root,
                nodes = pack.nodes(root);

            var colorIndex = -1;
            svg.append("g").selectAll("circle")
                .data(nodes)
                .enter().append("circle")
                .attr("class", function(d) {
                    return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root";
                })
                .attr("transform", function(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                })
                .attr("r", function(d) {
                    return d.r;
                })
                .style("fill", function(d) {
                    if (d.children) {
                        colorIndex++;
                    }
                    return d.children ? color[colorIndex] : null;
                })
                .on("click", function(d) {
                    return zoom(focus == d ? root : d);
                });

            svg.append("g").selectAll("text")
                .data(nodes)
                .enter().append("text")
                .attr("class", "label")
                .attr("transform", function(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                })
                .style("fill-opacity", function(d) {
                    return d.parent === root ? 1 : 0;
                })
                .style("display", function(d) {
                    return d.parent === root ? null : "none";
                })
                .text(function(d) {
                    if (d[options.valueTitle])
                        return d[options.nameTitle].replace(" (", "-").replace(")", "") + " (" + d3.format(",")(d[options.valueTitle]) + ")";
                    else
                        return d[options.nameTitle];
                });


            d3.select("#" + options.divId)
                .on("click", function() {
                    zoom(root);
                });

            if (onDisplay) {
                onDisplay();
            }

            function zoom(d, i) {
                var focus0 = focus;
                focus = d;

                var k = innerDiameter / d.r / 2;
                x.domain([d.x - d.r, d.x + d.r]);
                y.domain([d.y - d.r, d.y + d.r]);
                d3.event.stopPropagation();

                var transition = d3.selectAll(".circlePack text, .circlePack circle").transition()
                    .duration(d3.event.altKey ? 7500 : 750)
                    .attr("transform", function(d) {
                        return "translate(" + x(d.x) + "," + y(d.y) + ")";
                    });

                transition.filter("circle")
                    .attr("r", function(d) {
                        return k * d.r;
                    });

                transition.filter("text")
                    .filter(function(d) {
                        return d.parent === focus || d.parent === focus0;
                    })
                    .style("fill-opacity", function(d) {
                        return d.parent === focus ? 1 : 0;
                    })
                    .each("start", function(d) {
                        if (d.parent === focus) this.style.display = "inline";
                    })
                    .each("end", function(d) {
                        if (d.parent !== focus) this.style.display = "none";
                    })
                    .style("display", function(d) {
                        if (k * d.r > 30) return null;
                        else return "none";
                    });
            }
        });

        d3.select(self.frameElement).style("height", outerDiameter + "px");
    }
    return IFG;
});