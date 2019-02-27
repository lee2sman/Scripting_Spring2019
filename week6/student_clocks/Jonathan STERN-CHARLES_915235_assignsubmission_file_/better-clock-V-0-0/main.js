$(document).ready(function() {

  var meridiemNY = "AM";

  function displayTimeNY() {
	   var currentTime = new Date();
	   var hoursNY = currentTime.getHours();
	   var minutes = currentTime.getMinutes();
  	 var seconds = currentTime.getSeconds();

     if (seconds < 10) {
          seconds = "0" + seconds;
     }

     if (minutes < 10) {
          minutes = "0" + minutes;
     }

     if (hoursNY < 10) {
          hoursNY = "0" + hoursNY;
     }

    if (hoursNY > 12) {
      hoursNY = hoursNY - 12;
      meridiemNY = "PM";
    }

    if (hoursNY === 0) {
        hoursNY = 12;
    }

  var clockDiv = document.getElementById('clockny');

  clockDiv.innerText = "New York" + "\n" + hoursNY + ":" + minutes + ":" + seconds + " " + meridiemNY;
  }

  setInterval(displayTimeNY, 1000);

  var meridiemLA = "AM";

  function displayTimeLA() {
	   var currentTime = new Date();
	   var hoursLA = currentTime.getHours();
     hoursLA = hoursLA + 23;
	   var minutes = currentTime.getMinutes();
  	 var seconds = currentTime.getSeconds();

     if (seconds < 10) {
          seconds = "0" + seconds;
     }

     if (minutes < 10) {
          minutes = "0" + minutes;
     }

     if (hoursLA < 10) {
          hoursLA = "0" + hoursLA;
     }

    if (hoursLA > 12) {
      hoursLA = hoursLA - 12;
      meridiemLA = "PM";
    }

    if (hoursLA === 0) {
        hoursLA = 12;
    }

  var clockDiv = document.getElementById('clockla');

  clockDiv.innerText = "Los Angeles" + "\n" + hoursLA + ":" + minutes + ":" + seconds + " " + meridiemLA;
  }

  setInterval(displayTimeLA, 1000);

  var meridiemTV = "AM";

  function displayTimeTV() {
     var currentTime = new Date();
     var hoursTV = currentTime.getHours();
     hoursTV= hoursTV + 7;
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();

     if (seconds < 10) {
          seconds = "0" + seconds;
     }

     if (minutes < 10) {
          minutes = "0" + minutes;
     }

     if (hoursTV < 10) {
          hoursTV = "0" + hoursTV;
     }

    if (hoursTV > 12) {
      hoursTV = hoursTV - 12;
      meridiemTV = "PM";
    }

    if (hoursTV === 0) {
        hoursTV = 12;
    }

  var clockDiv = document.getElementById('clocktelaviv');

  clockDiv.innerText = "Tel Aviv" + "\n" + hoursTV + ":" + minutes + ":" + seconds + " " + meridiemTV;
  }

  setInterval(displayTimeTV, 1000);

  var meridiemR = "AM";

  function displayTimeR() {
     var currentTime = new Date();
     var hoursR = currentTime.getHours();
     hoursR = hoursR + 2;
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();

     if (seconds < 10) {
          seconds = "0" + seconds;
     }

     if (minutes < 10) {
          minutes = "0" + minutes;
     }

     if (hoursR < 10) {
          hoursR = "0" + hoursR;
     }

    if (hoursR > 12) {
      hoursR = hoursR - 12;
      meridiemR = "PM";
    }

    if (hoursR === 0) {
        hoursR = 12;
    }

  var clockDiv = document.getElementById('clockrio');

  clockDiv.innerText = "Rio de Janeiro" + "\n" + hoursR + ":" + minutes + ":" + seconds + " " + meridiemR;
  }

  setInterval(displayTimeR, 1000);



});
