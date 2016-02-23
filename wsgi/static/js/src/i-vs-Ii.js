

$(function() {
    $( "#show-ii-info" ).click(function() {
        $( "#ii-info:hidden" ).show();
        $( "#i-info:visible").hide();
    });
});

$(function() {
    $( "#show-i-info" ).click(function() {
        $( "#i-info:hidden" ).show();
        $( "#ii-info:visible").hide();
    });
});