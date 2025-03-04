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

document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('email');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // Retrieve the email from local storage if it exists
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail; // Set the email input value
        rememberMeCheckbox.checked = true; // Check the checkbox
    }

    // Prevent the default form submission
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
    });

    // Save the email to local storage if the checkbox is checked
    rememberMeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem('savedEmail', emailInput.value);
        } else {
            localStorage.removeItem('savedEmail');
        }
    });
});

// Retrieve the email from local storage
const savedEmail = localStorage.getItem('savedEmail');
if (savedEmail) {
    console.log("Saved Email:", savedEmail);
} else {
    // console.log("No saved email found.");
}

const savedPassword = localStorage.getItem('savedPassword');
if (savedPassword) {
    console.log("Saved Email:", savedPassword);
} else {
    // console.log("No saved password found.");
}

document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // Retrieve the email and password from local storage if they exist
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');

    if (savedEmail) {
        emailInput.value = savedEmail; // Set the email input value
        rememberMeCheckbox.checked = true; // Check the checkbox
    }

    if (savedPassword) {
        passwordInput.value = savedPassword; // Set the password input value
    }

    // Prevent the default form submission
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        LoginUser (); // Call your login function
    });

    // Save the email and password to local storage if the checkbox is checked
    rememberMeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem('savedEmail', emailInput.value);
            localStorage.setItem('savedPassword', passwordInput.value); // Save the password
        } else {
            localStorage.removeItem('savedEmail');
            localStorage.removeItem('savedPassword'); // Remove the password
        }
    });
});

function LoginUser () {
    // Prevent the default form submission
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
    });
    
    // Retrieve the users array from local storage
    const users = JSON.parse(localStorage.getItem('users')) || []; // Default to an empty array if no users are found
    
    // Get the email and password input values
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    
    // Check if the email and password match any user in the users array
    let userFound = false;  
    
    for (let i = 0; i < users.length; i++) {
        if (users[i][2] === emailInput && users[i][4] === passwordInput) {
            userFound = true;
            window.alert("Login successful! Welcome, " + users[i][0] + "!");
            
            // Store the user's name in localStorage
            localStorage.setItem('loggedInUser ', users[i][0]);
            
            window.location.href = "Bulletin.html";
            break; // Exit the loop once a match is found
        }
    }

    if (!userFound) {
        window.alert("Invalid email or password. Please try again.");
    }
}

function clearInputs()
{
    const email =  document.getElementById('email');
    const password = document.getElementById('password');

    email.value =  '';
    password.value = '';

    localStorage.removeItem('savedEmail');
    localStorage.removeItem('savedPassword');
}

function storeArrayInLocalStorage(key, users) {
    // Convert the array to a JSON string
    const storedUsers = JSON.stringify(users);
    
    // Store the JSON string in local storage with the specified key
    localStorage.setItem(key, storedUsers);
}

// Step 1: Retrieve the array from local storage
const storedUsers = JSON.parse(localStorage.getItem('users')) || []; // Default to an empty array if no users are found

// Step 2: Log the array to the console
// console.log(storedUsers);

// Optional: If you want to display each user in a more readable format
// storedUsers.forEach((user, index) => {
//     console.log(`User  ${index + 1}:`, user);
// });




// Function to open the modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Confirm button action
document.getElementById("confirmBtn").onclick = function() {
    // Execute the code for the confirm action
    console.log("Confirmed!");
    closeModal(); // Close the modal
};

// Cancel button action
document.getElementById("cancelBtn").onclick = function() {
    // Execute the code for the cancel action
    console.log("Cancelled!");
    closeModal(); // Close the modal
};

document.getElementById("deregisterBtn").onclick = function()
{
    localStorage.removeItem('users', JSON.stringify(users));
    window.location.href = "Index.html"
}


document.getElementById("delete").addEventListener("click", function() {
    // Get the input values
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    
    // Check if the inputs are empty
    if (emailInput === "" || passwordInput === "") {
        alert("Please fill in both email and password.");
        return; // Exit the function
    }
    
    // Retrieve the users array from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find the index of the user in the array
    const userIndex = users.findIndex(user => user[2] === emailInput && user[4] === passwordInput);
    
    if (userIndex !== -1) {
        // User found, ask for confirmation
        const confirmDeregistration = confirm("Are you sure you want to deregister? This action cannot be undone.");
        
        if (confirmDeregistration) {
            // Remove the user from the array
            users.splice(userIndex, 1);
            
            // Update local storage
            localStorage.setItem('users', JSON.stringify(users));
            
            alert("You have been successfully deregistered.");
            // Optionally, redirect the user or clear the input fields
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
            
            // Step 1: Retrieve the array from local storage
            const storedUsers = JSON.parse(localStorage.getItem('users')) || []; // Default to an           empty array if no users are found
            
            // Step 2: Log the array to the console
            // console.log(storedUsers);
            
            // Optional: If you want to display each user in a more readable format
            // storedUsers.forEach((user, index) => {
            //     console.log(`User  ${index + 1}:`, user);
            // });
        }
    }   
    else {
        alert("Invalid email or password. Please try again.");
    }
});

function getHelp()
{
    window.alert("Check the console by inspecting the webpage  to see the array of users. You can do this by right clicking your mouse then clicking the Inspect option or pressing the F12 key on your keyboard.");
    console.clear();

}

document.addEventListener("DOMContentLoaded", function() {
    const getHelpLink = document.getElementById('getHelpLink');

    getHelpLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Retrieve the users array from local storage
        const users = JSON.parse(localStorage.getItem('users')) || []; // Default to an empty array if no users are found

        const specificEmail = document.getElementById('email').value // Replace with the email you want to find
        const user = users.find(u => u[2] === specificEmail); // Assuming the email is at index 2

        if (user) {
        console.log("User  Password:", user[4]); // Log the user's email to the console
        } else {
        console.log("User  not found.");
        }
    });
});

// ------------------------------------------------------------------------------------

// function ChangeHomePage()
// {
//     const welcomeParagraph = document.getElementById("welcome-paragraph");
//     welcomeParagraph.style.display = "none";

//     const selection = document.getElementById("page-selection");
//     selection.style.display = "none";


//     const heading = document.getElementById("welcome-heading");
//     heading.textContent = "Welcome, " + users[i][0] + "!";

//     const bulletin = document.getElementById("bulletin");
//     bulletin.style.visibility = "visible";
//     bulletin.style.display = "block";
// }

// Example of opening the modal
// You can call this function when you need to show the modal
// openModal();

// function deleteUser()
// {
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     const emailInput = document.getElementById('email').value;
//     const passwordInput = document.getElementById('password').value;

//     for (let i = 0; i < users.length; i++) {
//         if (users[i][2] === emailInput.value && users[i][4] === passwordInput.value) {

//             openModal();
//             userFound = true;
//             window.alert("Are you sure?");
//             Reset()
//             window.location.href = "Index.html";
//             break; // Exit the loop once a match is found
//         }
//     }
// }
// document.addEventListener("DOMContentLoaded", function()
// {
//     const signInButton = document.getElementById('signInButton');

//     signInButton.addEventListener('click', function()
//     {

//         const email =  document.querySelector('email').value;
//         const password =  document.querySelector('password').value;

//         console.log("email: " + email);
//         console.log("Password: " + password);
//     })
// })

// document.getElementById("signInButton").addEventListener("click", function() {
//     LoginUser();
// });