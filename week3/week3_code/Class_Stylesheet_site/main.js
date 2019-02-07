$(document).ready(function() {


  //list of everyone that turned in a stylesheet
  var students = ['Ana','Anthony','Danylo','Emmie','Emory','Jonathan','Joseph','Katherine','Keeshawn','Lee','Victor','Vlad','Wadiah','Zachary'];

  //pick a random number between 0 and students.length-1
  var num = Math.round(Math.random()* (students.length-1));

  var whichStudent = students[num]; //select a name

  //now select the link tag (used to find the stylesheet on our html page
  //and change its href attribute to be css/whichStylesheet.css, for example to 'css/lee.css'
  $('link').attr('href', 'css/'+whichStudent+'.css');

  //just for fun, let's have it say the student's name at the top of our index.html now
  //prepend means add before, so this finds the body tag and adds some html with the student name before it
  $('body').prepend("<h2>"+whichStudent+" presents</h2>");
 });
