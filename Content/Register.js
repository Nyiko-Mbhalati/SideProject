document.getElementById("Reset").addEventListener("click", function() {
    console.log("Button was clicked!");
    Reset();
});

// Step 1: Retrieve the array from local storage
const storedUsers = JSON.parse(localStorage.getItem('users')) || []; // Default to an empty array if no users are found

// Step 2: Log the array to the console
// console.log(storedUsers);

// Optional: If you want to display each user in a more readable format
// storedUsers.forEach((user, index) => {
//     console.log(`User  ${index + 1}:`, user);
// });





