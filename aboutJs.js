function p1List(){
	document.getElementById("p1").style.backgroundColor= "rgba(255, 255, 255, 0.1)";
	document.getElementById("listP1").style.visibility= "visible";
	document.getElementById("p2").style.backgroundColor= "rgba(0, 0, 0, 0.5)";
	document.getElementById("listP2").style.visibility= "hidden";

}
function p2List(){
	document.getElementById("p1").style.backgroundColor= "rgba(0, 0, 0, 0.5)";
	document.getElementById("listP1").style.visibility= "hidden";
	document.getElementById("p2").style.backgroundColor= "rgba(255, 255, 255, 0.1)";
	document.getElementById("listP2").style.visibility= "visible";
}