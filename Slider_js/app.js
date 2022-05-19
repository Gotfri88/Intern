let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {

  showSlides(slideIndex += n);
}

let points = document.querySelector(".point");
let dots = document.querySelectorAll('.dot')



points.addEventListener('click',
  function start(event) {
      let index = dots.indexOf(event.target);
      if (~index) {
      console.log(index)
    } 
});

function showSlides(n) {
    setInterval(function(){
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { 
          slideIndex = 1 
        }
        if (n < 1) {
          slideIndex = slides.length 
          }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      } ,2500)
};


function currentSlide(n) {
  showSlides(slideIndex = n);
}

