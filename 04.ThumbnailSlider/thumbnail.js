$(document).ready(function () {
  // declare variables
  let totalWidth = 0;
  let positions = new Array();

  $("#slides .slide").each(function (i) {
    // Get slider widths
    positions[i] = totalWidth;
    totalWidth += $(this).width();

    // check widths
    if (!$(this).width()) {
      alert("Please add a width to your images");
      return false;
    }
  });
  // set width
  $("#slides").width(totalWidth);

  // menu item click handler
  $("#menu ul li a").click(function (e, keepScroll) {
    // remove active class and add inactive
    $("li.product").removeClass("active").addClass("inactive");
    // add active class to parent
    $(this).parent().addClass("active");

    let pos = $(this).parent().prevAll(".product").length;

    $("#slides")
      .stop()
      .animate({ marginLeft: -positions[pos] + "px" }, 450);

    // prevent default
    e.preventDefault();

    // stopping the autoScroll
    if (!autoScroll) clearInterval(itvl);
  });

  // make first image active
  $("#menu ul li.product:first")
    .addClass("active")
    .siblings()
    .addClass("inactive");

  // auto scroll
  let current = 1;
  function autoScroll() {
    if (current == -1) return false;

    $("#menu ul li  a")
      .eq(current % $("#menu ul li a").length)
      .trigger("click", [true]);
    current++;
  }
  // duration for auto scroll
  let duration = 5;
  let itvl = setInterval(function () {
    autoScroll();
  }, duration * 1000);
});
