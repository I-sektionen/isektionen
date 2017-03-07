$(document).ready(function() {

    var fadeInElements = $('.fade-in-element');
    $(fadeInElements).addClass('fade-element-hide');

    $(window).scroll(function() {

        fadeInElements.each(function () {

            if ($(this).length > 0) {
                var elementTopToPageTop = $(this).offset().top;
                var windowTopToPageTop = $(window).scrollTop();
                var windowInnerHeight = window.innerHeight;
                var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
                var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
                var distanceFromBottomToAppear = 100;

                if (elementTopToWindowBottom > distanceFromBottomToAppear) {
                    $(this).addClass('fade-element-show');
                }
                else if (elementTopToWindowBottom < 0) {
                    $(this).removeClass('fade-element-show');
                    $(this).addClass('fade-element-hide');
                }
            }
        });

    });

});
