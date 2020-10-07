baseUrl = "http://localhost:8080/cadastro";



    const form = document.getElementById('cadastro_form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let name = $('#name').val();
        let cpf = document.getElementById('cpf').value;
        let email = document.getElementById('email').value;
        let username = document.getElementById('username').value;
        let address = document.getElementById('address').value;
        let cep = document.getElementById('cep').value;
        let complement = document.getElementById('complement').value;
        let county = document.getElementById('county').value;
        let neighborhood = document.getElementById('neighborhood').value;
        let number = document.getElementById('number').value;
        let reference = document.getElementById('reference').value;
        let state = $('#state').val();
        let telephone = document.getElementById('telephone').value;
        

        let data ={
            "address": {
              "address": address,
              "cep": cep,
              "complement": complement,
              "county": county,
              "mainAddress": true,
              "neighborhood": neighborhood,
              "number": number,
              "reference": reference,
              "state": state,
              "telephone": telephone
            },
            "user": {
              "cpf": cpf,
              "email": email,
              "name": name,
              "pass": null,
              "photo": "string",
              "username": username
            }
        };
        console.log(name);
        console.log(data);
        $.ajax({
            type: 'POST',
            contentType: "application/json",
            url: 'http://localhost:8080/user/register',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function(data) { window.location.href = "senha_email.html" },
            error: function (request, status, error) {
                console.log(responseText)
            }
        });   
})
