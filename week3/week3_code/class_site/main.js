$(window).ready(function() {

   changeBG();

   setInterval(changeBG, 5000);

   function changeBG() {
     //console.log('bang');

     var num = Math.floor(Math.random()* 2);
     $('link').attr('href', 'css/style'+num+'.css');
   }
 });
