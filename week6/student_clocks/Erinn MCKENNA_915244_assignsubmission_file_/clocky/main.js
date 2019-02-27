$(document).ready(function() {

  // date we're counting down to
  var countDownDateBad = new Date("Feb 27, 2019 18:40:00").getTime();

  var countDownDateGood = new Date("Mar 6, 2019 15:30:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    var now = new Date().getTime();

    //  distance between now and the count down dates
    var distance = countDownDateBad - now;

    var distanceGood = countDownDateGood - now;

    //  calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var daysGood = Math.floor(distanceGood / (1000 * 60 * 60 * 24));
    var hoursGood = Math.floor((distanceGood % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesGood = Math.floor((distanceGood % (1000 * 60 * 60)) / (1000 * 60));
    var secondsGood = Math.floor((distanceGood % (1000 * 60)) / 1000);


    document.getElementById("bad").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    document.getElementById("good").innerHTML = daysGood + "d " + hoursGood + "h "
    + minutesGood + "m " + secondsGood + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("bad").innerHTML = "by default you are now GOOD student";
    }
  }, 1000);

  $('#bad').hover(function(){
    $(this).html('6:40 PM');
  })

  $('#good').hover(function(){
    $(this).html('Wednesday February 6th 3:30 PM');
  })

});
