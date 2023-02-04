var canvas2;
var canvasContext2;


window.onload= function(){

    canvas2=document.getElementsById('gameCanvas2');
    canvasContext2= canvas2.getContext('2d');
    var framesPerSecond= 60;
    setInterval(returnBoth, 1000/framesPerSecond);
    
}

function returnBoth(){
    drawEverything2();
    moveEverything();
}

function drawEverything2(){

    canvasContext2.fillStyle= 'black'; //fills out black acreen
    canvasContext2.fillRect(0,0,canvas2.width,canvas2.height);


    canvasContext2.fillStyle= 'red'; //ball
    canvasContext2.beginPath();
    canvasContext2.arc(ballx, bally,10,0, Math.PI*2, true);
    canvasContext2.fill();
}

function moveEverything(){
    ballx= ballx+ ballxSpeed;
    bally= bally+ ballySpeed;

    if (ballx<0){
        ballxSpeed=-ballxSpeed;
    }

    if(ballx>canvas2.width){
        ballxSpeed=-ballxSpeed;
    }

    if (bally<0){
        ballySpeed=-ballySpeed;
    }

    if(bally>canvas2.height){
        ballySpeed=-ballySpeed;
    }
  
}