leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

scoreRightWrist=0;
scoreLeftWrist=0;

song1="";
song2="";

song1_status=""
song2_status=""

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.leftWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
    }
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoded);
    poseNet.on('pose',gotPoses);
}

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music.mp3");
}

function song(){
    song.play();
}

function draw(){
    image(video,0,0,600,900);
    song1_status=song1.isplaying();
    song2_status=song2.isplaying();
    fill("red");
    stroke("lime");

    if(scoreRightWrist > 0.2) {
         circle(rightWristX,rightWristY,20);
          song2.stop();
           if(song1_status == false) {
             song1.play();
              document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song" 
            } }

            if(scoreLeftWrist > 0.2) {
                circle(rightWristX,rightWristY,20);
                 song1.stop();
                  if(song2_status == false) {
                    song2.play();
                     document.getElementById("song").innerHTML = "Playing - Peter Pan Song" 
                   } }

}