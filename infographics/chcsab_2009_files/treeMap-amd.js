//=====================
//this page is originally based on the codes from http://mbostock.github.io/d3/talk/20111018/treemap.html
//=====================
define(['d3tip'], function(d3) {
    var IFG = IFG || {};

    IFG.displayTreeMap = function(options) {
        var w = options.width || 1280 - 80,
            h = options.height || 800 - 180,
            valueTitle = options.valueTitle,
            nameTitle = options.nameTitle,
            divId = options.divId,
            selector = options.selector,
            jsonPath = options.jsonPath,
            x = d3.scale.linear().range([0, w]),
            y = d3.scale.linear().range([0, h]),
            color = d3.scale.category10(),
            root,
            node,
            treemap,
            svg;

        var display = function(jsonPath) {

            treemap = d3.layout.treemap()
                .round(false)
                .size([w, h])
                .sticky(true)
                .value(function(d) {
                    return d[valueTitle];
                });

            if (!selector) {
                selector = d3.select("#" + divId);
            } else {
                selector = d3.select(selector).select('#' + divId);
            }

            svg = selector.html("").append("div")
                .attr("class", "treemap-chart")
                .style("width", w + "px")
                .style("height", h + "px")
                .append("svg:svg")
                .attr("width", w)
                .attr("height", h)
                .append("svg:g")
                .attr("transform", "translate(.5,.5)");

            d3.json(jsonPath, function(data) {
                node = root = data;

                var nodes = treemap.nodes(root)
                    .filter(function(d) {
                        return !d.children;
                    });

                var cell = svg.selectAll("g")
                    .data(nodes)
                    .enter().append("svg:g")
                    .attr("class", "cell")
                    .attr("transform", function(d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    })
                    .on("click", function(d) {
                        return zoom(node == d.parent ? root : d.parent);
                    });

                cell.append("svg:rect")
                    .attr("width", function(d) {
                        return d.dx;
                    })
                    .attr("height", function(d) {
                        return d.dy;
                    })
                    .style("fill", function(d) {
                        return color(d.parent[nameTitle]);
                    });

                cell.append("svg:text")
                    .attr("x", function(d) {
                        return d.dx / 2;
                    })
                    .attr("y", function(d) {
                        return d.dy / 2;
                    })
                    .attr("dy", ".35em")
                    .attr("text-anchor", "middle")
                    .text(function(d) {
                        return d[nameTitle].replace(" (", "-").replace(")", "") + " (" + d3.format(",")(d[valueTitle]) + ")";
                    })
                    .style("opacity", function(d) {
                        d.w = this.getComputedTextLength();
                        return d.dx > d.w ? 1 : 0;
                    });

                d3.select("#" + divId).on("click", function() {
                    zoom(root);
                });


            });
        };

        function zoom(d) {
            var kx = w / d.dx,
                ky = h / d.dy;
            x.domain([d.x, d.x + d.dx]);
            y.domain([d.y, d.y + d.dy]);

            var t = svg.selectAll("g.cell").transition()
                .duration(d3.event.altKey ? 7500 : 750)
                .attr("transform", function(d) {
                    return "translate(" + x(d.x) + "," + y(d.y) + ")";
                });

            t.select("rect")
                .attr("width", function(d) {
                    return kx * d.dx;
                })
                .attr("height", function(d) {
                    return ky * d.dy;
                })

            t.select("text")
                .attr("x", function(d) {
                    return kx * d.dx / 2;
                })
                .attr("y", function(d) {
                    return ky * d.dy / 2;
                })
                .style("opacity", function(d) {
                    return kx * d.dx > d.w ? 1 : 0;
                });

            node = d;
            d3.event.stopPropagation();
        };

        display(jsonPath);
    };
    return IFG;
});