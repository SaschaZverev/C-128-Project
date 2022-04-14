song_1 = "";
song_2 = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = ""; 

function preload()
{
    song = loadSound("m1.mp3");
    song = loadSound("m2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(300,200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Intialized !");
}

function draw()
{
    image(video ,0 ,0, 600, 500);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}