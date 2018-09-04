/*************
testimonial section
**************/

//three dots
const nextNext = document.getElementById('next-next')
const next = document.getElementById('next');
const prev = document.getElementById('prev');

//individual testimonials
const testi1 = document.querySelector('.testi-1');
const testi2 = document.querySelector('.testi-2');
const testi3 = document.querySelector('.testi-3')

//testimonial parent container
const tests = document.querySelector('.tests');

let nextNextInt = window.setInterval(function() {
  //check for and remove second class
  if (tests.classList.contains('second')) {
    tests.classList.remove('second');

    //add the class which shows the third testimonial
    tests.classList.add('third');
  }

}, 4000)


let nextint = window.setInterval(function() {
  //check for and remove first class
  if (tests.classList.contains('first')) {
    tests.classList.remove('first');

    //add the class that shows the second testimonial
    tests.classList.add('second');
  }

}, 8000)

let prevint = window.setInterval(function() {
  //check for and remove third class
  if (tests.classList.contains('third')) {
    tests.classList.remove('third');

    //add the class that has the first testimonial
    tests.classList.add('first');
  }
}, 16000)

//middle dot click
next.addEventListener("click", function() {

  //check to see what class the container has, and remove old classes
  if (tests.classList.contains('first')) {
    tests.classList.remove('first');
  }

  if (tests.classList.contains('third')) {
    tests.classList.remove('third');
  }

  //clear the timing interval
  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);

  //add the second class to the container to cycle it through
  tests.classList.add('second');

})

//third dot click
nextNext.addEventListener("click", function() {


  if (tests.classList.contains('second')) {
    tests.classList.remove('second');
  }

  if (tests.classList.contains('first')) {
    tests.classList.remove('first')
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add('third');
})

//first dot click
prev.addEventListener("click", function() {

  if (tests.classList.contains('second')) {
    tests.classList.remove('second');
  }

  if (tests.classList.contains('third')) {
    tests.classList.remove('third');
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add('first');
})

////////////////// end of testimonial section
