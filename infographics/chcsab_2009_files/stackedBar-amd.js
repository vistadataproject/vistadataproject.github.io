//=====================
//this page is originally based on the codes from http://bl.ocks.org/mbostock/3886208
//=====================
//
// sample data in json format
// [{"States": "A", "<5": 1000, ">5": 2000}, {"States": "b", "<5": 1000, ">5": 3000}]
//
define(['d3tip'], function(d3) {
    var IFG = IFG || {};

    IFG.displayStackedBar = function(options) {

        var margin = options.margin || {
                top: 20,
                right: 20,
                bottom: 30,
                left: 40
            },
            width = (options.width || 960) - margin.left - margin.right,
            height = (options.height || 500) - margin.top - margin.bottom,
            firstBarMarginLeft = options.firstBarMarginLeft || 0,
            legendLocation = options.legendLocation || 'left',
            colors = options.colors || ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"],
            onDisplay = options.onDisplay;

        var valueTitlesDisplayReverse = [];
        var colorsReverse = [];
        if (options.valueTitlesDisplay) {
            valueTitlesDisplayReverse = options.valueTitlesDisplay.slice().reverse();
        }

        colorsReverse = colors.slice().reverse();

        var x = d3.scale.ordinal()
            .rangeBands([firstBarMarginLeft, width], .1);

        var y = d3.scale.linear()
            .rangeRound([height, 0]);

        var color = d3.scale.ordinal()
            .range(colors);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .tickFormat(d3.format(".2s"));

        var divId = options.divId;

        var selector = options.selector;
        if (!selector) {
            selector = d3.select("#" + divId);
        } else {
            selector = d3.select(selector).select('#' + divId);
        }
        var svg = selector.html("").append("svg")
            .attr("width", function() {
                if (legendLocation == 'right') {
                    return width + margin.left + margin.right + 300;
                } else {
                    return width + margin.left + margin.right;
                }
            })
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("class", "stackedBar")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        var d3tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d, i) {
                var html = "<strong>Name:</strong><span style='color:white'>" + d.raw[options.nameTitle] + "</span><br/>";
                //for(var i = 0; i < options.valueTitles.length; i++) {
                html += "<strong>" + options.valueTitlesDisplay[i] + ":</strong> <span style='color:white'>" + d3.format(",")(d.raw[options.valueTitles[i]]) + "</span><br/>";
                //}     
                return html;
            });

        svg.call(d3tip);

        d3.json(options.jsonPath, function(error, data) {
            color.domain(options.valueTitles);
            data.forEach(function(d) {
                var y0 = 0;
                d.categories = color.domain().map(function(name) {
                    if (!d[name]) d[name] = 0;
                    return {
                        name: name,
                        y0: y0,
                        y1: y0 += +d[name],
                        raw: d
                    };
                });
                d.total = d.categories[d.categories.length - 1].y1;
            });

            //data.sort(function(a, b) { return b.total - a.total; });

            x.domain(data.map(function(d) {
                return d[options.categoryTitle];
            }));
            y.domain([0, d3.max(data, function(d) {
                return d.total;
            })]);

            if (options.showXAxis == true) {
                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis)
                    .selectAll("text")
                    .style("text-anchor", "end")
                    .attr("dx", "-1em")
                    .attr("dy", "-0.5em")
                    .attr("transform", function(d) {
                        return "rotate(-90)";
                    });
            }

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text(options.YLegendText);

            var category = svg.selectAll("." + options.categoryTitle)
                .data(data)
                .enter().append("g")
                .attr("class", "g")
                .attr("transform", function(d) {
                    return "translate(" + x(d[options.categoryTitle]) + ",0)";
                });

            category.selectAll("rect")
                .data(function(d) {
                    return d.categories;
                })
                .enter().append("rect")
                .attr("width", x.rangeBand())
                .attr("y", function(d) {
                    return y(d.y1);
                })
                .attr("height", function(d) {
                    return y(d.y0) - y(d.y1);
                })
                .style("fill", function(d, i) {
                    return colors[i];
                })
                .on('mouseover', function(d, i) {
                    d3tip.show(d, i);
                })
                .on('mouseout', d3tip.hide);



            var legend = svg.selectAll(".legend")
                .data(valueTitlesDisplayReverse)
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function(d, i) {
                    return "translate(0," + i * 20 + ")";
                });

            var legendX = 50;

            if (legendLocation == 'right') {
                legendX = width + 10;

            }

            legend.append("rect")
                .attr("x", legendX)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", function(d, i) {
                    return colorsReverse[i];
                });

            legend.append("text")
                .attr("x", legendX + 25)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "left")
                .text(function(d) {
                    return d;
                });

            if (onDisplay) {
                onDisplay();
            }

        });
    };
    return IFG;
});