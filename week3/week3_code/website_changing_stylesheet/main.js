$(document).ready(function() {


     var whichStylesheet = Math.round(Math.random()* 2);

     $('link').attr('href', 'css/style'+whichStylesheet+'.css');

 });
