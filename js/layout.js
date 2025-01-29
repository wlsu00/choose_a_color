"use strict";

document.querySelector("#sec1MaBtn").onclick= function(){
    document.querySelector("#sec1_m").style.display = "flex"
    document.querySelector("#sec1_s").style.display = "none"
}
document.querySelector("#sec1StBtn").onclick= function(){
    document.querySelector("#sec1_m").style.display = "none"
    document.querySelector("#sec1_s").style.display = "flex"
}
document.querySelector("#sec2MaBtn").onclick= function(){
    document.querySelector("#sec2_m").style.display = "block"
    document.querySelector("#sec2_s").style.display = "none"
}
document.querySelector("#sec2StBtn").onclick= function(){
    document.querySelector("#sec2_m").style.display = "none"
    document.querySelector("#sec2_s").style.display = "block"
}
