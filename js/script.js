$(".carouselmain").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1500: {
      items: 5,
    },
    2000: {
      items: 6,
    },
    2500: {
      items: 7,
    },
  },
});

$(".carouselmain2").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 2,
    },
    300: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1300: {
      items: 6,
    },
    2000: {
      items: 7,
    },
    2500: {
      items: 8,
    },
  },
});

var a = document.getElementById("aboutLine");
var ctx = a.getContext("2d");
ctx.beginPath();
ctx.moveTo(2, 2);
ctx.lineTo(2, 13);
ctx.stroke();
var b = document.getElementById("aboutLine2");
var ctx = b.getContext("2d");
ctx.beginPath();
ctx.moveTo(2, 2);
ctx.lineTo(2, 13);
ctx.stroke();
var c = document.getElementById("aboutLine3");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#FF0000";
ctx.beginPath();
ctx.moveTo(2, 2);
ctx.lineTo(2, 13);
ctx.stroke();
var d = document.getElementById("aboutLine4");
var ctx = d.getContext("2d");
ctx.beginPath();
ctx.moveTo(2, 2);
ctx.lineTo(2, 13);
ctx.stroke();
