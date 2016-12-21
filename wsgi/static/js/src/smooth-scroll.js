/**
 * Created by axel on 2016-12-21.
 */

var $root = $('html, body');

function anchor(element) {
    var href = $.attr(element, 'href');

    console.log(href);
    $root.animate({
        scrollTop: $(href).offset().top - 100
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
};
