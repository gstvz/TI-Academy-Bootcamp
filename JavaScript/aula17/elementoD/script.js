window.onload = function() {
    let produtos = [
        {
            descricao: 'Biscoito Mirabel',
            preco: 2.20
        },
        {
            descricao: 'Marmelada',
            preco: 3.20
        },
        {
            descricao: 'Sabonete',
            preco: 4.20
        }
    ];


    const listaProdutos = document.querySelector('#listaProdutos');
    const Total = document.querySelector('#total');

    (() => {
        let totalzinho = 0;
        for(let produto of produtos) {
            const filhoLi = document.createElement('li');
            for (listaP in produto) {
                if(listaP == 'preco') {
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', produto[listaP]);
                    totalzinho += produto[listaP];
                } else {
                    listaProdutos.appendChild(filhoLi).textContent = `${produto[listaP]}`;
                }                
            }
        }
        Total.value = totalzinho.toFixed(2);
    })(produtos)
}
