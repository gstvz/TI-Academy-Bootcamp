// concat: junta dois ou mais arays;
// let nomes = ["Marcelo", "Suelem", "Raphael", "Gustavo", "Nós todos"];
// let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];

// let todosOsNomes = nomes.concat(nomes2);

// console.log(nomes);
// console.log(nomes2);
// console.log(todosOsNomes);

// let qtdArrayNome = `O Array nomes possui ${nomes.length} elementos`;
// console.log(qtdArrayNome);

// indexOf: retorna a posição de um elemento do array.
// let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];
// let buscaNome = "Paulo";

// if (nomes2.indexOf(buscaNome) != -1) {
//     alert(`Eu encontrei o nome ${buscaNome} e está na posição ${nomes2.indexOf(buscaNome)}`);
// } else {
//     alert(`Eu não encontrei o ${buscaNome}`);
// }

// join: transforma os elementos de um array em uma única string.
// let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];

// console.log(nomes2.join());

// push: insere elementos no final do array.
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.push("Maçã", "Laranja");
// frutas.push("Laranja");
// frutas.indexOf("Jaca");

// let insertFruta = "Amora";

// if (frutas.indexOf(insertFruta) == -1) {
//     console.log(`A fruta ${insertFruta} não está na lista`);   
//     frutas.push(insertFruta) ;
// } else {
//     console.log(`A fruta ${insertFruta} já está na lista`);
// }

// console.log(frutas);

// pop: remove o último elemento do array.
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.pop();

// console.log(frutas);

// reverse: inverte a ordem dos elementos.
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.reverse();

// console.log(frutas);
// console.log(frutas[0]);

// shift: remove o primeiro elemento do array.
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.shift();

// console.log(frutas);

// sort: ordena os elementos em ordem crescente
// let numeros = ['200', '2', '1', '189', '3', '67'];
// let alfa = ['n', 'p', 'c', 'a', 'b', 'j'];

// numeros.sort();

// console.log(numeros);

// toString: converte o array em uma string.
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// console.log(frutas.toString());

// unshift: insere um elemento no início do array.

// splice: corta ou remove um elemento em um ponto indicado.
// let nomes = ["Mariana", "Patati Patatá", "Xuxa", "Balão mágico"];

// let indice = nomes.indexOf("Balão mágico");
// let novaLista = nomes.splice(indice, 1);

// console.log(novaLista);