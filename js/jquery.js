"use strict";

$(function () {
  //서치바 - 320~424 까지만 로고 가려지게
  $(".search_bar input").hide();
  $(".search_img").on("click", function () {
    $(".search_bar input").slideToggle(400);
    $("#logo").toggle(10);
  });
});
