"use strict";

//📀메인 sec1
const sec1_m = document.querySelector("#mabtn_sec1");
const sec1_s = document.querySelector("#stbtn_sec1");

//베스트-메이크업 버튼
sec1_m.onclick = function makeupTap1(e) {
  e.preventDefault();
  document.querySelector("#sec1_m").style.display = "flex";
  document.querySelector("#sec1_s").style.display = "none";
  document.querySelector(".more_wrap > a:first-child").className = "on";
  document.querySelector(".more_wrap > a:last-child").className = "";
};
//베스트-스타일링 버튼
sec1_s.onclick = function makeupTap1(e) {
  e.preventDefault();
  document.querySelector("#sec1_m").style.display = "none";
  document.querySelector("#sec1_s").style.display = "flex";
  document.querySelector(".more_wrap > a:first-child").className = "";
  document.querySelector(".more_wrap > a:last-child").className = "on";
};

//📀메인 sec2
const sec2_m = document.getElementById("mabtn_sec2");
const sec2_s = document.getElementById("stbtn_sec2");

//커뮤니티-메이크업 버튼 🎈더보기 눌렀을때 서브 커뮤니티 ms가 html1개임
sec2_m.onclick = function makeupTap2(e) {
  e.preventDefault();
  document.querySelector("#sec2_m").style.display = "block";
  document.querySelector("#sec2_s").style.display = "none";
  document.querySelector(".right_table .more_wrap > a:first-child").className =
    "on";
  document.querySelector(".right_table .more_wrap > a:last-child").className =
    "";
};
//커뮤니티-스타일링 버튼
sec2_s.onclick = function styleTap2(e) {
  e.preventDefault();
  document.querySelector("#sec2_m").style.display = "none";
  document.querySelector("#sec2_s").style.display = "block";
  document.querySelector(".right_table .more_wrap > a:first-child").className =
    "";
  document.querySelector(".right_table .more_wrap > a:last-child").className =
    "on";
};
//📀메인 sec4 🎈여기서부터 모어뷰 랩 수정하기 on < 서브사이트 아직 안만들었음
//계절칩
const sec4_s = document.querySelector("#schip_sec4");
const sec4_m = document.querySelector("#mchip_sec4");
const sec4_f = document.querySelector("#fchip_sec4");
const sec4_w = document.querySelector("#wchip_sec4");

sec4_s.onclick = function sec4_chip(e) {
  e.preventDefault();
  document.querySelector("#sec4_spring").style.display = "flex";
  document.querySelector("#sec4_summer").style.display = "none";
  document.querySelector("#sec4_fall").style.display = "none";
  document.querySelector("#sec4_winter").style.display = "none";
  document.querySelector(".more_wrap > a:first-child").className = "on";
  document.querySelector(".more_wrap > a:nth-child(2)").className = "";
  document.querySelector(".more_wrap > a:nth-child(3)").className = "";
  document.querySelector(".more_wrap > a:last-child").className = "";
};
sec4_m.onclick = function sec4_chip(e) {
  e.preventDefault();
  document.querySelector("#sec4_spring").style.display = "none";
  document.querySelector("#sec4_summer").style.display = "flex";
  document.querySelector("#sec4_fall").style.display = "none";
  document.querySelector("#sec4_winter").style.display = "none";
  document.querySelector(".more_wrap > a:first-child").className = "";
  document.querySelector(".more_wrap > a:nth-child(2)").className = "on";
  document.querySelector(".more_wrap > a:nth-child(3)").className = "";
  document.querySelector(".more_wrap > a:last-child").className = "";
};
sec4_f.onclick = function sec4_chip(e) {
  e.preventDefault();
  document.querySelector("#sec4_spring").style.display = "none";
  document.querySelector("#sec4_summer").style.display = "none";
  document.querySelector("#sec4_fall").style.display = "flex";
  document.querySelector("#sec4_winter").style.display = "none";
  document.querySelector(".more_wrap > a:first-child").className = "";
  document.querySelector(".more_wrap > a:nth-child(2)").className = "";
  document.querySelector(".more_wrap > a:nth-child(3)").className = "on";
  document.querySelector(".more_wrap > a:last-child").className = "";
};
sec4_w.onclick = function sec4_chip(e) {
  e.preventDefault();
  document.querySelector("#sec4_spring").style.display = "none";
  document.querySelector("#sec4_summer").style.display = "none";
  document.querySelector("#sec4_fall").style.display = "none";
  document.querySelector("#sec4_winter").style.display = "flex";
  document.querySelector(".more_wrap > a:first-child").className = "";
  document.querySelector(".more_wrap > a:nth-child(2)").className = "";
  document.querySelector(".more_wrap > a:nth-child(3)").className = "";
  document.querySelector(".more_wrap > a:last-child").className = "on";
};

//📀메인 sec5
//계절칩
const sec5_s = document.querySelector("#schip_sec5");
const sec5_m = document.querySelector("#mchip_sec5");
const sec5_f = document.querySelector("#fchip_sec5");
const sec5_w = document.querySelector("#wchip_sec5");

sec5_s.onclick = function sec5_chip(e) {
  e.preventDefault();
  document.querySelector("#sec5_spring").style.display = "flex";
  document.querySelector("#sec5_summer").style.display = "none";
  document.querySelector("#sec5_fall").style.display = "none";
  document.querySelector("#sec5_winter").style.display = "none";
  document.querySelector(".more_wrap > a:first-child").className = "on";
  document.querySelector(".more_wrap > a:last-child").className = "";
};
sec5_m.onclick = function sec5_chip(e) {
  e.preventDefault();
  document.querySelector("#sec5_spring").style.display = "none";
  document.querySelector("#sec5_summer").style.display = "flex";
  document.querySelector("#sec5_fall").style.display = "none";
  document.querySelector("#sec5_winter").style.display = "none";
  document.querySelector(".more_wrap > a:first-child").className = "on";
  document.querySelector(".more_wrap > a:last-child").className = "";
};
sec5_f.onclick = function sec5_chip(e) {
  e.preventDefault();
  document.querySelector("#sec5_spring").style.display = "none";
  document.querySelector("#sec5_summer").style.display = "none";
  document.querySelector("#sec5_fall").style.display = "flex";
  document.querySelector("#sec5_winter").style.display = "none";
  document.querySelector(".more_wrap > a:first-child").className = "on";
  document.querySelector(".more_wrap > a:last-child").className = "";
};
sec5_w.onclick = function sec5_chip(e) {
  e.preventDefault();
  document.querySelector("#sec5_spring").style.display = "none";
  document.querySelector("#sec5_summer").style.display = "none";
  document.querySelector("#sec5_fall").style.display = "none";
  document.querySelector("#sec5_winter").style.display = "flex";
  document.querySelector(".more_wrap > a:first-child").className = "on";
  document.querySelector(".more_wrap > a:last-child").className = "";
};
