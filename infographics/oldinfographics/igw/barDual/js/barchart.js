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
        nameTitle = options.nameTitle,
        valueTitle = options.valueTitle,
        valueTitle2 = options.valueTitle2,
        valueTitleDisplay = options.valueTitleDisplay,
        valueTitleDisplay2 = options.valueTitleDisplay2,
        divId = options.divId,
        selector = options.selector,
        jsonPath = options.jsonPath,
        XLabelTitle = options.XLabelTitle || "barindex";

    var formatPercent = d3.format(".0%");

    var x = d3.scale.ordinal()
        .rangeBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var y2 = d3.scale.linear()
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
            return "<strong>Name:</strong> <span style='color:white'>" + d[nameTitle] + "</span><br/><strong>" + valueTitleDisplay + ":</strong> <span style='color:white'>" + d3.format(",")(d[valueTitle]) + "</span><br/>" + "<strong>" + valueTitleDisplay2 + ":</strong> <span style='color:white'>" + d3.format(",")(d[valueTitle2]) + "</span>";
        })

    if (!selector) {
        selector = d3.select("#" + divId);
    } else {
        selector = d3.select(selector).select('#' + divId);
    }

    var svg = selector.html("").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("class", "barchartDual")
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
        setBars2(data);
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
            .text("Value");
    }

    function setBars(data) {
        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) {
                return x(d[XLabelTitle]);
            })
            .attr("width", x.rangeBand() / 2)
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

    function setBars2(data) {
        svg.selectAll(".bar2")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar2")
            .attr("x", function(d) {
                return x(d[XLabelTitle]) + x.rangeBand() / 2;
            })
            .attr("width", x.rangeBand() / 2)
            .attr("y", function(d) {
                if (y2(d.value2) > height - 2) return y2(d.value2) - 2;
                else
                    return y2(d.value2);
            })
            .attr("height", function(d) {
                if (y2(d.value2) > height - 2)
                    return 2 + height - y2(d.value2);
                else
                    return height - y2(d.value2);
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
    }

    function getData() {
        var data = allData;
        var tmp = [];
        for (var i = 0; i < data.length; i++) {
            data[i].value = data[i][valueTitle];
            data[i].value2 = data[i][valueTitle2];
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
        y2.domain([0, d3.max(data, function(d) {
            return d[valueTitle2];
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
        setBars2(data);

    }

};