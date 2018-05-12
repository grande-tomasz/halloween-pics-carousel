$(function() {
  var carouselList = $("#picsCarousel ul");
  var slideWidth = $("#picsCarousel img").width();
  var slideChangeDuration = 1000;
  var picShowingDuration = 3000;

  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  lastItem.prependTo(carouselList);
  var intervalID = setInterval(function() {
    changeSlide("next");
  }, slideChangeDuration + picShowingDuration);

  $("#previousSlide").click(function() {
    restartInterval();
    changeSlide("previous");
  });

  $("#nextSlide").click(function() {
    restartInterval();
    changeSlide("next");
  });

  function restartInterval() {
    clearInterval(intervalID);
    intervalID = setInterval(function() {
      changeSlide("next");
    }, slideChangeDuration + picShowingDuration);
  }

  function changeSlide(direction) {
    var margin = -2 * slideWidth;
    if (direction === "previous") {
      margin = 0;
    }

    carouselList.animate(
      {
        marginLeft: margin
      },
      slideChangeDuration,
      function() {
        moveFirstSlide(direction);
      }
    );
  }

  function moveFirstSlide(direction) {
    if (direction === "previous") {
      lastItem = carouselList.find("li:last");
      lastItem.prependTo(carouselList);
    } else {
      firstItem = carouselList.find("li:first");
      firstItem.appendTo(carouselList);
    }
    carouselList.css({
      marginLeft: -slideWidth
    });
  }
});
