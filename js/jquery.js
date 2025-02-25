"use strict";

$(function () {
  //📌서치바 - 320~424 까지만 로고 가려지게
  $(".search_bar input").hide();
  $(".search_img").on("click", function () {
    $(".search_bar input").slideToggle(400);
    // $("#logo").toggle(10);
  });

  if ($(window).width() < 425) {
    $(".search_img").on("click", function () {
      $("#logo").toggle(10);
    });
  }
  if (425 < $(window).width()) {
    $(".search_img").on("click", function () {
      $(".icons a:first-child").toggle(100);
    });
  }

  //📌앱다운로드 클릭하면 라이트박스 뜨기
  $(".light_box").hide();
  $(".app_btn").on("click", function () {
    $(".light_box").show(0.5);
  });

  //📌확인누르면 닫히기
  $(".light_box_btn").on("click", function () {
    $(".light_box").hide(0.5);
  });

  //📌chips 클릭하면 클래스명 추가해서 css 바꾸기

  //메이크업, 스타일링버튼
  $(".chips_con .chips").on("click", function (e) {
    $(".chips_con .chips").removeClass("main_chips");
    $(e.target).addClass("main_chips");
  });

  //계절버튼
  $(".chips_seoson .chips").on("click", function (e) {
    $(".chips_seoson .chips").removeClass("main_chips");
    $(e.target).addClass("main_chips");
  });

  //📌회원가입창
  //인증번호 전송을 누르면 인증번호 입력칸 보여주기
  $(".hidden_user").slideUp(300);

  $(".chk2").on("click", function () {
    $(".hidden_user").slideDown(300);
  });

  //빈칸으로 넘어가면 빨간테두리로 바꾸기
  $("input").on({
    focus: function (e) {
      $(e.target).css({
        border: "1px solid #d6d6d6",
      });
    },
    blur: function (e) {
      if ($(e.target).val().trim() === "") {
        $(e.target).css("border", "1px solid red");
        //에러메세지 뜨게하려했는데 중복확인버튼때문에 보류
        //$(e.target).parent("label").addClass("error");
      }
    },
  });
});
