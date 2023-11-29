// main.js
import { limparLista } from "./lista.js";
import { getLista } from "./lista.js"
// Passo 1 - Ache os elementos importantes
const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#saida');
const brnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

olSaida.innerHTML = "";
atualizarItensdDeLista();
limparLista();
atualizarItensdDeLista();

function atualizarItensdDeLista(){
    const lista = getLista();
    for (let i=0; i < getLista.length; i++){
        const item = lista[i];
        const li = document.createElement('li');
        li.textContent = item;
        document.body.appendChild(li);
    }
}