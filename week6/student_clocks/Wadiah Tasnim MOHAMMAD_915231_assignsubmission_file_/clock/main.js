$(document).ready(function() {

  var videoSources = [
    "https://www.youtube.com/embed/Nxs53pkE2TY", //gmt+2
    "https://www.youtube.com/embed/UovRadZWzqo", //gmt+3
    "https://www.youtube.com/embed/gvMxUlS2VoU" //gmt+8
  ]

  var currentIndex = 0;
  function myNewSrc() {
            var myVideo = document.getElementsByTagName('video')[0];
            myVideo.src = videoSources[currentIndex];
            myVideo.load();
        }

  //this var is added in step 9
  // Let's set the AM and PM meridiem for 12 hour format instead of 24 hour time
  var meridiem = "AM";  // Default is AM

  function displayTime() {
	   var currentTime = new Date();
	   var hours = currentTime.getHours();
	   var minutes = currentTime.getMinutes();
  	 var seconds = currentTime.getSeconds();

     if (hours >= 17 && hours <= 7) {
       $('body').removeClass('day').addClass('night');
       $('body').css("background-blend-mode", "multiply");
     }

     if (hours <= 16 && hours >= 8) {
       $('body').removeClass('night').addClass('day');
       $('body').css("background-blend-mode", "screen");
     }

     if (hours == 0){

     }

     if (hours == 1){

     }

     if (hours == 2){

     }

     if (hours == 3){

     }

     if (hours == 4){

     }

     if (hours == 5){

     }

     if (hours == 6){

     }

     // If the seconds digit is less than ten  (this code from step 8)
     if (seconds < 10) {
          // Add the "0" digit to the front
          // so 9 becomes "09"
          seconds = "0" + seconds;
     }
     // If the minutes digit is less than ten
     if (minutes < 10) {
          minutes = "0" + minutes;
     }
     // If the hours digit is less than ten
     if (hours < 10) {
          hours = "0" + hours;
     }

  // This gets a "handle" to the clock div in our HTML
  var clockDiv = document.getElementById('clock');

  // Then we set the text inside the clock div
  // to the hours, minutes, and seconds of the current time
  clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  }  //end of displayTime() function


  displayTime();

  //runs once a second aka 1000 milliseconds, added in step 7
  setInterval(displayTime, 1000);



});
