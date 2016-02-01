//=====================
//this page is originally based on the codes from http://bl.ocks.org/mbostock/3887235
//=====================
define(['d3tip'], function(d3) {
    var IFG = IFG || {};

    IFG.displayPie = function(options) {
        var divId = options.divId || "divSvg";
        var selector = options.selector;
        var json = options.json || "json/PIKSCount.json";
        var categoryTitle = options.categoryTitle;
        var valueTitle = options.valueTitle;
        var colorsByIndex = options.colors;
        var colorsByCategory = options.colorsByCategory;
        var onDisplay = options.onDisplay;


        var w = options.width || 400,
            h = options.height || 400,
            r = Math.min(w, h) / 2,
            ir = options.innerCircleRadius || 50;

        if (colorsByIndex) {
            var color = function(i) {
                return colorsByIndex[i];
            }
        } else if (colorsByCategory) {
            var color = function(cat) {
                return colorsByCategory[cat];
            }
        } else {
            var color = d3.scale.category20();

        }
        var arc = d3.svg.arc()
            .outerRadius(r - 10)
            .innerRadius(ir);

        var pie = d3.layout.pie()
            .sort(null)
            .value(function(d) {
                return d.value;
            });

        if (!selector) {
            selector = d3.select("#" + divId);
        } else {
            selector = d3.select(selector).select('#' + divId);
        }
        var svg = selector.append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("class", "pie-chart");

        var arcGroup = svg.append("g")
            .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

        var centerTextGroup = svg.append("g")
            .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

        var donut = d3.layout.pie().value(function(d) {
            return d[valueTitle];
        });

        d3.json(json, function(error, data) {
            data = donut(data);
            var totalCount = 0;
            data.forEach(function(d) {
                d.data.value = +d.data[valueTitle];
                totalCount += d.data.value;
            });

            var g = arcGroup.selectAll(".arc")
                .data(data)
                .enter().append("g")
                .attr("class", "arc");

            g.append("path")
                .attr("d", arc)
                .style("fill", function(d, i) {
                    if (colorsByCategory) return color(d.data[categoryTitle]);
                    else {
                        console.log(color(i));
                        return color(i);
                    }
                })
                .append("title").text(function(d) {
                    var percentage = (d.data.value / totalCount) * 100;
                    return d.data[categoryTitle] + " " + d3.format(",")(d.data[valueTitle]) + "\n" + percentage.toFixed(2) + "%";
                });

            g.append("text")
                .attr("transform", function(d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .attr("dy", "0em")
                .attr("dx", "-1em")
                .style("text-anchor", "middle")
                .style("fill", "black")
                .text(function(d) {
                    var percentage = (d.data.value / totalCount) * 100;
                    if (percentage > 7) {
                        if (d.data[categoryTitle].length * 12 > r - ir) {
                            return d.data[categoryTitle];

                        } else {
                            return d.data[categoryTitle] + " " + d3.format(",")(d.data[valueTitle]);
                        }
                    }
                });

            g.append("text")
                .attr("transform", function(d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .attr("dy", "1.5em")
                .attr("dx", "-0.5em")
                .style("text-anchor", "middle")
                .style("fill", "white")
                .text(function(d) {
                    var percentage = (d.data.value / totalCount) * 100;
                    if (percentage > 7) {
                        if (d.data[categoryTitle].length * 12 > r - ir) {
                            return d3.format(",")(d.data[valueTitle]) + " (" + percentage.toFixed(2) + "%)";

                        } else {
                            return "(" + percentage.toFixed(2) + "%)";
                        }

                    }
                });


            // "TOTAL" LABEL
            var totalLabel = centerTextGroup.append("svg:text")
                .attr("class", "label")
                .attr("dy", -10)
                .attr("text-anchor", "middle") // text-align: right
                .text("TOTAL");

            //TOTAL TRAFFIC VALUE
            var totalValue = centerTextGroup.append("svg:text")
                .attr("class", "total")
                .attr("dy", 13)
                .attr("text-anchor", "middle") // text-align: right
                .text(d3.format(",")(totalCount));

            if (onDisplay) {
                onDisplay();
            }

        });
    }

    return IFG;
});