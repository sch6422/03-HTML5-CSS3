$(function () {
  function nextani() {
    $(".ban").animate({ marginLeft: "-1200px" }, 500, function () {
      $(".ban").append($(".ban li:first"));
      $(".ban").css("marginLeft", "0");
    });
  }
  let a = setInterval(function () {
    nextani();
  }, 2000);
});
