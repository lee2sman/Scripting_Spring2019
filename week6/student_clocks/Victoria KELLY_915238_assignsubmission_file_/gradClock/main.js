//W3 SCHOOLS
	$(document).ready(function() {
// date counting down to
var countDown = new Date("May 17, 2019 11:00:00").getTime();

// count down every 1 second
var x = setInterval(function() {

  // now: date and time
  var now = new Date().getTime();
    
  // distance between now and the count down date
  var distance = countDown - now;
    
  // time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  //output names
  document.getElementById("grad").innerHTML = days + " days, " + hours + " hours, "
  + minutes + " minutes, " + seconds + " seconds!";
    
  // when over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("grad").innerHTML = "CONGRATULATIONS";
  }
}, 1000);
});