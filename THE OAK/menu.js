// Get the hamburger icon and the menu
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

// Add an event listener to the hamburger icon
hamburger.addEventListener('click', function() {
    // Toggle the 'open' class on both the hamburger and the menu
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
});
