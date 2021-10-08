import { listarProdutos } from './listarProdutos.js';

window.onload = function() {    
    const produtos = document.querySelector('#produtos'); 
    let listaProdutos = [
        {
            'produto': 'Mamão Papaia',
            'preco': 1.00
        },
        {
            'produto': 'Laranja',
            'preco': 2.10
        },
        {
            'produto': 'Manga',
            'preco': 3.20
        },
        {
            'produto': 'Melão',
            'preco': 4.30
        },
        {
            'produto': 'Melancia',
            'preco': 5.40
        }
    ];

    listarProdutos(listaProdutos, produtos);    
}