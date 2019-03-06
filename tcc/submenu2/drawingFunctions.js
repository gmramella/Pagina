//Source: https://www.youtube.com/watch?v=8jvoTV54nXw
//Canvas functions----------------------------------------------------------------------------------------------------
//Add a canvas (svg) to the document
function addCanvas(width, height) {
	var output = d3.select("body").append("svg").attr("id", "svg").attr("width", width).attr("height", height);
	return output;
}
//--------------------------------------------------------------------------------------------------------------------

//Circle functions----------------------------------------------------------------------------------------------------
//Add a node to a canvas
function addNodeToCanvas(canvas, nodesCounter, x, y, radius, fill) {
	canvas.append("circle").attr("id", "node"+nodesCounter).attr("cx", x).attr("cy", y).attr("r", radius).attr("fill", fill);
}
//-------------------------------------------------------------------------------------------------------------------

//Line functions-----------------------------------------------------------------------------------------------------
//Add an edge A-A to a canvas
function addAutomorphismToCanvas(canvas, edgesCounter, x, y, stroke, stroke_width) {
	canvas.append("line").attr("id", "edge"+edgesCounter).attr("x1", x).attr("y1", y-50).attr("x2", x-25).attr("y2", y-100).attr("stroke", stroke).attr("stroke-width", stroke_width);
	canvas.append("line").attr("id", "edge"+edgesCounter).attr("x1", x-25).attr("y1", y-100).attr("x2", x+25).attr("y2", y-100).attr("stroke", stroke).attr("stroke-width", stroke_width);
	canvas.append("line").attr("id", "edge"+edgesCounter).attr("x1", x+25).attr("y1", y-100).attr("x2", x).attr("y2", y-50).attr("stroke", stroke).attr("stroke-width", stroke_width);
	
	canvas.append("line").attr("id", "edge"+edgesCounter).attr("x1", x).attr("y1", y-50).attr("x2", x).attr("y2", y-75).attr("stroke", stroke).attr("stroke-width", stroke_width);
	canvas.append("line").attr("id", "edge"+edgesCounter).attr("x1", x).attr("y1", y-50).attr("x2", x+25).attr("y2", y-50).attr("stroke", stroke).attr("stroke-width", stroke_width);
}

//Add an edge A-B to a canvas
function addEdgeToCanvas(canvas, edgesCounter, x1, y1, x2, y2, stroke, stroke_width) {
	canvas.append("line").attr("id", "edge"+edgesCounter).attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2).attr("stroke", stroke).attr("stroke-width", stroke_width);
}

//Input:  value in [0,360]
//Output: value in [0,2pi)
function degToRad(deg) {
	return deg * (Math.PI/180);
}

//Input:  value in [0,2pi]
//Output: value in [0,360)
function radToDeg(rad) {
	return rad * (180/Math.PI);
}

//Input:  value in [-inf,+inf]
//Output: value in [-90,90]
function atanInDeg(tan) {
	return radToDeg(Math.atan(tan));
}

//Input:  value in [-inf,+inf]
//Output: value in degrees in [0,90]
function slopeAtan(m) {
	return Math.atan(m);
}

//Input:  [0,360]
//Output: [-1,1]
function degCos(deg) {
	return Math.cos(degToRad(deg));
}

//Input:  [0,360]
//Output: [-1,1]
function degSin(deg) {
	return Math.sin(degToRad(deg));
}

//Input:  (x1,y1) (x2,y2)
//Output: [0,360)
function realAngle(x1, y1, x2, y2) {
	var m = ((y2-y1)/(x2-x1));
	var angle = atanInDeg(m);
	if(y2 != y1) angle = -angle;
	if(x2 < x1) angle += 180;
	if(angle < 0) angle += 360;
	return angle;
}

function foo(x1, y1, x2, y2) {
	var y2 = x2*tan(ra) - x1*tan(ra) + y1;
	return y2;
}

//Add an arrow A->B to a canvas
//Code based on: https://www.quora.com/2-lines-passing-through-2-3-make-an-angle-of-45-degrees-If-the-slope-of-L1-is-2-what-is-the-slope-of-the-other-line
function addArrowToCanvas(canvas, edgesCounter, x1, y1, x2, y2, r, stroke, stroke_width) {
	/*
	m is the slope of the input edge
	(xx1,yy1) and (xx2,yy2) are the coordinates of the points on the edge that reach the border of the nodes
	l is the length of the new lines that form the arrow
	delta is the variation in xx2 and yy2 related to the equilateral triangle formed by the new lines that form the arrow
	(xx3,yy3) and (xx4,yy4) are the coordinates of the other end points of the new lines that form the arrow
	*/
	var m = ((y2-y1)/(x2-x1));
	
	var sxx1 = null;var syy1 = null;var sxx2 = null;var syy2 = null;
	
	var ra = realAngle(x1, y1, x2, y2);
	if(ra == 0)						{sxx1 = 1;syy1 = 0;sxx2 = -1;syy2 = 0;}
	else if(ra >   0 && ra <  90)	{sxx1 = 1;syy1 = 1;sxx2 = -1;syy2 = -1;}
	else if(ra == 90)				{sxx1 = 0;syy1 = 1;sxx2 = 0;syy2 = -1;}
	else if(ra >  90 && ra < 180)	{sxx1 = -1;syy1 = -1;sxx2 = 1;syy2 = 1;}
	else if(ra == 180)				{sxx1 = -1;syy1 = 0;sxx2 = 1;syy2 = 0;}
	else if(ra > 180 && ra < 270)	{sxx1 = -1;syy1 = -1;sxx2 = 1;syy2 = 1;}
	else if(ra == 270)				{sxx1 = 0;syy1 = 1;sxx2 = 0;syy2 = -1;}
	else if(ra > 270 && ra < 360)	{sxx1 = 1;syy1 = 1;sxx2 = -1;syy2 = -1;}
	
	var xx1 = x1+sxx1*degCos(atanInDeg(m))*r;
	var yy1 = y1+syy1*degSin(atanInDeg(m))*r;
	var xx2 = x2+sxx2*degCos(atanInDeg(m))*r;
	var yy2 = y2+syy2*degSin(atanInDeg(m))*r;
	
	var a = 45;
	var b1 = (ra+(180-a)+360)%360;
	var b2 = (ra-(180-a)+360)%360;
	var l = 20;
	
	var xx3 = xx2+degCos(b1)*l;
	var yy3 = yy2-degSin(b1)*l;
	var xx4 = xx2+degCos(b2)*l;
	var yy4 = yy2-degSin(b2)*l;
	
	//canvas.append("line").attr("id", "edge"+edgesCounter).attr("x1", xx1).attr("y1", yy1).attr("x2", xx2).attr("y2", yy2).attr("stroke", "yellow").attr("stroke-width", stroke_width);
	//canvas.append("line").attr("id", "edge"+edgesCounter).attr("x1", xx2).attr("y1", yy2).attr("x2", xx3).attr("y2", yy3).attr("stroke", stroke).attr("stroke-width", stroke_width);
	//canvas.append("line").attr("id", "edge"+edgesCounter).attr("x1", xx2).attr("y1", yy2).attr("x2", xx4).attr("y2", yy4).attr("stroke", stroke).attr("stroke-width", stroke_width);
	canvas.append("line").attr("class", "edge"+edgesCounter).attr("x1", xx1).attr("y1", yy1).attr("x2", xx2).attr("y2", yy2).attr("stroke", "yellow").attr("stroke-width", stroke_width);
	canvas.append("line").attr("class", "edge"+edgesCounter).attr("x1", xx2).attr("y1", yy2).attr("x2", xx3).attr("y2", yy3).attr("stroke", stroke).attr("stroke-width", stroke_width);
	canvas.append("line").attr("class", "edge"+edgesCounter).attr("x1", xx2).attr("y1", yy2).attr("x2", xx4).attr("y2", yy4).attr("stroke", stroke).attr("stroke-width", stroke_width);
}
//-------------------------------------------------------------------------------------------------------------------

//Rect functions-----------------------------------------------------------------------------------------------------
//Add a filled rectangle to a canvas
function addFilledRectToCanvas(canvas, x, y, width, height) {
	canvas.append("rect").attr("id", "rect1").attr("x", x).attr("y", y).attr("width", width).attr("height", height);
}

//Add an unfilled rectangle to a canvas------------------------------------------------------------------------------
function addUnfilledRectToCanvas(canvas, rectsCounter, points, stroke, stroke_width) {
	canvas.append("polygon").attr("id", "rect"+rectsCounter).attr("points", points).attr("stroke", stroke).attr("stroke-width", stroke_width).attr("fill", "none");
}
//-------------------------------------------------------------------------------------------------------------------

//Label functions----------------------------------------------------------------------------------------------------
//Add a label to a canvas
function addNodeLabelToCanvas(canvas, nodesCounter, text, x, y, font_family, font_size, fill) {
	canvas.append("text").attr("id", "nodelabel"+nodesCounter).text(text).attr("x", x).attr("y", y).attr("font-family", font_family).attr("font-size", font_size).attr("fill", fill);
}

function addEdgeLabelToCanvas(canvas, edgesCounter, text, x, y, font_family, font_size, fill) {
	canvas.append("text").attr("id", "edgelabel"+edgesCounter).text(text).attr("x", x).attr("y", y).attr("font-family", font_family).attr("font-size", font_size).attr("fill", fill);
}

function addRectLabelToCanvas(canvas, rectsCounter, text, x, y, font_family, font_size, fill) {
	var ptr = canvas.append("text").attr("id", "rectlabel"+rectsCounter).text(text).attr("x", x).attr("y", y).attr("font-family", font_family).attr("font-size", font_size).attr("fill", fill);
	ptr.attr("x", ptr.attr("x")-document.getElementById("rectlabel"+rectsCounter).getComputedTextLength());
}
//-------------------------------------------------------------------------------------------------------------------

//Removal functions--------------------------------------------------------------------------------------------------
function removeNodeFromCanvas(nodeId) {
	d3.select("#"+nodeId).remove();
}

function removeEdgeFromCanvas(edgeId) {
	d3.select("#"+nodeId).remove();
}
//-------------------------------------------------------------------------------------------------------------------

//Test functions-----------------------------------------------------------------------------------------------------
function drawTestGraph(canvas, nodes, nodesCounter, edges, edgesCounter) {
	var centerx = 250;
	var centery = 250;
	var dx = 200;
	var dy = 200;
	var px = null;
	var py = null;
	var m = null;
	var atan = null;
	
	px = centerx;
	py = centery;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, "center", false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, "center", "center", px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx-dx;
	py = centery-dy;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, m+", "+atan, false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, m+", "+atan, m+", "+atan, px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx;
	py = centery-dy;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, m+", "+atan, false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, m+", "+atan, m+", "+atan, px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx+dx;
	py = centery-dy;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, m+", "+atan, false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, m+", "+atan, m+", "+atan, px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx-dx;
	py = centery;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, m+", "+atan, false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, m+", "+atan, m+", "+atan, px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx+dx;
	py = centery;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, m+", "+atan, false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, m+", "+atan, m+", "+atan, px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx-dx;
	py = centery+dy;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, m+", "+atan, false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, m+", "+atan, m+", "+atan, px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx;
	py = centery+dy;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, m+", "+atan, false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, m+", "+atan, m+", "+atan, px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx+dx;
	py = centery+dy;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, m+", "+atan, false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, m+", "+atan, m+", "+atan, px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx-dx/2;
	py = centery-dx;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, "aaa", false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, "aaa", "aaa", px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx+dx/2;
	py = centery-dy;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, "bbb", false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, "bbb", "bbb", px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx-dx;
	py = centery-dy/2;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, "ccc", false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, "ccc", "ccc", px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx+dx;
	py = centery-dy/2;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, "ddd", false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, "ddd", "ddd", px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx-dx;
	py = centery+dy/2;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, "eee", false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, "eee", "eee", px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx+dx;
	py = centery+dy/2;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, "fff", false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, "fff", "fff", px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx-dx/2;
	py = centery+dy;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, "ggg", false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, "ggg", "ggg", px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	px = centerx+dx/2;
	py = centery+dy;
	m = (py-centery)/(px-centerx);
	atan = atanInDeg(m);
	addNodeToCanvas(canvas, nodesCounter, px, py, 50, "red");
	nodes.push([nodesCounter, "hhh", false, px, py, 50, "red"]);
	addLabelToCanvas(canvas, "hhh", "hhh", px, py, "sans-serif", "20px", "green");
	lastCreatedObjectId.push(nodesCounter);
	lastCreatedObjectType.push("node");
	nodesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[1][3], nodes[1][4], 50, "black", 5);
	edges.push([edgesCounter, "NW", false, 0, 1, 5]);
	addLabelToCanvas(canvas, "NW", "NW", Math.round((nodes[0][3]+nodes[1][3])/2), Math.round((nodes[0][4]+nodes[1][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[2][3], nodes[2][4], 50, "black", 5);
	edges.push([edgesCounter, "N", false, 0, 2, 5]);
	addLabelToCanvas(canvas, "N", "N", Math.round((nodes[0][3]+nodes[2][3])/2), Math.round((nodes[0][4]+nodes[2][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[3][3], nodes[3][4], 50, "black", 5);
	edges.push([edgesCounter, "NE", false, 0, 3, 5]);
	addLabelToCanvas(canvas, "NE", "NE", Math.round((nodes[0][3]+nodes[3][3])/2), Math.round((nodes[0][4]+nodes[3][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[4][3], nodes[4][4], 50, "black", 5);
	edges.push([edgesCounter, "W", false, 0, 4, 5]);
	addLabelToCanvas(canvas, "W", "W", Math.round((nodes[0][3]+nodes[4][3])/2), Math.round((nodes[0][4]+nodes[4][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[5][3], nodes[5][4], 50, "black", 5);
	edges.push([edgesCounter, "E", false, 0, 5, 5]);
	addLabelToCanvas(canvas, "E", "E", Math.round((nodes[0][3]+nodes[5][3])/2), Math.round((nodes[0][4]+nodes[5][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[6][3], nodes[6][4], 50, "black", 5);
	edges.push([edgesCounter, "SW", false, 0, 6, 5]);
	addLabelToCanvas(canvas, "SW", "SW", Math.round((nodes[0][3]+nodes[6][3])/2), Math.round((nodes[0][4]+nodes[6][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[7][3], nodes[7][4], 50, "black", 5);
	edges.push([edgesCounter, "S", false, 0, 7, 5]);
	addLabelToCanvas(canvas, "S", "S", Math.round((nodes[0][3]+nodes[7][3])/2), Math.round((nodes[0][4]+nodes[7][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[8][3], nodes[8][4], 50, "black", 5);
	edges.push([edgesCounter, "SE", false, 0, 8, 5]);
	addLabelToCanvas(canvas, "SE", "SE", Math.round((nodes[0][3]+nodes[8][3])/2), Math.round((nodes[0][4]+nodes[8][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[9][3], nodes[9][4], 50, "black", 5);
	edges.push([edgesCounter, "NNW", false, 0, 9, 5]);
	addLabelToCanvas(canvas, "NNW", "NNW", Math.round((nodes[0][3]+nodes[9][3])/2), Math.round((nodes[0][4]+nodes[9][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[10][3], nodes[10][4], 50, "black", 5);
	edges.push([edgesCounter, "NNE", false, 0, 10, 5]);
	addLabelToCanvas(canvas, "NNE", "NNE", Math.round((nodes[0][3]+nodes[10][3])/2), Math.round((nodes[0][4]+nodes[10][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[11][3], nodes[11][4], 50, "black", 5);
	edges.push([edgesCounter, "WNW", false, 0, 11, 5]);
	addLabelToCanvas(canvas, "WNW", "WNW", Math.round((nodes[0][3]+nodes[11][3])/2), Math.round((nodes[0][4]+nodes[11][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[12][3], nodes[12][4], 50, "black", 5);
	edges.push([edgesCounter, "ENE", false, 0, 12, 5]);
	addLabelToCanvas(canvas, "ENE", "ENE", Math.round((nodes[0][3]+nodes[12][3])/2), Math.round((nodes[0][4]+nodes[12][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[13][3], nodes[13][4], 50, "black", 5);
	edges.push([edgesCounter, "WSW", false, 0, 13, 5]);
	addLabelToCanvas(canvas, "WSW", "WSW", Math.round((nodes[0][3]+nodes[13][3])/2), Math.round((nodes[0][4]+nodes[13][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[14][3], nodes[14][4], 50, "black", 5);
	edges.push([edgesCounter, "ESE", false, 0, 14, 5]);
	addLabelToCanvas(canvas, "ESE", "ESE", Math.round((nodes[0][3]+nodes[14][3])/2), Math.round((nodes[0][4]+nodes[14][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[15][3], nodes[15][4], 50, "black", 5);
	edges.push([edgesCounter, "SSW", false, 0, 15, 5]);
	addLabelToCanvas(canvas, "SSW", "SSW", Math.round((nodes[0][3]+nodes[15][3])/2), Math.round((nodes[0][4]+nodes[15][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	addArrowToCanvas(canvas, nodes[0][3], nodes[0][4], nodes[16][3], nodes[16][4], 50, "black", 5);
	edges.push([edgesCounter, "SSE", false, 0, 16, 5]);
	addLabelToCanvas(canvas, "SSE", "SSE", Math.round((nodes[0][3]+nodes[16][3])/2), Math.round((nodes[0][4]+nodes[16][4])/2), "sans-serif", "20px", "green");
	lastCreatedObjectId.push(edgesCounter);
	lastCreatedObjectType.push("edge");
	edgesCounter++;
	
	alert("nodes: " + nodes);
	alert("edges: " + edges);
	alert("lastCreatedObjectId: " + lastCreatedObjectId);
	alert("lastCreatedObjectType: " + lastCreatedObjectType);
	alert("nodesCounter: " + nodesCounter);
	alert("edgesCounter: " + edgesCounter);
}
//-------------------------------------------------------------------------------------------------------------------