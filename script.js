$(function() {
  var carouselList = $("#picsCarousel ul");
  var intervalID = setInterval(changeSlide, 4000);
  // console.log("interval set");

  function changeSlide() {
    // console.log("changeSlide function started");
    carouselList.animate(
      {
        "marginLeft": "-800"
      }, 
      1000, 
      moveFirstSlide
    );
  }

  function moveFirstSlide() {
    // console.log("moveFirstSlide function started");
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);  
    carouselList.css(
      {
        "marginLeft": "0"
      }
    );
  }
});
