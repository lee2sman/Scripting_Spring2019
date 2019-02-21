/* THIS CODE USED IN STEPS 1 TO 10
$(document).ready(function() {
    $('button').click(function(){
        if ($('body').hasClass('black')) {
            $('body').removeClass('black').addClass('white');
        }
        else {
            $('body').removeClass('white').addClass('black');
        }
    });
});
*/


         /* from step 11 of tutorial */
$('#orb').click( function() {
        if ($(this).hasClass('sun')) {
            $(this).removeClass('sun').addClass('moon');
        } else {
            $(this).removeClass('moon').addClass('sun');
        }

        /* from step 12 of tutorial */
        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        } else {
            $('#sky').removeClass('night').addClass('day');
        }

        /* from step 13 of tutorial */
        if ($('#moonspot1').hasClass('visible')) {
            $('#moonspot1').removeClass('visible');
        } else {
            $('#moonspot1').addClass('visible');
        }
});
