/**
 * Created by lehtonen on 15-11-16.
 */
var load_instagram = function () {
    var url1="https://api.instagram.com/v1/tags/parkslope/media/recent?count=4&access_token=243826054.0b32219.12ebf32c60fb404681205712f0181693&callback=?&_=1318776175283";
    var url2="https://api.instagram.com/v1/users/self/feed?access_token=243826054.0b32219.12ebf32c60fb404681205712f0181693&callback=?&_=1318776175283"
    var isektionen_url2="https://api.instagram.com/v1/users/651514140/media/recent/?access_token=243826054.0b32219.12ebf32c60fb404681205712f0181693&callback=?"
    var isektionen_url="https://api.instagram.com/v1/users/651514140/media/recent/?client_id=c1d1a1cd83c14af9b9be59ac406280b0&callback=?"
    var number;


        // get the json file

        $.getJSON(isektionen_url,function(myjsonObject){
            // this is where we can loop through the results in the json object
                var picture_array = myjsonObject.data;

                // this is where we do what we want with the instagram pics,
                // -Elon; Changed to show 5 pictures in 1 row
                number = 0;
                while (number < 9) {
                        console.log('Go!');

                    var picture = picture_array[number];

                    var instagramImageUrl = picture.images.standard_resolution.url;
                    var instagramImageLink = picture.link;

                    var imageElement = "<img src=\"" + instagramImageUrl + "\">";

                    var imageLinkElement = "<a href=\"" + instagramImageLink + "\" alt=\"instagram image\">" + imageElement + "</a>";



                    var captionElement = "<p class=\"instagram-caption\">" + picture.caption.text + "</p>";

                    captionElement = ""


                    $(".instagram-pictures").append('<li class="instagram-picture">' + imageLinkElement + captionElement + '</li>')

                        //$(".instagram-pictures").append('<a href="' + picture_array[number].link + '" target="_blank"><img class="instagram-picture" id="' + number + '" src="' + picture_array[number].images.standard_resolution.url + '"></a>');
                   number++;
                }

                //-Jesper; Added mouseon and mouseoff functionallity to append the caption text
                $(".instagram-picture > img").hover(function(){
                    var picNumber = $(this).attr('id');
                    $("#caption > p").text(picture_array[picNumber].caption.text).show(300);
                });

/*                //-Jesper; Added a nice scroll when mouse leaves either the image or the caption-text
                $("#instagramPics").mouseleave(function(){
                    $("#caption > p").hide('slow');
                });*/
        });


};