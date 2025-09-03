// Sticky header on scroll
$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

// Typed.js effect
new Typed("#type-it", {
  strings: ["UI Developer", "Frontend Developer", "CSS Expert"],
  typeSpeed: 50,
  loop: true,
});

// VanillaTilt init (instead of jQuery .tilt)
VanillaTilt.init(document.querySelectorAll(".px-4"), {
  glare: true,
  "max-glare": 0.2,
  max: 5,
});

VanillaTilt.init(document.querySelectorAll(".project-card"), {
  glare: true,
  "max-glare": 0.2,
  max: 3,
});
