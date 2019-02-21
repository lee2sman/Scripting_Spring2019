$(document).ready(function() {

  //this var is added in step 9
  // Let's set the AM and PM meridiem for 12 hour format instead of 24 hour time
  var meridiem = "AM";  // Default is AM

  function displayTime() {
	   var currentTime = new Date();
	   var hours = currentTime.getHours();
	   var minutes = currentTime.getMinutes();
  	 var seconds = currentTime.getSeconds();

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

     //added in Step 9
     // Convert from 24 hour to 12 hour format and keep track of the meridiem.
    if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }
    // 0 AM and 0 PM should read as 12
    if (hours === 0) {
        hours = 12;
    }


  // This gets a "handle" to the clock div in our HTML
  var clockDiv = document.getElementById('clock');

  // Then we set the text inside the clock div
  // to the hours, minutes, and seconds of the current time
  clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  }  //end of displayTime() function

  /* This section used in step 3 - 6
  // This runs the displayTime function the first time
  displayTime();
  */

  //runs once a second aka 1000 milliseconds, added in step 7
  setInterval(displayTime, 1000);



});
