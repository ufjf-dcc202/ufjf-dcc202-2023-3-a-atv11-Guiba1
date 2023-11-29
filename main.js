// main.js
import { adicionarNaLista, limparLista } from "./lista.js";
import { getLista } from "./lista.js"
// Passo 1 - Ache os elementos importantes
const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#itens');
const brnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

btnLimpar.addEventListener('click, limparElementosDaLista');
btnAdicionar.addEventListener('click', criaElementoNaLista);

atualizarItensdDeLista();

function criaElementoNaLista() {
    const texto = pEntrada.textContent;
    adicionarNaLista(texto);
    atualizarItensdDeLista();
    pEntrada.textContent="";
    pEntrada.focus();
}
    function limparElementosDaLista(){
        limparLista();
        atualizarItensdDeLista();
    }


function atualizarItensdDeLista(){
    olSaida.innerHTML = "";
    const lista = getLista();
    for (let i=0; i < getLista.length; i++){
        const item = lista[i];
        const li = document.createElement('li');
        li.textContent = item;
        document.body.appendChild(li);
    }
}