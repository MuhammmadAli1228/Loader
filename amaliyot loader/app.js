"use strict";


document.addEventListener('DOMContentLoaded', () => {
  const ring = document.querySelector('.ring')
  setTimeout(function () {
    ring.style.opacity = '0';
    setTimeout(function () {
      ring.style.display = 'none'
    }, 500)
  }, 5000)


})