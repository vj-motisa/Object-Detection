var img = "";
var Status = "";
var jar = [];



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    obde = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}


function preload() {
    img = loadImage("studyroom.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);

    if (Status != "") {
        for (i = 0; i < jar.length; i++) {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill("#3de099");
            percent = floor(jar[i].confidence*100);
            text(jar[i].label + " " + percent + "% ", jar[i].x, jar[i].y);
            noFill();
            stroke("#blue");
            rect(jar[i].x, jar[i].y, jar[i].width, jar[i].height);
            textSize(23);
        }
    }
}


function modelLoaded() {
    console.log("FLERSHHA");
    Status = true;
    obde.detect(img, gotResult);
}

function gotResult(error, result) {
    if(error) {
        console.log(error);
    }

    else {
        console.log(result);
        jar = result;
    }
}