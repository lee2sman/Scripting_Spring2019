$(document).ready(function() {



  var meridiem = "AM";



  function displayTime() {
     var today = new Date();
     var countDownDate = new Date("Nov 3, 2020 12:00:00");
     var dd = today.getDate();
     var msUntil = countDownDate - today;
     var mm = today.getMonth()+1;
     var yyyy = today.getFullYear();
	   var currentTime = new Date();
	   var hours = currentTime.getHours();
	   var minutes = currentTime.getMinutes();
     var today = new Date();
     var dd = today.getDate();
     var mm = today.getMonth()+1;
     var yyyy = today.getYear()-100;





today = mm+'/'+dd+'/'+yyyy;

     if (minutes < 10) {
          minutes = "0" + minutes;
     }

     if (hours < 10) {
          hours = "0" + hours;
     }

    if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }

    if (hours === 0) {
        hours = 12;
    }



  var clockDiv = document.getElementById('clock');


  clockDiv.innerText = hours + ":" + minutes +" "+ meridiem + '\n' + today + '\n'+'\n' +'\n'+'\n'+ msUntil + '\n' + "Milliseconds until the next U.S Presidential Election";
  }




  setInterval(displayTime, 1000);



});
