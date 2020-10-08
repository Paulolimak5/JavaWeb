$(document).ready(function (){
    token = localStorage.getItem('token');
    if(token == null){
        window.location.href = "cadastro.html";
    }

    $.ajax({
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        url: 'http://localhost:8080/user/getUser',
        headers: {
            'Authorization': `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET",
            'Access-Control-Allow-Headers': 'Authorization, X-Custom-Header'
       },
        success: function(data) { 
        meusdados(data);
     },
        error: function (request) {
            console.log(request.responseText)
        }
    });
});

    function meusdados(data){
        $("#nome_dados").val(data.user.name);
        $("#cpf_dados").val( data.user.cpf);
        $("#email_dados").val( data.user.email);
        $("#username_dados").val( data.user.username);
        $("#address_dados").val( data.address.address);
        $("#cep_dados").val( data.address.cep);
        $("#complement_dados").val( data.address.complement);
        $("#county_dados").val(data.address.county);
        $("#neighborhood_dados").val(data.address.neighborhood);
        $("#number_dados").val(data.address.number);
        $("#reference_dados").val( data.address.reference);
        $("#state_dados").val(data.address.state);
        $("#telephone_dados").val(data.address.telephone);
    }
    
    
    const form = document.getElementById('editacadastro_form');
    console.log(form);
    form.addEventListener('submit', e => {
        alert("teste");
      e.preventDefault();
        let name = $('#nome_dados').val(); 
        let cpf = $('#cpf_dados').val();
        let email = $('#email_dados').val();
        let username = $('#username_dados').val();
        let address = $('#address_dados').val();
        let cep = $('#cep_dados').val();
        let complement = $('#complement_dados').val();
        let county = $('#county_dados').val();
        let neighborhood = $('#neighborhood_dados').val();
        let number = $('#number_dados').val();
        let reference = $('#reference_dados').val();
        let state = $('#state_dados').val();
        let telephone = $('#telephone_dados').val();
        

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
        console.log(data);
        $.ajax({
            type: 'PUT',
            contentType: "application/json",
            url: 'http://localhost:8080/user/update',
            headers: {
                'Authorization': token,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "PUT",
                'Access-Control-Allow-Headers': 'Authorization, X-Custom-Header'
           },
            data: JSON.stringify(data),
            dataType: 'json',
            success: function(data) {  },
            error: function (request, status, error) {
                console.log(responseText)
            }
        });   
})