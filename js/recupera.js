baseUrl = "http://localhost:8080/cadastro";



    const form = document.getElementById('recupera_form');
    form.addEventListener('submit', e => {
      e.preventDefault();
        let email = document.getElementById('email').value;

        let data ={
              "email": email
        };

        $.ajax({
            type: 'POST',
            contentType: "application/json",
            url: 'http://localhost:8080/user/change-password',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function(data) { window.location.href = "senha_email.html" },
            error: function (request, status, error) {
                console.log(responseText)
            }
            

        });
  
        
          
        
    })
