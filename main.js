Status = "";
InputValue = document.getElementById("ObjectInput");

function setup() {
    Canvas = createCanvas(480, 1200);
    Canvas.center();
}

function preload() {
    Video = createCapture(VIDEO);
    Video.hide()
}

function draw() {
    image(Video, 0, 0, 480, 380);
}

function Start() {
    ObjectDetector = ml5.objectDetector("cocossd", ModelLoaded);
    document.getElementById("StatusDetectedLabelDiv").innerHTML = "Status : Detecting Objects";
}

function ModelLoaded() {
    console.log("Model Loaded!");
    status = true;
}