'use strict'

let rating;
let x = NaN;
let ratingFinal = document.querySelector('.rating-final');
const btnRate = document.querySelectorAll('.btn--rate');
const btnSubmit = document.querySelector('.btn--submit');
const step1 = document.getElementById('rating--step-1');
const step2 = document.getElementById('rating--step-2');

/* When clicked on rating make it orange until clicked on -just- another rating. And change rating score to it. */

for(let i=0; i < btnRate.length; i++) {
  btnRate[i].addEventListener('click', function() {
    console.log(i+1);
    /* If there is no rating, select clicked one. If there is already an selected rating, remove selectedRating class from it and give it to selected one. */
    if(x) {
      btnRate[x-1].classList.remove("selectedRating");
    }

    x = Number(this.textContent);
    btnRate[i].classList.add("selectedRating");
  });
}

/* When clicked on submit button, toggle steps hidden class */

btnSubmit.addEventListener('click', function() {
  if(x) {
    step1.classList.toggle("hidden");
    step2.classList.toggle("hidden");
    ratingFinal.textContent = x;
  }
});