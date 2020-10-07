

$(document).ready(function (){
    token = localStorage.getItem('token');
    console.log(token);
    if(token == null){
        window.location.href = "cadastro.html";
    }
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://localhost:8080/user/getUser',
        headers: { 'Authorization': token },
        dataType: 'json',
        success: function(data) { console.log(data) },
        error: function (request) {
            console.log(request.responseText)
        }
});
});


