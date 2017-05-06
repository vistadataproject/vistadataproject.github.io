//=====================
//this page is originally based on the codes from http://bl.ocks.org/Caged/6476579
//=====================

var IFG = IFG || {};

IFG.displayBarChart = function(options) {

    var margin = options.margin || {
            top: 40,
            right: 10,
            bottom: 30,
            left: 100
        },
        width = (options.width || 1600) - margin.left - margin.right,
        height = (options.height || 500) - margin.top - margin.bottom,
        barWidth = options.barWidth,
        firstBarMarginLeft = options.firstBarMarginLeft || 0,
        nameTitle = options.nameTitle,
        valueTitle = options.valueTitle,
        divId = options.divId,
        selector = options.selector,
        jsonPath = options.jsonPath,
        XLabelTitle = options.XLabelTitle || "barindex",
        barClassField = options.barClassField,
        setBarClass = options.setBarClass,
        tipDisplay = options.tipDisplay,
        YLabelTitle = options.YLabelTitle || "Value",
        showLegend = options.showLegend,
        legendData = options.legendData,
        onDisplay = options.onDisplay;

    var formatPercent = d3.format(".0%");

    var x = d3.scale.ordinal()
        .rangeBands([firstBarMarginLeft, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            if (tipDisplay)
                return tipDisplay(d);
            else
                return "<strong>Name:</strong> <span style='color:white'>" + d[nameTitle] + "</span><br/>" + "<strong>Value:</strong> <span style='color:white'>" + d3.format(",")(d[valueTitle]) + "</span>";
        })

    if (!selector) {
        selector = d3.select("#" + divId);
    } else {
        selector = d3.select(selector).select('#' + divId);
    }

    var svg = selector.html("").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("class", "barchart")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.call(tip);

    var allData;
    d3.json(jsonPath, function(error, rawdata) {
        allData = rawdata;
        data = getData();
        setXYDomain(data);
        setXAxis();
        setYAxis();
        setBars(data);
        setLegend();
        if (onDisplay) {
            onDisplay();
        }
    });

    function setXAxis() {
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

    function setYAxis() {
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text(YLabelTitle);
    }

    function setBars(data) {
        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("class", function(d) {
                if (setBarClass) return setBarClass(d[barClassField]);
                else return "bar";
            })
            .attr("x", function(d) {
                return x(d[XLabelTitle]);
            })
            .attr("width", barWidth || x.rangeBand())
            .attr("y", function(d) {
                if (y(d.value) > height - 2) return y(d.value) - 2;
                else
                    return y(d.value);
            })
            .attr("height", function(d) {
                if (y(d.value) > height - 2)
                    return 2 + height - y(d.value);
                else
                    return height - y(d.value);
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
    }

    function getData() {
        var data = allData;
        var tmp = [];
        for (var i = 0; i < data.length; i++) {
            data[i].value = data[i][valueTitle];
            tmp.push(data[i]);
        }
        for (var i = 0; i < tmp.length; i++) {
            tmp[i].barindex = i + 1;
        }
        return tmp;
    }

    function setXYDomain(data) {
        x.domain(data.map(function(d) {
            return d[XLabelTitle];
        }));
        //console.log(x.domain());
        y.domain([0, d3.max(data, function(d) {
            return d[valueTitle];
        })]);
    }

    function update() {
        var data = getData();
        //console.log(data);
        setXYDomain(data);
        svg.selectAll(".bar").remove();
        d3.select(".y.axis").remove();
        d3.select(".x.axis").remove();
        setXAxis();
        setYAxis();
        setBars(data);
        setLegend();

    }

    function setLegend() {
        if (showLegend) {
            var legend = svg.selectAll(".legend")
                .data(legendData)
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function(d, i) {
                    return "translate(0," + i * 20 + ")";
                });

            legend.append("rect")
                .attr("x", 40)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", function(d, i) {
                    return d.color;
                });

            legend.append("text")
                .attr("x", 65)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "left")
                .text(function(d) {
                    return d.label;
                });
        }
    }
};