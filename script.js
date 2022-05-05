let botao1 = document.getElementById('email');
let botao2 = document.getElementById('senha');
if(botao1 !== "tryber@teste.com" && botao2 !== "123456"){
botao1.addEventListener('click', function(){
alert("Email ou senha inválidos");
})
} else {
botao1.addEventListener('click', function(){
alert("Olá, Tryber!");
})
}