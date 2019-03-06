var nodes = [];
var edges = [];

function first_empty(arr) {
	if(arr.length == 0) {
		return 0;
	} else {
		for(var i=0; i<arr.length; i++) {
			if(arr[i] == null) {
				return i;
			}
		}
		return arr.length;
	}
}

//Source: https://www.youtube.com/watch?v=8jvoTV54nXw
//Canvas functions----------------------------------------------------------------------------------------------------
function add_canvas(width, height) {
	var output = d3.select("body").append("svg").attr("width", width).attr("height", height);
	return output;
}
//-------------------------------------------------------------------------------------------------------------------

//Circle functions----------------------------------------------------------------------------------------------------
function add_circle(canvas, cx, cy, r, fill) {
	var label = prompt("Node label", "n"+first_empty(nodes));
	if (label != null) {
		//ADICIONAR LABEL AQUI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		canvas.append("circle").attr("cx", cx).attr("cy", cy).attr("r", r).attr("fill", fill).attr("id", label);
		nodes.push([cx, cy, r]);
	}
}
//-------------------------------------------------------------------------------------------------------------------

//Rect functions----------------------------------------------------------------------------------------------------
function add_rect(canvas, width, height) {
	var output = canvas.append("rect").attr("width", width).attr("height", height).attr("id", "rect1");
	return output;
}
//-------------------------------------------------------------------------------------------------------------------

//Line functions----------------------------------------------------------------------------------------------------
function add_line(canvas, x1, y1, x2, y2, stroke, stroke_width) {
	var label = prompt("Edge label", "e"+first_empty(edges));
	if (label != null) {
		//ADICIONAR LABEL AQUI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		canvas.append("line").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2).attr("stroke", stroke).attr("stroke-width", stroke_width).attr("id", label);
		edges.push([x1, y1, x2, y2, stroke_width]);
	}
}
//-------------------------------------------------------------------------------------------------------------------

//Removal functions
function remove(id) {
	d3.select("#"+id).remove();
}
//-------------------------------------------------------------------------------------------------------------------

//Graph drawing functions
function draw_graph(canvas) {
	add_line(canvas, "50", "50", "250", "50", "yellow", "1");
	add_line(canvas, "250", "50", "450", "50", "yellow", "1");

	add_circle(canvas, "50", "50", "5", "red");
	add_circle(canvas, "250", "50", "5", "green");
	add_circle(canvas, "450", "50", "5", "blue");
}
//-------------------------------------------------------------------------------------------------------------------



//On-click-and-detect node/edge add/removal
//Code based on: http://stackoverflow.com/questions/16792841/detect-if-user-clicks-inside-a-circle
$(document).ready(function() {
	var svg = d3.select('svg');

	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
    
	function drawCircle(x, y, size) {
		svg.append("circle").attr('class', 'click-circle').attr("cx", x).attr("cy", y).attr("r", size).attr("fill", "red");
	}
        
	// x,y is the point to test
	// cx, cy is circle center, and radius is circle radius
	function pointInCircle(x, y, cx, cy, radius) {
		var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
		return distancesquared <= radius * radius;
	}

	function pointInSomeCircle() {
		for (var i = 0; i < nodes.length; i++) {
			if(pointOnCircle(coords[0], coords[1], nodes[i].cx, nodes[i].cy, nodes[i].r)) {
				return i;
			}
		}
		return -1;
	}

	function pointInLine(x, y, x1, y1, x2, y2, stroke_width) {
		return ((x >= x1 && x <= x2) && (y >= (y - stroke_width) && y <= (y+stroke_width)));
	}

	function pointInSomeLine() {
		for (var i = 0; i < edges.length; i++) {
			if(pointInLine(coords[0], coords[1], edges[i].x1, edges[i].y1, edges[i].x2, edges[i].y2, edges[i].stroke_width)) {
				return i;
			}
		}
		return -1;
	}
    
	svg.on('click', function() {
		var coords = d3.mouse(this);
		//alert(coords);
		var res1 = -1;//pointInSomeCircle();
		var res2 = -1;//pointInSomeLine();
		if(res1 == -1 && res2 == -1) {
		//	if(release != press) {
		//		add_line(canvas, x1, y1, x2, y2, stroke, stroke_width);
		//	} else {
				add_circle(canvas, coords[0], coords[1], "5", "red");
		//	}
		} else {
		//	if(res1 != -1) {
		//		remove("n0");
		//	} else {
		//		remove("e0");
		//	}
		}
	});	
});