const fullname = document.getElementById("full-name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirm-password");

// ---------------------------------------------------------------------------------------

let users = [
    ['Sam', 'SammyD', 'sam@email.com',  '1234567890', '123456', '123456'],
    ['Joe', 'JoeDon', 'joe@email.com',  '9876543210', '987654', '987654'],
    ['Rose', 'Rosey', 'rose@email.com',  '5555555555', '555555', '555555'],
    ['Marry', 'MarryMe', 'marry@email.com',   '1111111111', '111111', '111111'],
    ['Peter', 'Porker', 'peter@email.com',   '2222222222', '222222', '222222'],
];

// Function to store the users array in local storage
function storeUsersInLocalStorage(users) {
    // Convert the users array to a JSON string
    const jsonUsers = JSON.stringify(users);
    
    // Store the JSON string in local storage with the key 'users'
    localStorage.setItem('users', jsonUsers);
}

// Store the users array in local storage
// storeUsersInLocalStorage(users);

// Optional: Log the stored users to verify
// console.log("Users stored in local storage:", localStorage.getItem('users'));


var table = document.getElementById("tablerecords").getElementsByTagName('tbody')[0];

// console.log(users);

document.addEventListener("DOMContentLoaded", function() {
    var table = document.getElementById("tablerecords");
    // Check if the table is found
    // console.log(table); 
    if (table) {
        var tbody = table.getElementsByTagName('tbody')[0];
        // Check if tbody is found
        // console.log(tbody); 
        if (tbody) {
            // Proceed with your code
            AddUser(tbody);
        } else {
            console.error("tbody not found");
        }
    } else {
        console.error("Table not found");
    }
});

// ---------------------------------------------------------------------------------------

function EmptyField() 
{
    if (fullname.value == "") {
        document.getElementById("full-name-error").style.visibility = "visible";
    }
    
    if (email.value == "") {
        document.getElementById("email-error").style.visibility = "visible";
    }
    
    if (username.value == "") {
        document.getElementById("username-error").style.visibility = "visible";
    }
    
    if (phonenumber.value == "") {
        document.getElementById("phone-number-error").style.visibility = "visible";
    }
    
    if (username.value == "") {
        document.getElementById("username-error").style.visibility = "visible";
    }
    
    if (password.value == "") {
        document.getElementById("password-error").style.visibility = "visible";
    }
    
    // if (confirmpassword.value == "") {
    //     document.getElementById("confirm-password-error").style.visibility = "visible";
    // }
}

function Reset()
{
    document.getElementById("full-name-error").style.visibility = "hidden";
    document.getElementById("username-error").style.visibility = "hidden";
    document.getElementById("email-error").style.visibility = "hidden";
    document.getElementById("phone-number-error").style.visibility = "hidden";
    document.getElementById("password-error").style.visibility = "hidden";
    document.getElementById("confirm-password-error").style.visibility = "hidden";
}

function AddUser() {
    var table = document.getElementById("tablerecords");
    for (let x = 0; x < users.length; ++x) {
        let row = table.insertRow(x);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        cell1.innerHTML = users[x][0];
        cell2.innerHTML = users[x][1];
        cell3.innerHTML = users[x][2];
        cell4.innerHTML = users[x][3];
        cell5.innerHTML = users[x][4];
        cell6.innerHTML = users[x][5];
    }
}

function checkFullname()
{
    const fullameInput = document.getElementById('full-name');
    errorMessage = document.getElementById('full-name-error')
    
    if (fullameInput !=  "") 
    {
        errorMessage.style.visibility = 'hidden';
    }
}

function checkUsername()
{
    const usernameInput = document.getElementById('username');
    errorMessage = document.getElementById('username-error')
    
    if (usernameInput !=  "") 
    {
        errorMessage.style.visibility = 'hidden';
    }
}

function checkEmail()
{
    const emailInput = document.getElementById('email');
    errorMessage = document.getElementById('email-error')
    
    if (emailInput !=  "") 
    {
        errorMessage.style.visibility = 'hidden';
    }
}

function checkCorrectFormat() 
{
    const phoneNumberInput = document.getElementById('phone-number');
    const errorMessage = document.getElementById('phone-number-error');
    
    // Check if the phone number starts with '+'
    if (!phoneNumberInput.value.startsWith('+')) {
        errorMessage.style.visibility = 'visible'; // Show the error message
    } else {
        errorMessage.style.visibility = 'hidden'; // Hide the error message
    }
}

function checkConfirmedPassword()
{
    const confirmedpassword = document.getElementById("confirm-password").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("confirm-password-error"); // Assuming you have an error message element

    if (password != confirmedpassword) {
        errorMessage.style.visibility = "visible"; // Show error message
    } else {
        errorMessage.style.visibility = "hidden"; // Hide error message
    } 
}

function checkPasswordLength() {
    const password = document.getElementById("password").value; // Assuming the input has an ID of 'password'
    const errorMessage = document.getElementById("password-error"); // Assuming you have an error message element

    if (password.length < 4) {
        errorMessage.style.visibility = "visible"; // Show error message
    } else {
        errorMessage.style.visibility = "hidden"; // Hide error message
    }
}

function wrongPassword()
{
    window.alert ("Passwords do not match. Please try again.");

}

function enterCorrectNumber()
{
    window.alert ("Incorrect phonenumber format. Please try again.")
}

document.addEventListener("DOMContentLoaded", function(){

    function AddNewUser () 
    {
        // Prevent the default form submission
        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
        });
    
        const confirmpasswordInput = document.getElementById("confirm-password").value;
        const passwordInput = document.getElementById("password").value;
        const phonenumberInput = document.getElementById("phone-number").value;


        const checkbox = document.getElementById("subscribe");

        if (fullname.value == "" && username.value  == "" && email.value  == "" && phonenumber.value  == "" && password.value  == "" && confirmpassword.value  == "") 
        {
            EmptyField();
            return;
        }
    
        // Check if the checkbox is checked
        if (!checkbox.checked) {
            // Show an alert or error message
            window.alert("Please confirm that the information provided is accurate by checking the box.");
            return; // Stop the registration process
        }

        if (confirmpasswordInput != passwordInput)
        {
            wrongPassword();
            return
        }

        if (!phonenumberInput.startsWith('+'))
        {
            enterCorrectNumber();
            return
        }

        if (passwordInput.length < 4)
        {
            window.alert("Password must contain at least 4 characters");
            return;
        }

        // Check if all required fields are filled
        if (fullname.value != "" && username.value != "" && email.value != "" && phonenumber.value != "" && password.value != "" && confirmpassword.value != "") 
        {
        
        // Check if the email already exists in the users array
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        const emailInput = document.getElementById('email').value;
    
        for (let i = 0; i < users.length; i++) {
            if (users[i][2] === emailInput) {
                userFound = true;
                window.alert("User with email: " + users[i][2] + " already exists. Please login.");
                // Reset()
                window.location.href = "Login.html";
                return;
                break; // Exit the loop once a match is found
            }
        }
        
        // Create a new user array with the input values
        let newUser  = [fullname.value, username.value, email.value, phonenumber.value, password.value, confirmpassword.value]; 
    
        // Add the new user to the users array
        users.push(newUser );
    
        // Store the updated users array in local storage
        localStorage.setItem('users', JSON.stringify(users));
    
        // Insert a new row into the table
        let table = document.getElementById("tablerecords").getElementsByTagName('tbody')[0];
        let row = table.insertRow(); // Create a new row
    
        // Insert new cells and assign values
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
    
        cell1.innerHTML = newUser [0]; // Full name
        cell2.innerHTML = newUser [1]; // Username
        cell3.innerHTML = newUser [2]; // Email
        cell4.innerHTML = newUser [3]; // Phone number
        cell5.innerHTML = newUser [4]; // Password
        cell6.innerHTML = newUser [5]; // Confirm password
    
        // Clear the input fields
        fullname.value = "";
        username.value = "";
        email.value = "";
        phonenumber.value = "";
        password.value = "";
        confirmpassword.value = "";
    
        Reset();
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('savedPassword');
        window.alert("You have been successfully registered.");
        console.log(users); // Log the updated users array
        window.location.href = "Login.html";
    
        } 
        
        else 
        {
            // Call EmptyField function to show error messages
            EmptyField();
        }
    }

        document.getElementById("Add").addEventListener("click", function() {
        console.log("Button was clicked!");
        AddNewUser();
        });
})



// Call AddRecords when the page loads
window.onload = function() {
    AddUser();
};
