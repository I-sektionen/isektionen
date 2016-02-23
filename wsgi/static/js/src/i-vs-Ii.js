
$(function() {
    $( 'div.program-selector a' ).on( 'click', function() {
        $( this ).parent().find( 'a.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
    });
});


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