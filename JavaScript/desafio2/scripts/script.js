import { buscarCEP } from './buscarCEP.js';

let cep = document.querySelector('#input-cep');
let searchBtn = document.querySelector('#input-search');

searchBtn.addEventListener('click', function() {
    buscarCEP(cep.value);
});