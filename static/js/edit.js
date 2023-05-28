$(document).ready(function () {
    var pk = $("#pk").val()
    var url = '/api/v1/notes/' + pk + '/';
      $('#myForm').submit(function(event) {
          event.preventDefault(); // Prevent the form from submitting normally
          var formData = $(this).serialize();
          $.ajax({
              url: url,
              type: 'PUT',
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
  })