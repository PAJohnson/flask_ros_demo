// javascript
// vars are functions! This calls the setInterval function
var updateInterval = setInterval(loadtime, 1000);

function loadtime(){
	console.log("interval");
	var xhttp = new XMLHttpRequest();
	//callback fcn?
	xhttp.onreadystatechange = function(){
		document.getElementById("rospy_time").innerHTML = ' ' + this.responseText;
	}
	xhttp.open("GET", "/timeupdate", true);
	xhttp.send();
}
