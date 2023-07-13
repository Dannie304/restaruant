document.addEventListener('DOMContentLoaded', function () {
    var reservationForm = document.getElementById('reservation-form');
    var submitButton = document.getElementById('submit-button');

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        var table = document.getElementById('table').value;
        var time = document.getElementById('time').value;
        var guests = document.getElementById('guests').value;
        var fullname = document.getElementById('fullname').value;
        var email = document.getElementById('email').value;

        // Perform reservation logic
        // Here, you would typically save the reservation data to a database or perform other necessary actions

        // Disable the form fields and change submit button text to "Reserved"
        disableFormFields();
        submitButton.textContent = 'Reserved';
        submitButton.classList.add('reserved');
    });

    function disableFormFields() {
        var formFields = reservationForm.elements;
        for (var i = 0; i < formFields.length; i++) {
            formFields[i].disabled = true;
        }
    }
});