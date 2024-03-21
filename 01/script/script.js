//왼쪽으로 슬라이드
// $(function () {
//   function nextani() {
//     $(".ban").animate({ marginLeft: "-1200px" }, 500, function () {
//       $(".ban").append($(".ban li:first"));
//       $(".ban").css("marginLeft", "0");
//     });
//   }
//   let a = setInterval(function () {
//     nextani();
//   }, 2000);
// });
//점멸효과(페이드 인아웃)
// $(function () {
//   $(".ban li:gt(0)").fadeOut();
//   //end()선택한요소 이전요소선택
//   function nextani() {
//     $(".ban li:first").fadeOut(500).next().fadeIn(500).end().appendTo(".ban");
//   }
//   let a = setInterval(function () {
//     nextani();
//   }, 2000);
// });
//위아래 슬라이드
$(function () {
  function nextani() {
    $(".ban").animate({ marginTop: "-300px" }, 500, function () {
      // $(".ban li").eq(0).appendTo(".ban");
      //$(".ban").append($(".ban li").eq(0));
      $(".ban").append($(".ban li:first"));
      $(".ban").css("marginTop", "0");
    });
  }
  let a = setInterval(function () {
    nextani();
  }, 2000);
});
