/**
 * File Custom.js.
 *
*/

// Menu-toggle button

var $ = jQuery.noConflict();

$(document).ready(function() {
  $("button").on("click", function() {
    $("ul").slideToggle("slow");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('.site-header').addClass('black');
  } else {
    $('.site-header').removeClass('black');
  }
});

// full-screen available?

// if (
//   document.fullscreenEnabled ||
// 	document.webkitFullscreenEnabled ||
// 	document.mozFullScreenEnabled ||
// 	document.msFullscreenEnabled
// ) {

// image container
// var i = document.getElementById("image-banner");

// // click event handler
// i.onclick = function() {

// in full-screen?
// if (
//   document.fullscreenElement ||
// 		document.webkitFullscreenElement ||
// 		document.mozFullScreenElement ||
// 		document.msFullscreenElement
// ) {

// exit full-screen
//     if (document.exitFullscreen) {
//       document.exitFullscreen();
//     } else if (document.webkitExitFullscreen) {
//       document.webkitExitFullscreen();
//     } else if (document.mozCancelFullScreen) {
//       document.mozCancelFullScreen();
//     } else if (document.msExitFullscreen) {
//       document.msExitFullscreen();
//     }

//   }
// }
