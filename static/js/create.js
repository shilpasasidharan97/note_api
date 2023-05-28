$(document).ready(function() {
    // Handle form submission
    $('#myForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        var formData = $(this).serialize();

        $.ajax({
        url: '/api/v1/notes/',
        type: 'post',
        data: formData,
        success: function(response) {
            alert("Successfully added")
            window.location.reload()
        },
        error: function(xhr, status, error) {
            // Handle the error response
            console.error(xhr.responseText);
            // Display an error message or take appropriate actions
        }
        });
    });
    });