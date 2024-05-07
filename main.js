
difference = 0
leftwrist_x = 0
rightwrist_x = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(500,460);
    canvas.position(700,125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('Posenet model has been loaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

    }
}
