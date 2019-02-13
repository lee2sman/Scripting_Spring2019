$(document).ready(function() {

  //pick a number 0, 1 or 2 since I only have 3 stylesheets
     var whichStylesheet = Math.round(Math.random()* 2);

  //select the link tag on the html page, and change its attribute href to 'css/style'+num+'.css'
     $('link').attr('href', 'css/style'+num+'.css');

 });
