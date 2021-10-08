let total = 0;

const somarTotal = function(produto, listaProdutos) {
    let mostraTotalCompra = document.querySelector('#mostraTotalCompra');    

    total += listaProdutos[produto.target.id].preco;
    mostraTotalCompra.value = `R$ ${total.toFixed(2)}`;
};

export { somarTotal };