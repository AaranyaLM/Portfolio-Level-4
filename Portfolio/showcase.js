var canvas;
var canvasContext;
var ballx=50; // ball posi x axis
var bally=50; // ball posi y axis
var ballxSpeed= 11;
var ballySpeed=6;


window.onload= function(){

    canvas=document.getElementById('gameCanvas');
    canvasContext= canvas.getContext('2d');
    var framesPerSecond= 60;
    setInterval(returnBoth, 1000/framesPerSecond);
    
}

function returnBoth(){
    drawEverything();
    moveEverything();
}

function drawEverything(){

    canvasContext.fillStyle= 'black'; //fills out black acreen
    canvasContext.fillRect(0,0,canvas.width,canvas.height);


    canvasContext.fillStyle= 'red'; //ball
    canvasContext.beginPath();
    canvasContext.arc(ballx, bally,10,0, Math.PI*2, true);
    canvasContext.fill();
}

function moveEverything(){
    ballx= ballx+ ballxSpeed;
    bally= bally+ ballySpeed;

    if (ballx<0){
        ballxSpeed=-ballxSpeed;
    }

    if(ballx>canvas.width){
        ballxSpeed=-ballxSpeed;
    }

    if (bally<0){
        ballySpeed=-ballySpeed;
    }

    if(bally>canvas.height){
        ballySpeed=-ballySpeed;
    }
  
}

