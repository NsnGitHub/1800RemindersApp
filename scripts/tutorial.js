$(document).ready(function () {
    $(".card").css({
      "width": "30%",
      "float": "left",
      "margin": "1.5rem"
    });
    $(".progress").css("margin-top", "3rem");
    $(".card").css("background-color", "lightgrey");
    $(".card-header").css({
      "font-size": "15pt",
      "background-color": "darkgrey"
    });
    $(".card-text").css("font-size", "18pt");
    $(".btn-primary").css({
      "background": "#6351ce",
      "border-color": "#6351ce"
    });
    $(".jumbotron").css({
      "width": "95%",
      "margin": "0px auto",
      "margin-top": "2rem",
      "margin-bottom": "2rem",
      "background-color": "lightgrey"
    });
  });

// object-fit polyfill run
objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));

jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
});

jarallax(document.querySelectorAll('.jarallax-keep-img'), {
    keepImg: true,
});