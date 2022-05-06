const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');

// const atual = document.querySelectorAll('.rate');
// const formCadastro = document.getElementById('evaluation-form');
const btnEnter = document.getElementById('btn-entrar');

function verifyEmail(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
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
const btnCadastro = document.getElementById('submit-btn');
const checkAgree = document.getElementById('agreement');

function disable() {
  if (checkAgree.checked === true) {
    btnCadastro.disabled = false;
  } else {
    btnCadastro.disabled = true;
  }
}
checkAgree.addEventListener('click', disable);

const text = document.getElementById('textarea');
const outputCount = document.getElementById('counter');

const count = 500;
outputCount.innerHTML = count;

function contador() {
  const contentText = text.value;
  const tamanhoText = contentText.length;
  outputCount.innerHTML = count - tamanhoText;
}

text.addEventListener('input', contador);

// const nome = document.getElementById('input-name');
// const sobrenome = document.getElementById('input-lastname');
// const email = document.getElementById('input-email');
// const casa = document.getElementById('house');

// const front = document.getElementById('Frontend');
// const back = document.getElementById('Backend');
// const full = document.getElementById('FullStack');

// const hofs = document.getElementById('HoFs');
// const jest = document.getElementById('Jest');
// const promises = document.getElementById('Promises');
// const react = document.getElementById('React');
// const sql = document.getElementById('SQL');
// const python = document.getElementById('Python');

// const arrayChecked = [];

// function infos(event) {
//   event.preventDefault();
//   formCadastro.innerHTML = '';

//   const createName = document.createElement('label');
//   createName.innerHTML = `Nome: ${nome.value} ${sobrenome.value}`;
//   formCadastro.appendChild(createName);

//   const createEmail = document.createElement('label');
//   createEmail.innerHTML = `Email: ${email.value}`;
//   formCadastro.appendChild(createEmail);

//   const createCasa = document.createElement('label');
//   createCasa.innerHTML = `Casa: ${casa.value}`;
//   formCadastro.appendChild(createCasa);

//   if (front.checked === true) {
//     const createFamilia = document.createElement('label');
//     createFamilia.innerHTML = `Família: ${front.value}`;
//     formCadastro.appendChild(createFamilia);
//   } else if (back.checked === true) {
//     const createFamilia = document.createElement('label');
//     createFamilia.innerHTML = `Família: ${back.value}`;
//     formCadastro.appendChild(createFamilia);
//   } else if (full.checked === true) {
//     const createFamilia = document.createElement('label');
//     createFamilia.innerHTML = `Família: ${full.value}`;
//     formCadastro.appendChild(createFamilia);
//   }

//   const createMaterias = document.createElement('label');
//   createMaterias.classList.add('subject');

//   formCadastro.appendChild(createMaterias);

//   if (hofs.checked === true) {
//     arrayChecked.push('HoFs');
//   }
//   if (jest.checked === true) {
//     arrayChecked.push('Jest');
//   }
//   if (promises.checked === true) {
//     arrayChecked.push('Promises');
//   }
//   if (react.checked === true) {
//     arrayChecked.push('React');
//   }
//   if (sql.checked === true) {
//     arrayChecked.push('SQL');
//   }
//   if (python.checked === true) {
//     arrayChecked.push('Python');
//   }

//   createMaterias.innerHTML = `Matérias: ${arrayChecked}`;

//   for (let index = 0; index < atual.length; index += 1) {
//     if (atual[index].checked === true) {
//       const createAvaliacao = document.createElement('label');
//       createAvaliacao.innerHTML = `Avaliação: ${atual[index].value}`;
//       formCadastro.appendChild(createAvaliacao);
//     }
//   }

//   const createObservacao = document.createElement('label');
//   createObservacao.innerHTML = `Observações: ${text.value}`;
//   formCadastro.appendChild(createObservacao);
// }

// btnCadastro.addEventListener('click', infos);
