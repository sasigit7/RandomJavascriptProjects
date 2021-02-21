$(document).ready(function () {
  // Searchbar Handler
  let searchField = $("#query");
  let icon = $("#search-btn");

  // Focus Event Handler
  $(searchField).on("focus", function () {
    $(searchField).animate(
      {
        width: "100%",
      },
      400
    );
    $(icon).animate(
      {
        right: "10px",
      },
      400
    );
  });

  // Blur Event Handler
  $(searchField).on("blur", function () {
    if (searchField.val() == "") {
      $(searchField).animate(
        {
          width: "45%",
        },
        400,
        function () {}
      );
      $(icon).animate(
        {
          right: "360px",
        },
        400,
        function () {}
      );
    }
  });

  // Prevent the default behavior of the form 
  $('#search-form').submit(function () {
      e.preventDefault();
  })
});

function search() {
  // clear results
  $("#results").html("");
  $("#buttons").html("");

  // Get Form Input
  q = $("#query").val();

  // Run GET request on API endpoint
  $.get("https://www.googleapis.com/youtube/v3/search", {
    part: "snippet, id",
    q: q,
    type: "video",
    key: "AIzaSyBJsmz70govFcYczb3wJMb07-NUBhNLG-s"},
    function(data) {
        let nextPageToken = data.nextPageToken;
        let prevPageToken = data.prevPageToken;

        console.log(data);

        
    }
  );
}
