

$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}
;/**
 * Created by lehtonen on 15-11-16.
 */
$(document).ready(function(){

    var url1="https://api.instagram.com/v1/tags/parkslope/media/recent?count=4&access_token=243826054.0b32219.12ebf32c60fb404681205712f0181693&callback=?&_=1318776175283";
    var url2="https://api.instagram.com/v1/users/self/feed?access_token=243826054.0b32219.12ebf32c60fb404681205712f0181693&callback=?&_=1318776175283"
    var isektionen_url2="https://api.instagram.com/v1/users/651514140/media/recent/?access_token=243826054.0b32219.12ebf32c60fb404681205712f0181693&callback=?"
    var isektionen_url="https://api.instagram.com/v1/users/651514140/media/recent/?client_id=c1d1a1cd83c14af9b9be59ac406280b0&callback=?"
    var number;


        // get the json file

        $.getJSON(isektionen_url,function(myjsonObject){
            // this is where we can loop through the results in the json object

                console.log(myjsonObject);
                var picture_array = myjsonObject.data;
                console.log(picture_array[0].images.low_resolution.url);

                // this is where we do what we want with the instagram pics,
                // -Elon; Changed to show 5 pictures in 1 row
                number = 0;
                while (number < 4) {
                        $("#first-row").append('<img class="instagram-picture" id="' + number + '" src="' + picture_array[number].images.standard_resolution.url + '">');
                   number++;
                }


                // -Jesper; Added mouseon and mouseoff functionallity to append the caption text
                $("#instagramPics > #first-row > img").hover(function(){
                    var picNumber = $(this).attr('id');
                    console.log("Mouse on picture! and with number: " + picNumber);
                    $("#caption > p").text(picture_array[picNumber].caption.text);
                }, function(){
                    console.log("Mouse out of picture!");
                    $("#caption > p").text('Håll musen över bilden för att se texten.');
                });
        });


});;/*global $*/


$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });

  if ($("#js-parallax-window").length) {
    parallax();
  }

});

;/**
 * Created by elonbrange on 15-11-10.
 */
$(document).ready(function() {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}
