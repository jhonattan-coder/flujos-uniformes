// JavaScript Document
//////////////////////////////// Ecuaciones del flujo uniforme en canal rectangular ////////////////////////////////////
function flow_unif_channel_rect(){
var b = parseFloat(document.getElementById("b1").value);
var sf = parseFloat(document.getElementById("sf1").value);
var n = parseFloat(document.getElementById("n1").value);
var y = parseFloat(document.getElementById("y1").value);
var p = document.getElementById("p1");

	if(b>0 && y>0 && sf>=0 && n>0){
	var A = b * y;
	var P = b + 2*y
	var RH = A/P;
	var Q = caudal(n,A,RH,sf);
	
	p.textContent = 'Flujo :' + Q + ' m3/s';
	}
	if(b<=0 || y<=0 || sf<0 || n<=0){

	p.textContent = 'La información no es válida';
	}
}

//////////////////////////////// Ecuaciones del flujo uniforme en canal circular ////////////////////////////////////
function flow_unif_channel_circle(){
var d = parseFloat(document.getElementById("d2").value);
var sf = parseFloat(document.getElementById("sf2").value);
var n = parseFloat(document.getElementById("n2").value);
var y = parseFloat(document.getElementById("y2").value);
var p = document.getElementById("p2");
const PI = 3.1415;
	if(d==y){
	var A = PI*d*d/4;
	var RH = d/4;
	var Q = caudal(n,A,RH,sf);
	
	p.textContent = 'Flujo :' + Q + ' m3/s';
	}
	if(d>y && y>0){
	var r =d/2;
	var ang = 2*Math.acos(1-(y/r));
	var A = (1/2)*(Math.pow(r,2))*(ang-(Math.sin(ang)));
	var P = ang*r;
	var RH = A/P;
	var Q = caudal(n,A,RH,sf);
	
	p.textContent = 'Flujo :' + Q + ' m3/s';
	}
	if(y>d){
		
	p.textContent = 'La profundidad no debe ser mayor al diámetro del conducto';
	}
	if(y<=0){

	p.textContent = 'La profundidad no debe ser un valor negativo ni nulo';
	}
}

//////////////////////////////// Ecuaciones del flujo uniforme en canal trapecial ////////////////////////////////////
function flow_unif_channel_trap(){
var b = parseFloat(document.getElementById("b3").value);
var z = parseFloat(document.getElementById("z3").value);
var sf = parseFloat(document.getElementById("sf3").value);
var n = parseFloat(document.getElementById("n3").value);
var y = parseFloat(document.getElementById("y3").value);
var p = document.getElementById("p3");

	if(b>0 && y>0 && z>=0 && sf>=0 && n>0){
	var A = (b + (z * y)) * y;
	var P = b+((2*y)*(Math.pow(1+z*z,1/2)));
	var RH = A/P;
	var Q = caudal(n,A,RH,sf);
	
	p.textContent = 'Flujo :' + Q + ' m3/s';
	}
	if(b<=0 || y<=0 || z<0 || sf<0 || n<=0){

	p.textContent = 'La información no es válida';
	}
}

//////////////////////////////// Ecuaciones del flujo uniforme en canal triangular ////////////////////////////////////
function flow_unif_channel_trian(){
var z = parseFloat(document.getElementById("z4").value);
var sf = parseFloat(document.getElementById("sf4").value);
var n = parseFloat(document.getElementById("n4").value);
var y = parseFloat(document.getElementById("y4").value);
var p = document.getElementById("p4");

	if(y>0 && z>0 && sf>=0 && n>0){
	var A = z*y*y;
	var P = (2*y)*(Math.pow(1+z*z,1/2));
	var RH = A/P;
	var Q = caudal(n,A,RH,sf);
	
	p.textContent = 'Flujo :' + Q + ' m3/s';
	}
	if(z<=0 || y<=0 || sf<0 || n<=0){

	p.textContent = 'La información no es válida';
	}
}
//////////////////////////////// 
function caudal(n,A,RH,sf){
	var Pot_RH = Math.pow(RH,2/3);
	var Pot_sf = Math.pow(sf,1/2);
	return 1/n * A * Pot_RH * Pot_sf; 
}

function openTab(id, elmnt, color, tabcontent, defaultOpen) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(tabcontent);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(id).style.display = "block";

  // Add the specific color to the button used to open the tab content
  document.getElementById(defaultOpen).style.background= "gray";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();