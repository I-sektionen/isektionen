/**
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
    $(".modal-content").html(this.nextElementSibling.innerHTML)
  });

});