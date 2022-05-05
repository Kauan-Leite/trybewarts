let inputEmail = document.getElementById('email');
let inputSenha = document.getElementById('senha');


let formCadastro = document.getElementById('evaluation-form')



let btnEnter = document.getElementById('btn-entrar')

function verifyEmail(event){
  event.preventDefault()
  if(inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456'){
    window.alert("Olá, Tryber!");
  } else {
    window.alert("Email ou senha inválidos.");
  }

  // if(resultEmail !== "tryber@teste.com" && resultSenha !== "123456"){
  //   console.log(resultEmail)
  //   console.log(resultSenha)
  //     window.alert("Email ou senha inválidos");
  //   }
  // else {
  //     window.alert("Olá, Tryber!");
  //   }
}

btnEnter.addEventListener('click', verifyEmail);



// function createRate(){
//   for(let count = 1; count <= 10; count += 1){
//     let createLabel = document.createElement('label');
//     let createInput = document.createElement('input');

//     createLabel.setAttribute('for', count);
//     createLabel.classList.add(count)
//     formCadastro.appendChild(createLabel);

//     createInput.setAttribute('type', 'radio');
//     createInput.setAttribute('name', 'rate');
//     createInput.setAttribute('value', count);


//     let searchLabel = document.getElementsByClassName(count)[0];
//     searchLabel.appendChild(createInput);
//     createLabel;

//   }
// }
// createRate();

let checkAgree = document.getElementById('agreement');



function disable(){
  if (checkAgree.checked == true){
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}
checkAgree.addEventListener('click', disable);