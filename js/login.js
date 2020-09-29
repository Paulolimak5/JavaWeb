

const form = document.getElementById('login_form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        let username = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;


        let data = 
            {"pass": pass,
            "username": username};

        console.log(data);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            url: 'http://localhost:8080/user/authenticate',
            data: JSON.stringify(data),
            success: function(data) { localStorage.setItem('token', data.token) },
            error: function( req, status, err ) {
                console.log( 'something went wrong', status, err )
            },
        });
    })

