var toggleProgramInfo = function() {

    industriellEkonomiInterLink = $("#industriell-ekonomi-inter-link");
    industriellEkonomiLink = $( "#industriell-ekonomi-link" )
    industriellEkonomiInterInfo = $("#industriell-ekonomi-inter-info")
    industriellEkonomiInfo = $("#industriell-ekonomi-info")

industriellEkonomiInterLink.click(function() {
    industriellEkonomiInfo.addClass("no-show-left");
    industriellEkonomiInterInfo.removeClass("no-show-right");
    industriellEkonomiInterLink.addClass("active")
    industriellEkonomiLink.removeClass("active")
});

 industriellEkonomiLink.click(function() {

    industriellEkonomiInterInfo.addClass("no-show-right");
    industriellEkonomiInfo.removeClass("no-show-left");
    industriellEkonomiLink.addClass("active");
    industriellEkonomiInterLink.removeClass("active");
});

};