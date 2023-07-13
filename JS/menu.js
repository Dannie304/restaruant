// Get the order button element
const orderButton = document.getElementById('order');

// Add a click event listener to the order button
orderButton.addEventListener('click', function () {
    // Check if any item quantity is greater than 0
    const itemQuantities = document.querySelectorAll('.item input[type="number"]');
    const drinkQuantities = document.querySelectorAll('.drink input[type="number"]');
    let isOrderPlaced = false;

    itemQuantities.forEach(function (item) {
        if (parseInt(item.value) > 0) {
            isOrderPlaced = true;
        }
    });

    drinkQuantities.forEach(function (drink) {
        if (parseInt(drink.value) > 0) {
            isOrderPlaced = true;
        }
    });

    // If order is placed, change the button text and style
    if (isOrderPlaced) {
        // Change the button text to a tick
        orderButton.innerHTML = '&#10004; ORDER PLACED';

        // Change the background color to green
        orderButton.style.backgroundColor = 'green';
    }
});