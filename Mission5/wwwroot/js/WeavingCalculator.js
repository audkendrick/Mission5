
// Set up 2nd page 
$(document).ready(function () {
    // Handle calculate button click
    $('#calculateBtn').click(function () {
        // Get the number of hours from input
        var hours = parseFloat($('#hours').val());
        var hourlyRate = parseFloat($('#rate').val());


        // Ensure hours is a positive number
        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a valid number of hours.");
            return;
        }

        // Get the hourly rate (hardcoded as 50 in this case)
        var hourlyRate = $('#rate').val();

        // Calculate the total price
        var totalPrice = hours * hourlyRate;

        // Display the total price in the output box
        $('#totalPrice').text(totalPrice); // Rounded to 2 decimal places
    });
});

