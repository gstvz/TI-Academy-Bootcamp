// let msg = () => {
//     alert("Estou feliz da vida com JS");
// }

// msg();

// function teste() {
//     let nome = "Gustavo";
//     return nome;
// }

// console.log(teste());

// let msg2 = (nome) => { return nome; };

// console.log(msg2("Gustavo"));

// (function(produto, preco) {
//     alert("O produto é " + produto + " e o preço é de R$ " + preco);
// })("Biscoito", 2.35);

let v1 = prompt("Digite o valor 1");
let v2 = prompt("Digite o valor 2");

const soma = (v1, v2) => {
    let resultado = Number(v1) + Number(v2);
    console.log(resultado);
}

soma(v1, v2);