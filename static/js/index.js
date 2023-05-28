$(document).ready(function () {
    $.ajax({
        url: "api/v1/notes/",
        type: "GET",
        success: function (response) {
            var Notes = response
            // alert(typeof(Notes))
            if (Notes === null || Notes === undefined || Notes === '') {

                // Data is null, undefined, or empty
                Alert("No data Found")
                }
            else {
                var tableBody = $('#myTable tbody');
                Notes.forEach(function(item) {
                    var row = '<tr>' +
                        '<td>' +
                            item['title'] +
                        '</td>' +
                        '<td>' +
                            item['body'] +
                        '</td>' +
                        '<td class="add-remove text-end">' +
                            '<a href="notes-view/'+ item['id'] +'"><button type="button" class="btn btn-secondary">View</button></a>' +
                            '<a href="note-edit/'+ item['id'] +'/"><button type="button" class="btn btn-success">Edit</button></a>' +
                            '<button type="button" class="btn btn-danger" onclick="DeleteFun('+ item['id'] +')">Delete</button>' +
                        '</td>' +
                        '</tr>';
                    $('#myTable tbody').append(row);
                });
                }
            }
        })
    
})

function DeleteFun(id){
  var url = '/api/v1/notes/' + id + '/';
  Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
          $.ajax({
            url: url,
            type: "DELETE",
            success: function (response) {
              window.location.reload()
            }
          })
          
        }
    })
}