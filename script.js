$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

new Typed("#type-it", {
  strings: ["UI Developer", "Frontend Developer", "CSS Expert"],
  typeSpeed: 50,
  loop: true,
});

$(".px-4").tilt({
  glare: true,
  maxGlare: 0.2,
  maxTilt: 5,
});

$(".project-card").tilt({
  glare: true,
  maxGlare: 0.2,
  maxTilt: 3,
});
