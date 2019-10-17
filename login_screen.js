

function login() {
	var userName = document.getElementsByName('email')[0].value;
	userName = userName.toLowerCase();

	var password = document.getElementsByName('password')[0].value;
	password = password.toLowerCase();


	if(userName =='teste@teste.com' && password == '1234') {
		window.location = "/list.html";
	} else {
		alert('Dados incorretos.');
	}
}

var submit = document.querySelector('button');
submit.onclick = login;