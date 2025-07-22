document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var menu = document.querySelector('ul');
  
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('show');
      hamburger.classList.toggle('open');
      // console.log("first")
    });
  });
  