var init = function() {
	var myCanvas = document.getElementById("myCanvas");
	if (myCanvas) {
		myCanvas.onmousemove = function(event) {
			var coordDiv = document.getElementById("coords");
			coordDiv.innerHTML = "X: " + event.clientX + " Y: " + event.clientY;
			//console.log("X: " + event.clientX + " Y: " + event.clientY);
		}
		
	}
	else {
		setTimeout(init, 50);					
	}
};

init();