

function checkLogin()
{
    firebase.database().ref('/admin/user').once('value').then(function(data)
    {
            let login = data.val().login;
            let passw = data.val().password;

            let luser = $('#user').val();
            let lpassw =  $('#password').val();
            let md5Passw = MD5(lpassw);
           
            if (luser == login && passw == md5Passw)
            {
                sessionStorage.setItem('logged', '1');
                location.href = 'view/admin.html';
            }
    }); 

}

    $('#btnLogin').on('click', function ()
    {
        event.preventDefault();
        checkLogin();
    });