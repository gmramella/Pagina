$(document).ready(function(){
	$('.hover').mousemove(function(e){
		var hovertext = $(this).attr('hovertext');
		$('#hoverdiv').text(hovertext).show();
		//$('#hoverdiv').css('top', e.clientY+10).css('left', e.clientX+14);
		$('#hoverdiv').css('top', e.pageY+10).css('left', e.pageX+14);
	}).mouseout(function(){
		$('#hoverdiv').hide();
	});
});