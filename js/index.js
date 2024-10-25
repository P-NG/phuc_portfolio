const topButton = document.querySelector('.nav-button');

// Add a click event listener to the button
topButton.addEventListener('click', function() {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,  // Scroll to the top (0px from the top)
        behavior: 'smooth'  // Adds smooth scrolling animation
    });
});
