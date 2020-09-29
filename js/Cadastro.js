baseUrl = "http://localhost:8080/cadastro";






    function cadastroUsuario(){
        let name = document.getElementById('name').value;
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
        let state = document.getElementById('state').value;
        let telephone = document.getElementById('telephone').value;
        
        let data ={
            "addres": {
              "address": address,
              "cep": cep,
              "complement": "string",
              "county": county,
              "mainAddress": true,
              "neighborhood": "string",
              "number": "string",
              "reference": "string",
              "state": "SP",
              "telephone": telephone
            },
            "user": {
              "cpf": cpf,
              "email": email,
              "name": name,
              "pass": "string",
              "photo": "string",
              "username": "string"
            }
        };

        console.log(data);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/user/register',
            data: data,
            success: function(data) { alert('data: ' + data); },
            contentType: "application/json",
            dataType: 'json'
        });
    }

    $('submit_form').submit(cadastroUsuario());

