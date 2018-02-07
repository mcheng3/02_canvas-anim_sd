var c = document.getElementById("area");
    
var animate = function(){

    var ctx = c.getContext("2d");
    ctx.fillStyle = "#99348d";
    var pos = 0;
    var m = 250;

    var requestID;
    var cancel = function(){
	window.cancelAnimationFrame(requestID);
    }
    var drawCircle = function(){
	ctx.clearRect(0, 0, 500, 500);
	ctx.beginPath();
	ctx.arc(250,250,250*(0.5*Math.sin(m/50)+0.5), 0, 2*Math.PI);
	m++;
	ctx.stroke();
	ctx.fill();
	pos+=0.5;
	requestID = window.requestAnimationFrame(drawCircle);
    }
    drawCircle();
    document.getElementById("cancel").addEventListener("click", cancel);
}

c.addEventListener("click", animate);

