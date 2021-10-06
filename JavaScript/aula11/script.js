// function Pessoa(nome) {
//     this.nome = nome;
// }

// Pessoa.prototype.msg = function() {
//     alert("Olá " + this.nome);
// }

// let NovaPessoa = new Pessoa('Gustavo');
// let OutraPessoa = new Pessoa('Maria');

// console.log(NovaPessoa.nome);
// NovaPessoa.msg();

// console.log(NovaPessoa);

// let Pessoa2 = {
//     'nome': '',
//     'idade': ''
// }

// console.log(Pessoa2);
// Pessoa2.__proto__.msg = function() {
//     alert("Olá " + Pessoa2.nome);
// }
// let P = Pessoa2;
// P.nome = "Gustavo";
// P.msg();
// console.log(P);

// let Pessoa3 = [
//     { 
//         'nome': 'Gustavo',
//         'idade': 25,
//         'sexo': 'M'
//     },
//     {
//         'nome': 'Marcelo',
//         'idade': 36,
//         'sexo': 'M' 
//     }
// ]

// let NPessoa = Pessoa3;
// console.log(`Existem ${NPessoa.length} pessoas cadastradas`);
// console.log(NPessoa[1].nome);