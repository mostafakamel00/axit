$(document).ready(function () {
  "use strict";
  //nice scroll
  $("html").niceScroll({
    cursorwidth: 6,
    cursoropacitymin: 0.6,
    cursorcolor: "#ad5c09",
    cursorborder: "none",
    cursorborderradius: 4,
    autohidemode: "leave",
  });
  //scroll to top
  var scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1300) {
      scrollButton.show();
    } else {
      scrollButton.hide();
    }
  });
  scrollButton.click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
  $(window).scroll(function () {
    window.console.log($(".navbar").height());
    window.console.log($(window).scrollTop());
    var navbar = $(".navbar");
    if ($(window).scrollTop() >= $(".navbar").height()) {
      navbar.addClass("scrolled");
    } else {
      navbar.removeClass("scrolled");
    }
  });
  $(".switch li").hover(function () {
    $(this).addClass("select").siblings().removeClass("select");
    $(".tab-content > div").hide();
    $("." + $(this).data("class")).show();
  });
  // screen load
  $(window).on("load", function () {
    $(".load .spinner").fadeOut(5000, function () {
      $("body").css("overflow", "auto");
      $(this)
        .parent()
        .fadeOut(5000, function () {});
    });
  });
});
