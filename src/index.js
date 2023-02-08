"use strict";

let username = document.querySelector('#username'),
password = document.querySelector('#password'),
login = document.querySelector('#login');

   username.addEventListener('keyup', (e) => {

   if (e.target.value.trim().length) {
      e.target.style.outline = "3px solid green";
   } else {
      e.target.style.outline = "3px solid red";
   }
})

password.addEventListener('keyup', (e) => {

   if (e.target.value.trim().length > 0) {
      e.target.style.outline = "3px solid green";
   } else {
      e.target.style.outline = "3px solid red";
   }
})