//notice how things are nested inside other things

// in plain text:

//Once the program loads
//   if you click #invest
//      fade in #hiddenText
//      and hide #invest button

//   if you click #solutionize
//      change the background image to images/disaster.jpg

//and here it is in code
$(document).ready(function() { //once the program loads
  $('#invest').click(function() { //if you click on invest button
    $('#hiddenText').fadeIn(); //then fade in the element with the id #hiddenText
    $('#invest').hide(); //and hide the button with the id name #invest
  });

  $('#solutionize').click(function(){ //if you click #solutionize
    $('body').css('background-image','url(images/disaster.jpg)'); //change background image of page
  })

});
