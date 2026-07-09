const formulario = document.querySelector ('form');
const inputNovaTarefa = document.getElementById("addTarefa");
const listaDeTarefas = document.querySelector('ul');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    let nomeNovaTarefa = inputNovaTarefa.value;
    const novaLinha = document.createElement('li');
    novaLinha.innerHTML = `
    <input type="checkbox" class="checar-item">
    <span>${nomeNovaTarefa}</span>
    <span class="deletar-tarefa">X</span>`;
    listaDeTarefas.appendChild(novaLinha);
    inputNovaTarefa.value = "";
});

listaDeTarefas.addEventListener('click', function(evento) {
    const elementoClicado = evento.target;

    if (elementoClicado.classList.contains('deletar-tarefa')){
        const itemPaiLista = elementoClicado.parentElement;
        itemPaiLista.remove();
    } else if(elementoClicado.classList.contains('checar-item')){
        const itemPaiLista = elementoClicado.parentElement;
        const textoTarefa = itemPaiLista.querySelector('span');
        textoTarefa.classList.toggle('tarefaConcluida');
    }
});
const data = new Date();
const dia = data.getDate().toString().padStart(2, '0');
const mes = (data.getMonth() + 1).toString().padStart(2, '0');
const ano = data.getFullYear();

const dataFormato = `${dia}/${mes}/${ano}`;

const dataNaPagina = document.querySelector('.data-de-hj');

dataNaPagina.innerText = dataFormato;