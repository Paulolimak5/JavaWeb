var usuario;
var endereco;

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
            'Authorization': token,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET",
            'Access-Control-Allow-Headers': 'Authorization, X-Custom-Header'
       },
        success: function(data) { 
        meusdados(data) },
        error: function (request) {
            console.log(request.responseText)
        }
    });
});

    function meusdados(data){
        var usuario = data.user;
        var endereco = data.address;
        $("#nome_dados").attr("placeholder", usuario.name);
        $("#cpf_dados").attr("placeholder", usuario.cpf);
        $("#email_dados").attr("placeholder", usuario.email);
        $("#username_dados").attr("placeholder", usuario.username);
        $("#address_dados").attr("placeholder", endereco.address);
        $("#cep_dados").attr("placeholder", endereco.cep);
        $("#complement_dados").attr("placeholder", endereco.complement);
        $("#county_dados").attr("placeholder", endereco.county);
        $("#neighborhood_dados").attr("placeholder", endereco.neighborhood);
        $("#number_dados").attr("placeholder", endereco.number);
        $("#reference_dados").attr("placeholder", endereco.reference);
        $("#state_dados").attr("placeholder", endereco.state);
        $("#telephone_dados").attr("placeholder", endereco.telephone);
    }
    
    
    const form = document.getElementById('editacadastro_form');
    console.log(form);
    form.addEventListener('submit', e => {
        alert("teste");
      e.preventDefault();

   
        let name = $('#nome_dados').val(); 
        let cpf = $('#cpf_dados').val() == null ? usuario.cpf : $("#cpf_dados").val;
        let email = $('#email_dados').val();
        let username = $('#username_dados').val() == null ? usuario.username : $("#username_dados").val;
        let address = $('#address_dados').val() == null ? endereco.address : $("#address_dados").val;
        let cep = $('#cep_dados').val() == null ? endereco.cep : $("#cep_dados").val;
        let complement = $('#complement_dados').val() == null ? endereco.complement : $("#complement_dados").val;
        let county = $('#county_dados').val() == null ? endereco.county : $("#county_dados").val;
        let neighborhood = $('#neighborhood_dados').val() == null ? endereco.neighborhood : $("#neighborhood_dados").val;
        let number = $('#number_dados').val() == null ? endereco.number : $("#number_dados").val;
        let reference = $('#reference_dados').val() == null ? endereco.reference : $("#reference_dados").val;
        let state = $('#state_dados').val() == null ? endereco.state : $("#state_dados").val;
        let telephone = $('#telephone_dados').val() == null ? endereco.telephone : $("#telephone_dados").val;
        

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