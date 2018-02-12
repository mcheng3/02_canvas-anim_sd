var c = document.getElementById("area");
var requestID;

var cancel = function(){
    window.cancelAnimationFrame(requestID);
}

var animateCircle = function(){

    var ctx = c.getContext("2d");
    ctx.fillStyle = "#99348d";
    var pos = 0;
    var m = 250;
  
    var drawCircle = function(){
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(c.width/2,c.height/2,c.height/2*(0.5*Math.sin(m/50)+0.5), 0, 2*Math.PI);
	m++;
	ctx.stroke();
	ctx.fill();
	pos+=0.5;
	requestID = window.requestAnimationFrame(drawCircle);
    }
    drawCircle(); 
    
}

var animateDVD = function(){
    var r = 50;
    var x = r;
    var y = r;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#99348d";
    var pos = 0;
    var m = 250;
    var xVel = 105;
    var yVel = 100;
   
    var drawDVD = function(){
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(x,y,r, 0, 2*Math.PI);
	m++;
	x+=xVel;
	y+=yVel;
	if(x < r || x > c.width - r){
	    xVel *= -1;
	}
	if(y < r || y > c.height - r){
	    yVel *= -1;
	}	
	ctx.stroke();
	ctx.fill();
	pos+=0.5;
	requestID = window.requestAnimationFrame(drawDVD);
    }
    drawDVD();
    
}


c.addEventListener("click", animateCircle);
document.getElementById("circle").addEventListener("click", animateCircle);
document.getElementById("dvd").addEventListener("click", animateDVD);
document.getElementById("cancel").addEventListener("click", cancel);

