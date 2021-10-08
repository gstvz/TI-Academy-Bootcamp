import { adicionarProduto } from './adicionarProduto.js';

const listarProdutos = function(listaProdutos, produtos) {
    for (let item of listaProdutos) {
        let li = document.createElement('li');
        produtos.appendChild(li).textContent = item.produto;
    };

    const produtosLi = document.querySelectorAll(`#produtos > li`); 
    let index = 0;  

    for(let produto of produtosLi) {              
        produto.addEventListener('click', function(produto) {            
            adicionarProduto(produto, listaProdutos);            
        });
        produto.setAttribute('id', index);
        index++;
    };
};

export { listarProdutos };