"use strict";

const like_btn = document.querySelectorAll(".like_btn");
const like_fill_btn = document.querySelectorAll(".like_fill_btn");

// 좋아요버튼
like_btn.forEach((btn) => {
  //빈하트->채운하트
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    this.style.display = "none";
    this.nextElementSibling.style.display = "block";
  });
});
like_fill_btn.forEach((btn) => {
  //채운하트->빈하트
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    this.style.display = "none";
    this.previousElementSibling.style.display = "block";
  });
});
