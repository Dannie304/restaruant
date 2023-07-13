// Function to handle form submission
function loginFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    var username = document.querySelector('.input-field#user').value;
    var password = document.querySelector('.input-field#password').value;

    // Perform validation
    if (username === '' || password === '') {
        alert('Please enter your username and password.');
        return;
    }

    // Retrieve the stored user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Perform login verification
    if (userData && userData.username === username && userData.password === password) {
        // Show a success message with a green tick
        showMessage('Login successful!', 'success');

        // Redirect to the homepage after a short delay
        setTimeout(() => {
            window.location.href = 'homepage.html';
        }, 1500);
    } else {
        // Show an error message
        showMessage('Invalid username or password. Please try again.', 'error');
    }
}

// Add event listener to the form submit button
var loginForm = document.querySelector('.form');
loginForm.addEventListener('submit', loginFormSubmit);

// Function to display a message with a specified type
function showMessage(message, type) {
    const messageElement = document.querySelector('.message');
    messageElement.textContent = message;
    messageElement.classList.add(type);

    // Remove the message after 3 seconds
    setTimeout(() => {
        messageElement.textContent = '';
        messageElement.classList.remove(type);
    }, 3000);
}
