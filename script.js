const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');

const atual = document.querySelectorAll('.rate');
const formCadastro = document.getElementById('evaluation-form');
const btnEnter = document.getElementById('btn-entrar');

function verifyEmail(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

btnEnter.addEventListener('click', verifyEmail);

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

//    FOR LABEL

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

//    INFOS

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');

const front = document.getElementById('Frontend');
const back = document.getElementById('Backend');
const full = document.getElementById('FullStack');

const subject = document.querySelectorAll('.subject');

const arrayChecked = [];

function create() {
  formCadastro.innerHTML = '';

  const createName = document.createElement('label');
  createName.innerText = `Nome: ${nome.value} ${sobrenome.value}`;
  formCadastro.appendChild(createName);

  const createEmail = document.createElement('label');
  createEmail.innerText = `Email: ${email.value}`;
  formCadastro.appendChild(createEmail);

  const createCasa = document.createElement('label');
  createCasa.innerText = `Casa: ${casa.value}`;
  formCadastro.appendChild(createCasa);
}

function family() {
  if (front.checked === true) {
    const createFamilia = document.createElement('label');
    createFamilia.innerText = `Família: ${front.value}`;
    formCadastro.appendChild(createFamilia);
  } else if (back.checked === true) {
    const createFamilia = document.createElement('label');
    createFamilia.innerText = `Família: ${back.value}`;
    formCadastro.appendChild(createFamilia);
  } else if (full.checked === true) {
    const createFamilia = document.createElement('label');
    createFamilia.innerText = `Família: ${full.value}`;
    formCadastro.appendChild(createFamilia);
  }
}

const createMaterias = document.createElement('label');
createMaterias.classList.add('mat');

function materias() {
  formCadastro.appendChild(createMaterias);
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked === true) {
      arrayChecked.push(` ${subject[index].value}`);
    }
  }

  createMaterias.innerHTML = `Matérias: ${arrayChecked}`;
}

function avalicao() {
  for (let index = 0; index < atual.length; index += 1) {
    if (atual[index].checked === true) {
      const createAvaliacao = document.createElement('label');
      createAvaliacao.innerText = `Avaliação: ${atual[index].value}`;
      formCadastro.appendChild(createAvaliacao);
    }
  }
}

function observacao() {
  const createObservacao = document.createElement('label');
  createObservacao.innerHTML = `Observações: ${text.value}`;
  formCadastro.appendChild(createObservacao);
}

function infos(event) {
  event.preventDefault();
  create();
  family();
  materias();
  avalicao();
  observacao();
}
btnCadastro.addEventListener('click', infos);
