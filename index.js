var myX = 10, myY = 10;

var init = function() {
	var myCanvas = document.getElementById("myCanvas");
	if (myCanvas) {
		myCanvas.onmousemove = function(event) {
			var coordDiv = document.getElementById("coords");
			coordDiv.innerHTML = "X: " + event.clientX + " Y: " + event.clientY;
			//console.log("X: " + event.clientX + " Y: " + event.clientY);
		};
		//canvas.onkeypress does not work. Does not get focus, or something.
		document.onkeypress = function(event) {
			if (event.charCode === 100) {
				myX++;
			}
			if (event.charCode === 97) {
				myX--;
			}
			if (event.charCode === 115) {
				myY++;
			}
			if (event.charCode === 119) {
				myY--;
			}
			
			var ctx=myCanvas.getContext("2d");
			ctx.beginPath();
			ctx.arc(myX,myY,20,0,2*Math.PI);
			ctx.stroke();
		};
	}
	else {
		setTimeout(init, 50);					
	}
};

init();