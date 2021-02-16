let action = "click";
let speed = 500;

$(document).ready(function () {
  //
  $("li.q").on(action, function () {
    // Get next element with slide effect // select all other answers
    $(this).next().slideToggle(speed).siblings("li.a").slideUp();
    // Get image for active question
    let img = $(this).children("img");
    // Remove the 'rotate' class for all images except the active ones
    $("img").not(img).removeClass("rotate");
    // Toggle rotate class
    img.toggleClass("rotate");
  });
});
