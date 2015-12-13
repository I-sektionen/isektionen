$(".js-vertical-tab-content").hide();
$(".js-vertical-tab-content:first").show();

/* if in tab mode */

$(".js-vertical-tab").click(function(event) {
  event.preventDefault();

  /* Previous attempt to fix so the tabs from another section won't be hidden if info in another section should be shown.
  var currentlyActiveTab = $(".js-vertical-tab-content");
  if (("#"+currentlyActiveTab <= "tab6" && $(this).attr("rel") <= "tab6") || ("#"+currentlyActiveTab < "tab6" && $(this).attr("rel") < "tab6")) {
  $(".js-vertical-tab-content").hide();
  } */
  $(".js-vertical-tab-content").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).show();

  $(".js-vertical-tab").removeClass("is-active");
  $(this).addClass("is-active");

  $(".js-vertical-tab-accordion-heading").removeClass("is-active");
  $(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
});

/* if in accordion mode */

$(".js-vertical-tab-accordion-heading").click(function(event) {
  event.preventDefault();

  $(".js-vertical-tab-content").hide();
  var accordion_activeTab = $(this).attr("rel");
  $("#"+accordion_activeTab).show();

  $(".js-vertical-tab-accordion-heading").removeClass("is-active");
  $(this).addClass("is-active");

  $(".js-vertical-tab").removeClass("is-active");
  $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
});