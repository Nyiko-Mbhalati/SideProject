let slideIndex = 1;
    showSlides(slideIndex);
    
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-container");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active status from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and add "active" to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto-slide feature
let autoSlideIndex = 1;
function autoSlides() {
    let slides = document.getElementsByClassName("carousel-container");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {autoSlideIndex = 1}

    slides[autoSlideIndex - 1].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[autoSlideIndex - 1].className += " active";

    setTimeout(autoSlides, 5000); // Change image every 5 seconds
}

autoSlides(); // Start the auto-slide


document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
});

document.getElementById("login").addEventListener("click", function()
{
    window.location.href = "Login.html";
})

document.getElementById("register").addEventListener("click", function()
{
    window.location.href = "Register.html";
})

function Logout()
{
    window.location.href = "Index.html";
    const clearUser = localStorage.removeItem('loggedInUser');
    clearUser;
}

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the user's name from localStorage
    const loggedInUser  = localStorage.getItem('loggedInUser ');

    // Check if a user is logged in
    if (loggedInUser ) {
        // Update the welcome message with the user's name
        document.getElementById('user-name').textContent = loggedInUser ;
    } else {
        // Handle the case where no user is logged in (optional)
        document.getElementById('user-name').textContent = "Guest";
    }
});

document.getElementById('newregister').addEventListener("click", function()
{
    window.location.href("New Register.html");
})