$(document).ready(function () {
    var pk = $("#pk").val()
    var url = '/api/v1/notes/' + pk + '/';
    $.ajax({
        url: url ,
        type: "GET",
        success: function (response) {
            var Notes = response
            $("#head").html(Notes['title'])
            $("#body").html(Notes['body'])
            }
        })
  })