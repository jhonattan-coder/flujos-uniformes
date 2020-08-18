// JavaScript Document
//////////////////////////////// Ecuaciones del flujo uniforme en canal rectangular 
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
	
	p.textContent = 'Flujo : ' + Q + ' m3/s';
	}
	if(b<=0 || y<=0 || sf<0 || n<=0){

	p.textContent = 'La información no es válida';
	}
}

//////////////////////////////// Ecuaciones del flujo uniforme en canal circular 
function flow_unif_channel_circ(){
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
	
	p.textContent = 'Flujo : ' + Q + ' m3/s';
	}
	if(y>d){
		
	p.textContent = 'La profundidad no debe ser mayor al diámetro del conducto';
	}
	if(y<=0){

	p.textContent = 'La profundidad no debe ser un valor negativo ni nulo';
	}
}

//////////////////////////////// Ecuaciones del flujo uniforme en canal trapecial
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
	
	p.textContent = 'Flujo : ' + Q + ' m3/s';
	}
	if(b<=0 || y<=0 || z<0 || sf<0 || n<=0){

	p.textContent = 'La información no es válida';
	}
}

//////////////////////////////// Ecuaciones del flujo uniforme en canal triangular
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
	
	p.textContent = 'Flujo : ' + Q + ' m3/s';
	}
	if(z<=0 || y<=0 || sf<0 || n<=0){

	p.textContent = 'La información no es válida';
	}
}
//////////////////////////////// Ecuaciones del tirante uniforme en canal rectangular
function tiran_unif_canal_rect(){
	var b = parseFloat(document.getElementById("b5").value);
	var sf = parseFloat(document.getElementById("sf5").value);
	var n = parseFloat(document.getElementById("n5").value);
	var q = parseFloat(document.getElementById("q5").value);
	var p = document.getElementById("p5");
	if (b>0 && sf>=0 && n>0 && q>0){
	var y0 = 1;
	
	for (i=1; i<25; i++){
	var A = y0 * b;
	var T = b;
	var P = b + 2*y0;
	var R = A/P;
	var f0 = manning(q,sf,A,R,n);
	var d0 = derivadaManningRect(R,n,T);
	var y = y0-(f0/d0);
	y0=y;
		}
	p.textContent = 'Tirante normal: ' + y0 + ' m';
	}

	else if (b<=0 || sf<0 || n<=0 || q<=0){
	p.textContent = 'Asegurese de ingresar datos válidos';
	}
}
//////////////////////////////// Ecuaciones del tirante uniforme en canal circular
function tiran_unif_canal_circ(){
	var d = parseFloat(document.getElementById("d6").value);
	var sf = parseFloat(document.getElementById("sf6").value);
	var n = parseFloat(document.getElementById("n6").value);
	var q = parseFloat(document.getElementById("q6").value);
	var p = document.getElementById("p6");
	if (d>0 && sf>=0 && n>0 && q>0){
	var y0 = 0.9*d;
	
	for (i=1; i<8; i++){
	var a0=2*Math.acos((1-(2*y0/d)));
	var A = 0.5*Math.pow(d,2)*(a0-Math.sin(a0));
	var T = d*Math.sin(a0/2);
	var P = a0*d/2;
	var R = A/P;
	var f0 = manning(q,sf,A,R,n);
	var d0 = derivadaManningCirc(R,n,T,d,y0);
	var a1 = a0-(f0/d0);
	var y = 0.5*d*(1-Math.cos(a1/2));
	y0=y;
		}
		console.log(A);
		console.log(T);
		console.log(P);
		console.log(R);
	p.textContent = 'Tirante normal: ' + y0 + ' m';
	}

	else if (d<=0 || sf<0 || n<=0 || q<=0){
	p.textContent = 'Asegurese de ingresar datos válidos';
	}
}
//////////////////////////////// Ecuaciones del tirante uniforme en canal trapezoidal
function tiran_unif_canal_trap(){
	var b = parseFloat(document.getElementById("b7").value);
	var z = parseFloat(document.getElementById("z7").value);
	var sf = parseFloat(document.getElementById("sf7").value);
	var n = parseFloat(document.getElementById("n7").value);
	var q = parseFloat(document.getElementById("q7").value);
	var p = document.getElementById("p7");
	
	if (b>0 && z>0 && sf>=0 && n>0 && q>0){
	var y0 = 1;
	
	for (i=1; i<25; i++){
	var A = y0 * (b + z*y0);
	var T = b+(2*z*y0);
	var P = b + 2*y0*Math.pow(1+z*z,1/2);
	var R = A/P;
	var f0 = manning(q,sf,A,R,n);
	var d0 = derivadaManningTrap(R,n,T,z);
	var y = y0-(f0/d0);
	y0=y;
		}
	p.textContent = 'Tirante normal: ' + y0 + ' m';
	}

	else if (b<=0 || sf<0 || n<=0 || q<=0){
	p.textContent = 'Asegurese de ingresar datos válidos';
	}
}
//////////////////////////////// Ecuaciones del tirante uniforme en canal triangular
function tiran_unif_canal_trian(){
	var z = parseFloat(document.getElementById("z8").value);
	var sf = parseFloat(document.getElementById("sf8").value);
	var n = parseFloat(document.getElementById("n8").value);
	var q = parseFloat(document.getElementById("q8").value);
	var p = document.getElementById("p8");
	
	if (z>0 && sf>=0 && n>0 && q>0){
	var y0 = 1;
	
	for (i=1; i<25; i++){
	var A = z*y0*y0;
	var T = (2*z*y0);
	var P =  2*y0*Math.pow(1+z*z,1/2);
	var R = A/P;
	var f0 = manning(q,sf,A,R,n);
	var d0 = derivadaManningTrap(R,n,T,z);
	var y = y0-(f0/d0);
	y0=y;
		}
	p.textContent = 'Tirante normal: ' + y0 + ' m';
	}

	else if (b<=0 || sf<0 || n<=0 || q<=0){
	p.textContent = 'Asegurese de ingresar datos válidos';
	}
}
//////////////////////////////// Ecuaciones del tirante crítico en canal rectangular
function tiran_crit_canal_rect(){
	var b = parseFloat(document.getElementById("b9").value);
	var q = parseFloat(document.getElementById("q9").value);
	var p = document.getElementById("p9");
	if (b>0 && q>0){
	var y0 = 1;
	var y1 = 5;
	
	for (i=1; i<8; i++){
	var A0 = y0 * b;
	var A1 = y1 * b;
	var D0 = y0;
	var D1 = y1;
	var V0 = q/A0;
	var V1 = q/A1;
	var f0 = criterio(V0,D0);
	var f1 = criterio(V1,D1);;
	var y2 = y1-(((f1)*(y0-y1))/(f0-f1));
	y0=y1;
	y1=y2;
		}
	p.textContent = 'Tirante critico: ' + y1 + ' m';
	}

	else if (b<=0 || q<=0){
	p.textContent = 'Asegurese de ingresar datos válidos';
	}
}
//////////////////////////////// Ecuaciones del tirante crítico en canal circular
function tiran_crit_canal_circ(){
	var d = parseFloat(document.getElementById("d10").value);
	var q = parseFloat(document.getElementById("q10").value);
	var p = document.getElementById("p10");
	if (d>0 && q>0){
	var y0 = 0.9*d;
	var y1 = 0.1*d;
	
	for (i=1; i<8; i++){
	var ang0=2*Math.acos(1-(2*y0/d));
	var ang1=2*Math.acos(1-(2*y1/d));
	var A0 = 0.5*d*d*0.25*(ang0-Math.sin(ang0));
	var A1 = 0.5*d*d*0.25*(ang1-Math.sin(ang1));
	var D0 = A0/(Math.sin(0.5*ang0)*d);
	var D1 = A1/(Math.sin(0.5*ang1)*d);
	var V0 = q/A0;
	var V1 = q/A1;
	var f0 = criterio(V0,D0);
	var f1 = criterio(V1,D1);
	var ang2 = ang1-(((f1)*(ang0-ang1))/(f0-f1));
	y2=0.5*d*(1-(Math.cos(ang2/2)));
	y0=y1;
	y1=y2;
		}
	p.textContent = 'Tirante critico: ' + y1 + ' m';
	}

	else if (b<=0 || q<=0){
	p.textContent = 'Asegurese de ingresar datos válidos';
	}
}
//////////////////////////////// Ecuaciones del tirante crítico en canal trapezoidal
function tiran_crit_canal_trap(){
	var b = parseFloat(document.getElementById("b11").value);
	var z = parseFloat(document.getElementById("z11").value);
	var q = parseFloat(document.getElementById("q11").value);
	var p = document.getElementById("p11");
	if (b>0 && z>0 && q>0){
	var y0 = 2*b;
	var y1 = 0.5*b;
	
	for (i=1; i<8; i++){
	var A0 = y0 * (b + z*y0);
	var A1 = y1 * (b + z*y1);
	var D0 = A0/(b+2*z*y0);
	var D1 = A1/(b+2*z*y1);
	var V0 = q/A0;
	var V1 = q/A1;
	var f0 = criterio(V0,D0);
	var f1 = criterio(V1,D1);;
	var y2 = y1-(((f1)*(y0-y1))/(f0-f1));
	y0=y1;
	y1=y2;
		}
	p.textContent = 'Tirante critico: ' + y1 + ' m';
	}

	else if (b<=0 || z<=0 || q<=0){
	p.textContent = 'Asegurese de ingresar datos válidos';
	}
}
//////////////////////////////// Ecuaciones del tirante crítico en canal triangular
function tiran_crit_canal_trian(){
	var z = parseFloat(document.getElementById("z12").value);
	var q = parseFloat(document.getElementById("q12").value);
	var p = document.getElementById("p12");
	if (z>0 && q>0){
	var y0 = 1;
	var y1 = 4;
	
	for (i=1; i<8; i++){
	var A0 = y0*z*y0;
	var A1 = y1*z*y1;
	var D0 = A0/(2*z*y0);
	var D1 = A1/(2*z*y1);
	var V0 = q/A0;
	var V1 = q/A1;
	var f0 = criterio(V0,D0);
	var f1 = criterio(V1,D1);;
	var y2 = y1-(((f1)*(y0-y1))/(f0-f1));
	y0=y1;
	y1=y2;
		}
	p.textContent = 'Tirante critico: ' + y1 + ' m';
	}

	else if (z<=0 || q<=0){
	p.textContent = 'Asegurese de ingresar datos válidos';
	}
}
//////////////////////////////// *********************************************************************************************
function caudal(n,A,RH,sf){
	var Pot_RH = Math.pow(RH,2/3);
	var Pot_sf = Math.pow(sf,1/2);
	return 1/n * A * Pot_RH * Pot_sf; 
}
////////////////////////////////  ********************************************************************************************
function manning (q,sf,A,R,n){
	var Pot_RH = Math.pow(R,2/3);
	var Pot_sf = Math.pow(sf,1/2);
	var inv_n = 1/n;
	return (q/Pot_sf)-(A*Pot_RH*inv_n);
}
function derivadaManningRect (R,n,T){
	var Pot_RH = Math.pow(R,2/3);
	var inv_n = 1/n;
	return -1 * Pot_RH * inv_n * ((5*T-2*R*0)/3);
	}
function derivadaManningCirc (R,n,T,d,y0){
	var Pot_RH = Math.pow(R,2/3);
	var inv_n = 1/n;
	var dtdy = 2*(d-2*y0)*0.5*Math.pow(y0*d-y0*y0,-1/2);
	return -1 * Pot_RH * inv_n * ((5*T-2*R*dtdy)/3);
	}
function derivadaManningTrap (R,n,T,z){
	var Pot_RH = Math.pow(R,2/3);
	var inv_n = 1/n;
	return -1 * Pot_RH * inv_n * ((5*T-4*R*z)/3);
	}
function criterio (V,D){
	return ((V*V)/(19.62))-0.5*D;
	}
//////////////////////////////// -------------------------------------------------------- ----------  --------------------------
function openTab(id, elmnt, color, tablink, tabcontent, defaultOpen) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(tabcontent);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName(tablink);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "gray";
  }

  // Show the specific tab content
  document.getElementById(id).style.display = "block";

  // Add the specific color to the button used to open the tab content
  document.getElementById(defaultOpen).style.background= "gray";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen1").click();