import { somarTotal } from './somarTotal.js';

let cestaProdutos = [];

const adicionarProduto = function(produto, listaProdutos) {
    let cestaDoCliente = document.querySelector('#cestaDoCliente');    
    let li = document.createElement('li');     

    if(cestaProdutos.includes(produto.target.innerText, 0) === false) {
        cestaDoCliente.appendChild(li).textContent = produto.target.innerText;
        cestaProdutos.push(produto.target.innerText);
        somarTotal(produto, listaProdutos);
    } else {
        alert(`Este item ${produto.target.innerText} já está na sua cesta`)
    }
};

export { adicionarProduto };