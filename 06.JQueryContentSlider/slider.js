$(document).ready(function () {
  // alert("Doc is loaded");

  // Set Options
  let speed = 500; // fade speed
  let autoSwitch = true; // auto slider options
  let autoSwitch_speed = 4000; // auto slider speed

  // Add initial active class
  $(".slide").first().addClass("active");

  // Hide all slides
  $(".slide").hide();

  // Show first slide
  $(".active").show();

  // Next handler
  $("#next").on("click", nextSlide);

  // Prev handler
  $("#prev").on("click", prevSlide);

  // Auto slider handler
  if (autoSwitch === true) {
    setInterval(nextSlide, autoSwitch_speed);
  }

  // Switch to next slide
  function nextSlide() {
    // alert("Next was clicked");
    $(".active").removeClass("active").addClass("oldActive");
    if ($(".oldActive").is(":last-child")) {
      $(".slide").first().addClass("active");
    } else {
      $(".oldActive").next().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  }

  // Switch to prev slide
  function prevSlide() {
    // alert("Prev was clicked");
    $(".active").removeClass("active").addClass("oldActive");
    if ($(".oldActive").is(":first-child")) {
      $(".slide").last().addClass("active");
    } else {
      $(".oldActive").prev().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  }
});
