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


};;/**
 * Created by MagnusForzelius on 2015-12-01.
 */
$(document).ready(function() {

  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
      //var uid = $(this).data('id');
      //modal-1 is the checkbox
      //insert html page with uid in modal-inner
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });

  $(".modal-trigger").on("click", function(e) {
    console.log('Hej!');
    //This part injects the html into the modal.
    $("#modal-content").html(this.nextElementSibling.innerHTML)
  });

});;$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });


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
;/**
 * Created by andreas on 17/01/16.
 */

// Create new chart from canvas elements

var industriellEkonomictx = document.getElementById("chart-industriell-ekonomi").getContext("2d");
var industriellEkonomiInternationellctx = document.getElementById("chart-industriell-ekonomi-internationell").getContext("2d");



industriellEkonomiChartData = [
    {
        value: 80,
        color: shadeBlendConvert(0.0,'#F9D026'),
        highlight: shadeBlendConvert(-0.1,'#F9D026'),
        label: "Teknik & och fyisk"
    },
    {
        value: 60,
        color: shadeBlendConvert(0.1,'#F9D026'),
        highlight: shadeBlendConvert(-0.1,'#F9D026'),
        label: "Matematik"
    },
    {
        value: 30,
        color: shadeBlendConvert(0.2,'#F9D026'),
        highlight: shadeBlendConvert(-0.1,'#F9D026'),
        label: "Industriell ekonomi & Management"
    },
    {
        value: 15,
        color: shadeBlendConvert(0.3,'#F9D026'),
        highlight:shadeBlendConvert(-0.1,'#F9D026'),
        label: "Ledarskap och kommunikation"
    },
    {
        value: 120,
        color: shadeBlendConvert(0.4,'#F9D026'),
        highlight: shadeBlendConvert(-0.1,'#F9D026'),
        label: "Masterprofil"
    }
]
industriellEkonomiInternationellChartData = [
    {
        value: 80,
        color: shadeBlendConvert(0.0,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Teknik & och fyisk"
    },
    {
        value: 60,
        color: shadeBlendConvert(0.05,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Matematik"
    },
    {
        value: 20,
        color: shadeBlendConvert(0.1,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Industriell ekonomi & Management"
    },
    {
        value: 10,
        color: shadeBlendConvert(0.15,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Ledarskap och kommunikation"
    },
    {
        value: 10,
        color: shadeBlendConvert(0.20,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Ledarskap och kommunikation"
    },
    {
        value: 120,
        color: shadeBlendConvert(0.25,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Masterprofil"
    }
]

// This is a function that creates shades of a color
// Found on stack overflow http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
// By Pimp Trizkit
function shadeBlendConvert(p, from, to) {
    if(typeof(p)!="number"||p<-1||p>1||typeof(from)!="string"||(from[0]!='r'&&from[0]!='#')||(typeof(to)!="string"&&typeof(to)!="undefined"))return null; //ErrorCheck
    if(!this.sbcRip)this.sbcRip=function(d){
        var l=d.length,RGB=new Object();
        if(l>9){
            d=d.split(",");
            if(d.length<3||d.length>4)return null;//ErrorCheck
            RGB[0]=i(d[0].slice(4)),RGB[1]=i(d[1]),RGB[2]=i(d[2]),RGB[3]=d[3]?parseFloat(d[3]):-1;
        }else{
            switch(l){case 8:case 6:case 3:case 2:case 1:return null;} //ErrorCheck
            if(l<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(l>4?d[4]+""+d[4]:""); //3 digit
            d=i(d.slice(1),16),RGB[0]=d>>16&255,RGB[1]=d>>8&255,RGB[2]=d&255,RGB[3]=l==9||l==5?r(((d>>24&255)/255)*10000)/10000:-1;
        }
        return RGB;}
    var i=parseInt,r=Math.round,h=from.length>9,h=typeof(to)=="string"?to.length>9?true:to=="c"?!h:false:h,b=p<0,p=b?p*-1:p,to=to&&to!="c"?to:b?"#000000":"#FFFFFF",f=sbcRip(from),t=sbcRip(to);
    if(!f||!t)return null; //ErrorCheck
    if(h)return "rgb("+r((t[0]-f[0])*p+f[0])+","+r((t[1]-f[1])*p+f[1])+","+r((t[2]-f[2])*p+f[2])+(f[3]<0&&t[3]<0?")":","+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*10000)/10000:t[3]<0?f[3]:t[3])+")");
    else return "#"+(0x100000000+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*255):t[3]>-1?r(t[3]*255):f[3]>-1?r(f[3]*255):255)*0x1000000+r((t[0]-f[0])*p+f[0])*0x10000+r((t[1]-f[1])*p+f[1])*0x100+r((t[2]-f[2])*p+f[2])).toString(16).slice(f[3]>-1||t[3]>-1?1:3);
}


var industriellEkonomiChart = new Chart(industriellEkonomictx).Doughnut(industriellEkonomiChartData);
var industriellEkonomiInternationellChart = new Chart(industriellEkonomiInternationellctx).Doughnut(industriellEkonomiInternationellChartData);;/**
 * Created by lehtonen on 15-11-24.
 */
/**
 * SmoothScroll
 * This helper script created by DWUser.com.  Copyright 2012 DWUser.com.
 * Dual-licensed under the GPL and MIT licenses.
 * All individual scripts remain property of their copyrighters.
 * Date: 10-Sep-2012
 * Version: 1.0.1
 */
if (!window['jQuery']) alert('The jQuery library must be included before the smoothscroll.js file.  The plugin will not work propery.');

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
 * jQuery.LocalScroll
 * Copyright (c) 2007-2010 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 05/31/2010
 * @author Ariel Flesler
 * @version 1.2.8b
 **/
;(function(b){function g(a,e,d){var h=e.hash.slice(1),f=document.getElementById(h)||document.getElementsByName(h)[0];if(f){a&&a.preventDefault();var c=b(d.target);if(!(d.lock&&c.is(":animated")||d.onBefore&&!1===d.onBefore(a,f,c))){d.stop&&c._scrollable().stop(!0);if(d.hash){var a=f.id==h?"id":"name",g=b("<a> </a>").attr(a,h).css({position:"absolute",top:b(window).scrollTop(),left:b(window).scrollLeft()});f[a]="";b("body").prepend(g);location=e.hash;g.remove();f[a]=h}c.scrollTo(f,d).trigger("notify.serialScroll",
    [f])}}}var i=location.href.replace(/#.*/,""),c=b.localScroll=function(a){b("body").localScroll(a)};c.defaults={duration:1E3,axis:"y",event:"click",stop:!0,target:window,reset:!0};c.hash=function(a){if(location.hash){a=b.extend({},c.defaults,a);a.hash=!1;if(a.reset){var e=a.duration;delete a.duration;b(a.target).scrollTo(0,a);a.duration=e}g(0,location,a)}};b.fn.localScroll=function(a){function e(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==i&&(!a.filter||b(this).is(a.filter))}
    a=b.extend({},c.defaults,a);return a.lazy?this.bind(a.event,function(d){var c=b([d.target,d.target.parentNode]).filter(e)[0];c&&g(d,c,a)}):this.find("a,area").filter(e).bind(a.event,function(b){g(b,this,a)}).end().end()}})(jQuery);

// Initialize all .smoothScroll links
jQuery(function($){ $.localScroll({filter:'.smoothScroll'}); });
