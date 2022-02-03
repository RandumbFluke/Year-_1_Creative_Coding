let deg = 0;
let rotationDiff = 1;

let rotation;
let rotationInterval;

function start(){
    rotationInterval = setInterval("rotateDiv()",10);
    console.log("start");
}

function stop(){
    clearInterval(rotationInterval);
    console.log("stop");
}

function rotateDiv(){
    let divAnim01 = document.getElementById("divAnim01");
    divAnim01.style.transform = "rotate(" + deg + "deg)";
    
    deg += rotationDiff;
    if (deg > 360){
        deg = 0;
    }
}