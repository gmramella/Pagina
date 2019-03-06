var OPNfooter = '<footer>';
var mapa1 = '<a href="https://clustrmaps.com/site/1ambd" title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=cR44ome3oBkRfOCGhA0u24cLaCf1sF58WzJkXFCd0M0&cl=ffffff"></a>';
var mapa2 = '<a href="http://www.clustrmaps.com/map/inf.ufrgs.br/~gmramella/" title="Visitor Map for inf.ufrgs.br/~gmramella/"><img class="map" src="//www.clustrmaps.com/map_v2.png?u=xpj8&d=8Vw6RgqODitMuS61EyBL3BBN1otHKPpW5Vld0xEtrC8"></a>';
var OPNp = '<p class="nome">';
var nome = 'Giuseppe Moroni Ramella';
var CLSp = '</p>';
var CLSfooter = '</footer>';

$(document).ready(function(){
	$('.body').append(OPNfooter+mapa1+mapa2+OPNp+nome+CLSp+CLSfooter);
});