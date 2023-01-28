var responsiveSlider = function () {
  var slider = document.getElementById("new-products-banner-container");
  var slideList = document.getElementById("new-products-banner-wrapper");

  var count = 1;
  var sliderWidth = slider.offsetWidth;
  var items = slideList.querySelectorAll("li").length;

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  setInterval(function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  }, 5000);
};

window.onload = function () {
  responsiveSlider();
};
