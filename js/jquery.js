"use strict";

$(function () {
  //서치바 - 320~424 까지만 로고 가려지게
  $(".search_bar input").hide();
  $(".search_img").on("click", function () {
    $(".search_bar input").slideToggle(400);
    $("#logo").toggle(10);
  });

  //chips 클릭하면 클래스명 추가해서 css 바꾸기
  let mainChips = $(".chips_con .chips");
  //a버튼 누르면 거기에 클래스명 추가
  //그렇지않으면 다른 버튼에 클래스명 추가
  //실습했던거 보고 해보기
  $(".chips_con .chips").on("click", function () {
    $(".chips_con .chips").addClass("main_chips");
  });
});
