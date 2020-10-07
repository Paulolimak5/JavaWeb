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
        success: function(data) { console.log(data);
            console.log(data);
        meusdados(data) },
        error: function (request) {
            console.log(request.responseText)
        }
});
});

    function meusdados(data){
        usuario = data.user;
        endereco = data.address;

        $("#nome_dados").text(usuario.name);
        $("#cpf_dados").text(usuario.cpf);
        $("#email_dados").text(usuario.email);
        $("#username_dados").text(usuario.username);

        $("#address_dados").text(endereco.address);
        $("#cep_dados").text(endereco.cep);
        $("#complement_dados").text(endereco.complement);
        $("#county_dados").text(endereco.county);
        $("#neighborhood_dados").text(endereco.neighborhood);
        $("#number_dados").text(endereco.number);
        $("#reference_dados").text(endereco.reference);
        $("#state_dados").text(endereco.state);
        $("#telephone_dados").text(endereco.telephone);
    }
