$(document).ready(function() {

var padding;



function showTime(){
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var mins = currentTime.getMinutes();
  var secs = currentTime.getSeconds();
  var milis = currentTime.getMilliseconds();
var clockDiv = document.getElementById('clock3');




  if (secs < 10) {
      // Add the "0" digit to the front
      // so 9 becomes "09"
      secs = "0" + secs;
  }

  if (mins < 10) {
      // Add the "0" digit to the front
      // so 9 becomes "09"
      mins = "0" + mins;
  }

  if (hours < 10) {
      // Add the "0" digit to the front
      // so 9 becomes "09"
      hours = "0" + hours;
  }

  if (milis < 100) {
      // Add the "0" digit to the front
      // so 9 becomes "09"
      milis = "0" + milis;
  }

  $('#clock').css('height', (Math.floor((secs / 60) * 100)).toFixed(2) + "%");
  $('#clock').css('width', (Math.floor((milis / 1000) * 100)).toFixed(2) + "%");

  // document.getElementById('clock').setAttribute("style","width: secs");






clockDiv.innerText = hours + ":" + mins + ":" + secs ;
}



//
// function padItUp(){
// if (padding > 70){padding = padding - 0.1;}
// $("clockDiv").css({"padding-top": padding});
//
//
// }



setInterval(showTime, 10);
// setInterval(padItUp, 10);


showTime();
// padItUp();
});
