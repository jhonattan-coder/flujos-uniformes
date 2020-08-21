// JavaScript Document
function cargar(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 & this.status == 200){
			document.getElementById("areadecontenido").innerHTML = this.responseText;
			}
		};
	xhttp.open("GET","conversiones1.txt",true);
	xhttp.send();
	}
	
function cargar2(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 & this.status == 200){
			document.getElementById("areadecontenido").innerHTML = this.responseText;
			}
		};
	xhttp.open("GET","flujouniforme.txt",true);
	xhttp.send();
	}
	