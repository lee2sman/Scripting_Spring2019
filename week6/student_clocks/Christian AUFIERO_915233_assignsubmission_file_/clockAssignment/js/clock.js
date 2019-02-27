$(document).ready( function() {

    // With this function we will assemble our clock,
    // calling up whole date and then hours, minutes,
    // and seconds individually.

      //7,590,000,000
    function displayTime() {
        var currentTime = new Date();
        var monthsTrack = currentTime.getMonth();
        var years = 7.59 - (currentTime.getFullYear()*.000000001);
        var months = 11 - currentTime.getMonth();
        var days = 31 - currentTime.getDate();
        var hours = 24 - currentTime.getHours();
        var minutes = 60 - currentTime.getMinutes();
        var seconds = 60 - currentTime.getSeconds();


        // Let's set the AM and PM meridiem and
        // 12-hour format
        var meridiem = "AM";  // Default is AM

        // If hours is greater than 12
        if (hours > 12) {
          //  hours = hours - 12; // Convert to 12-hour format
            //meridiem = "PM"; // Keep track of the meridiem
        }
        // 0 AM and 0 PM should read as 12
        if (hours === 0) {
            hours = 24;
        }

        //31 months: jan,mar,may,jul,aug,oct,dec
        //30 months: apr,jun,sep,nov
        //28 month: feb


    if(monthsTrack == 1){
        days -= 3;
    }else if(monthsTrack == 0||monthsTrack == 2||monthsTrack == 4||monthsTrack == 6
    ||monthsTrack == 7||monthsTrack == 9||monthsTrack == 11){
      days -= 1;
    }

      /*  if(monthsTrack === 1){ //january
          days -= 31;
        }else if(monthsTrack === 2){ //february
          days -= 59;
        }else if(monthsTrack === 3){ //march
          days -= 90;
        }else if(monthsTrack === 4){ //april
          days -= 120;
        }else if(monthsTrack === 5){ //may
          days -= 151;
        }else if(monthsTrack === 6){ //june
          days -= 181;
        }else if(monthsTrack === 7){ //july
          days -= 212;
        }else if(monthsTrack === 8){ //august
          days -= 243;
        }else if(monthsTrack === 9){ //september
          days -= 273;
        }else if(monthsTrack === 10){ //october
          days -= 304;
        }else if(monthsTrack === 11){ //novmber
          days -= 334;
        }*/


        // This gets a "handle" to the clock div in our HTML
        var clockDiv = document.getElementById('clock');
        var yearDiv = document.getElementById('year');

        // Then we set the text inside the clock div
        // to the hours, minutes, and seconds of the current time
        yearDiv.innerText = years + " BILLION YEARS"
        clockDiv.innerText = months + " months  " + days + " days  " + hours + " hours  " + minutes + " minutes  " + seconds + " seconds  ";
    }

    // This runs the displayTime function the first time
    displayTime();

    // This makes our clock 'tick' by repeatedly
    // running the displayTime function every second.
    setInterval(displayTime, 1000);

});
