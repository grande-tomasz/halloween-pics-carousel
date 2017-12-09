$(function() {
  var carouselList = $("#picsCarousel ul");
  var slideWidth = $('#picsCarousel img').width();
  var slideChangeDuration = 1000;
  var picShowingDuration = 3000;

  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  lastItem.prependTo(carouselList);
  var intervalID = setInterval(function() {changeSlide("next")}, slideChangeDuration+picShowingDuration);
  // console.log("interval set");

  $('#previousSlide').click(function() {
    // console.log("previousSlide function started");
    restartInterval();
    changeSlide("previous");
  });

  $('#nextSlide').click(function() {
    // console.log("nextSlide function started");
    restartInterval();
    changeSlide("next");
  });

  function restartInterval() {
    clearInterval(intervalID);
    intervalID = setInterval(function() {changeSlide("next")}, slideChangeDuration+picShowingDuration);
  }

  function changeSlide(direction) {
    // console.log("changeSlide function started");
    var margin = -2*slideWidth;
    if (direction === "previous") {
      margin = 0
    }

    carouselList.animate(
      {
        marginLeft: margin
      }, 
      slideChangeDuration, 
      function() {moveFirstSlide(direction)}      
    );
  }

  function moveFirstSlide(direction) {
    // console.log("moveFirstSlide function started");
    // lastItem.after(firstItem);
    if (direction === "previous") {
      lastItem = carouselList.find("li:last");
      lastItem.prependTo(carouselList);
    }
    else {
      firstItem = carouselList.find("li:first");
      firstItem.appendTo(carouselList);      
    }
    carouselList.css(
      {
        marginLeft: -slideWidth
      }
    );
  }
});
