/*
Very much a work in progress - main issue is offset for tip when position isn't absolute
... nyt avoids as doesn't transform circle in a g (to allow for text). Must work around it.

Quick:
- allow popup of descriptions
- change to be like simple tooltip in PropertyGraph.js: inline div creation ie/ don't force markup on page

To improve:
- calculate size of bubble before deciding on text show or not
  - http://vallandingham.me/bubble_cloud/# 
- offsets and bounding rects:
  - https://groups.google.com/forum/#!msg/d3-js/h0APWdUlpZA/QAmr1nWhEugJ
- other tooltips:
  - simple: http://stackoverflow.com/questions/10805184/d3-show-data-on-mouseover-of-circle

Original: 
- http://bl.ocks.org/mbostock/4063269
- http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html improved it and some (more to come) in here

http://stackoverflow.com/questions/18554224/getting-screen-positions-of-d3-nodes-after-transform

 use getBoundingClientRect().width and .height or jQuery's .width() and .height()
 
 http://stackoverflow.com/questions/13040685/finding-offset-position-of-svg-element

and for bounding box look at tip.js:   function getScreenBBox()
*/ 

var IFG = IFG || {};

IFG.displayBubbles = function(options) {

var format = d3.format(",d");

var sizeKey = options.sizeKey || "size",
    sizeFormatter = options.sizeFormatter || format,
    legendData = options.legendData || [];
var r = options.r || 750;

var fill = d3.scale.category10();

// CG: how to see bubble in bubble - see stack stuff or click to open
// or add links and popups
var bubble = d3.layout.pack()
    .sort(null) // disables sorting
    .size([r, r])
    .padding(4);
    
var vis = d3.select("#" + options.divId).append("svg")
    .attr("width", r)
    .attr("height", r)
    .attr("class", "bubble");

d3.json(options.jsonPath, function(json) {
  var node = vis.selectAll("g.node")
      .data(bubble.nodes(classes(json, sizeKey))
      .filter(function(d) { return !d.children; }))
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
      
    // To improve see: http://stackoverflow.com/questions/17885063/creating-tooltips-for-svg-objects-after-they-were-translated-and-scaled
    // TODO: Still messy mix of absolute (as down the page) and transforms. Needs more work/test output 
    node.append("circle")
        .attr("r", function(d) { return d.r; })
        .style("fill", function(d) { return fill(d.packageName); })
        .on("mouseover",function(d,i) { 
            var el = d3.select(this);
            var transMat = el[0][0].getCTM(); // a/c for g transform
            var scale = transMat.d; 
            var radius = parseInt(el.attr('r'));
            var xpos = transMat.e + ((scale * radius) / 2);
            // var ypos = transMat.f + ((scale * radius)/2) + 200;
            var xpos = $(this).offset().left + (scale * radius) - 100;
            // scale seems to be 1
            var ypos = $(this).offset().top + ((scale * radius)/2);
            el.style("stroke","#000").style("stroke-width", 1.5);
            d3.select("#nytg-tooltip").attr("pointer-events", "none")
                .style('top', ypos+"px").style('left', xpos+"px").style('display','block');
            d3.select("#nytg-tooltip .nytg-name").html("<p>" + d.className + ": " + sizeFormatter(d.value) + "</p>");
        })
        .on("mouseout", function(d,i) { 
          d3.select(this).style("stroke","#000").style("stroke-width",0);
          d3.select("#nytg-tooltip").style('display','none')});
        
    // TODO: calculate 30 dynamically ie/ only show text for bigger circles
    node.filter(function(d) { return (d.r > 30); }).append("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".3em")
        .attr("pointer-events", "none") // leave ptr to circle
        .text(function(d) { return d.className.substring(0, d.r / 3); });
        
    // replace with json
    // console.log(legendData);
    setLegend(json);
    
});

// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root, sizeKey) {
  var classes = [];
  
  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.name, value: node[sizeKey]});
  }

  recurse(null, root);
  return {children: classes};
}

// Copied from Bar Chart
//
// CHANGE TO CALCULATE OFF FILL COLORS ie/ PACKAGE NAME ... could do totals and %'s too
//

// check out http://www.d3noob.org/2013/01/selecting-filtering-subset-of-objects.html

/*
		legendData: [{"label": "Both", "color": "orange"}, 
					 {"label": "Different", "color": "red"},
					 {"label": "CHCS Only", "color": "green"}, 
					 {"label": "TC2 PLUS", "color": "brown"}]

*/
function setLegend(json) {
    console.log(JSON.stringify(json));
    var packages = [];
    for (var i=0;i<json.length;i++)
    {
        console.log(json[i]["packageName"]);
        if (json[i].children)
            continue;
        packages.append(json[i]["packageName"]);
    }
    console.log(JSON.stringify(packages));
    return;

    if (legendData.length == 0)
        return;

console.log(legendData);
			var legend = vis.selectAll(".legend")
				  .data(legendData)
				.enter().append("g")
				  .attr("class", "legend")
				  .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

			  legend.append("rect")
				  .attr("x", 40)
				  .attr("width", 18)
				  .attr("height", 18)
				  .style("fill", function(d, i) {return d.color;});

			  legend.append("text")
				  .attr("x", 65)
				  .attr("y", 9)
				  .attr("dy", ".35em")
				  .style("text-anchor", "left")
				  .text(function(d) { return d.label; });
}

};
