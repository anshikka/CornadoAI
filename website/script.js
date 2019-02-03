var sliderIndex = 1;
showSlides(sliderIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(sliderIndex += n);
}

function showSlides(n) {
  let slider = document.getElementsByClassName("slider");

  // for moving back and forth at ends of slider array
  if (n > slider.length) {
    sliderIndex = 1
  }
  if (n < 1) {
    sliderIndex = slider.length
  }

  // displaying slider
  for (i = 0; i < slider.length; i++) {
      slider[i].style.display = "none";
  }

  slider[sliderIndex-1].style.display = "block";
}
