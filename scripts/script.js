// let quoteIndex = Math.floor(Math.random() * 10);
// let quotes = document.getElementsByClassName("quote-text");

// showQuote();

// function showQuote() {
//   let i;
//   for (i = 0; i < quotes.length; i++) {
//     quotes[i].style.display = "none";
//   }
//   quoteIndex++;
//   if (quoteIndex > quotes.length) {quoteIndex = 1}
//   quotes[quoteIndex-1].style.display = "flex";
//   setTimeout(showQuote, 3000);
// }
let slides = document.getElementsByClassName("quote-text");
let slideIndex = Math.floor(Math.random() * slides.length);

showSlides(slideIndex);
var timeout
function resume() {
    automatic()
    document.getElementById("pause").style.display = "flex";
    document.getElementById("resume").style.display = "none";
}
function pause() {
    clearTimeout(timeout)
    document.getElementById("pause").style.display = "none";
    document.getElementById("resume").style.display = "flex";
}

function showSlides(n) {
  let i;
  if (n >=slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = 0}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
}

function automatic() {
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) {slideIndex = 0}
    showSlides(slideIndex)
    timeout = setTimeout(automatic, 4000)
}

automatic()




