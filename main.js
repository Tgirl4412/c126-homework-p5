song = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song_variable= "";

function preload()
{
song = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose' , gotPoses);
}


function modelLoaded()
{
    console.log('PoseNet has been intialised!');
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
song.play();
song.setVolume(1);
song.rate(1);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrists);
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWristY);
    

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
    
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

    }
}

function draw() 
{
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2)
{
    song_variable= song.isPlaying()
    if( song_variable == true){
        song.stop()
    }
    else() {
        song.play;
    }

    song_variable= song.isPlaying()
    if( song_variable2 == true){
        song2.stop()
    }
    else() {
        song2.play;
    }

}
song_variable= song.isPlaying()
    if( song_variable == true){
        song.stop()
    }
    else() {
        song.play;
    }

}
