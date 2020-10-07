$.ajax({
    type: 'POST',
    contentType: "application/json",
    url: 'http://localhost:8080/user/desactive',
    headers: {
        'Authorization': token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "POST",
        'Access-Control-Allow-Headers': 'Authorization, X-Custom-Header'
   },
    data: JSON.stringify(data),
    dataType: 'json',
    success: function(data) { localStorage.removeItem("token")  },
    error: function (request, status, error) {
        console.log(responseText)
    }
});   


   