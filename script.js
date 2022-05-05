let inputEmail = document.getElementById('email');
let inputSenha = document.getElementById('senha');

let btnEnter = document.getElementById('btn-entrar')

function verifyEmail(){
  if(inputEmail.value !== "tryber@teste.com" && inputSenha.value !== "123456"){
      window.alert("Email ou senha inválidos");
    }
  else {
      window.alert("Olá, Tryber!");
    }
}

btnEnter.addEventListener('click', verifyEmail);