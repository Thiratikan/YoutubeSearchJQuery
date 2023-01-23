//Searchbar Handle
$(function () {
  var searchField = $("#query");
  var icon = $(".search-btn");

  //Focus Event Handler
  $("searchField").on("focus", function () {
    $(this).animate(
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

  //Blur Event Handler
  $("searchField").on("blur", function () {
    $(this).animate(
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
});
