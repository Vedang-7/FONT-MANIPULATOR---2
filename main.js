function setup() 
{
  canvas = createCanvas(550, 550);
  canvas.position(560, 150);
  video = createCapture(VIDEO);
  video.size(550, 500,);
  posenet= ml5.poseNet(video, modelLoaded);
  posenet.on('pose', gotposes)
}
function draw(){
    background('pink');
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotposes(results){
    if(results.length>0){
    console.log(results);
    }
}