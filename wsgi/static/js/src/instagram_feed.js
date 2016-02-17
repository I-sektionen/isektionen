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

                    var imageElement = "<img class=\"instagram-image\" src=\"" + instagramImageUrl + "\">";

                    var captionElement = "<div class=\"caption-wrapper\"><p class=\"instagram-caption\">" + picture.caption.text + "</p></div>";


                    $(".instagram-pictures").append('<li class="instagram-picture">' + imageElement + captionElement + '</li>')

                    number++;
                }

                //-Magnus; Added click functionality to show the caption text
                $(".instagram-image").click(function(){
                    $(this).next().addClass("caption-visible");
                });
                $(".caption-wrapper").click(function(){
                    $(this).removeClass("caption-visible");
                });

        });


};