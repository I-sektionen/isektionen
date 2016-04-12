/**
 * Created by andreas on 11/04/16.
 */

//This function takes the content for one interview and places it in the main container for displaying of content

$(document).ready(function() {

    var targetContainer =  $('#full-interview-container');

    $(".interview-link").click(function () {

        var interviewContent = $(this).parent().next().html();
        targetContainer.html("")
        targetContainer.html(interviewContent)

        //Scrolls browser window to the target container
        $("html, body").animate({ scrollTop: targetContainer.offset().top - 100 }, 1000);

    })
})