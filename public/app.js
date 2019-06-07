const isValidPassword = function (password1, password2) {
  return password1 === password2
}

const isValidUsername = function (username) {
  return username.length >= 8;
}

const register = function () {
  const password1 = $('#password1').val().trim();
  const password2 = $('#password2').val().trim();
  const username = $('#username').val().trim();

  if (isValidPassword(password1, password2) && isValidUsername(username)) {
    const data = {
      username: username,
      password: password1
    }

    $.post('/api/user', data, function () {
        $('#message').text('you have successfully registered');
      });
  } else {
    $('#message').text('invalid username or password') 
  }
  
}

$('#register').on('click', register);