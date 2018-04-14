'use strict';
var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getUTCDate(),
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.querySelector('.daymonth').innerHTML = day ;
document.querySelector('.year').innerHTML = months[month] + ", " + year;

function time() {
  var d = new Date(),
      s = d.getSeconds() * 6,
      m = d.getMinutes() * 6 + (s / 60),
      h = d.getHours() % 12 / 12 * 360 + (m / 12);

  document.querySelector('.day').innerHTML = days[d.getDay()] ;
}
time();

var modal = document.querySelector('.modal');
var btn = document.querySelector(".button__add");
var close = document.getElementsByClassName("modal__button")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <button add>, close the modal
close.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
