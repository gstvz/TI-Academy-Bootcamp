// g/i/m

// match: procura um caractere ou palavra em uma string
// let nome = "Gustavo França";

// console.log(nome.match("G"));

// search: retorna o índice do caractere indicado, ou o caractere no índice indicado.
// let nome = "Gustavo França";

// console.log(nome.search(/g/i));

// replace: substitui uma string por outra.

// let str = 'Lorem ipsum dolor site amet consectetur adipisicing elit. Necessitatibus aut optio tenetur, expedita exercitationem architecto pariatur, adipisci';

// let strOutra = str.replace(/sit/gi, "não");

// console.log(strOutra);

// localeCompare: compara duas strings
// let gato = "gato";
// let outroGato = "gato";

// console.log(gato.localeCompare(/Gato/gi));

// toString: converte um valor em uma string
// let num = Number('1');

// console.log(num.toString());

// toLowerCase: converte a string para caixa baixa.
// let str = 'Lorem ipsum dolor SIT amet consectetur adipisicing elit. Necessitatibus aut optio tenetur, expedita exercitationem architecto pariatur, adipisci';

// console.log(str.toLowerCase());

// let gato = "gato";
// let outroGato = "GATO";

// let cat1= gato.toLowerCase();
// let cat2 = outroGato.toLowerCase();

// console.log(cat1.localeCompare(cat2));

// toUpperCase: converte a string para caixa alta.

// let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut optio tenetur, expedita exercitationem architecto pariatur, adipisci';

// console.log(str.toUpperCase());

// trim: remove os espaços antes e depois da string.

// let str1 = "           Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut optio tenetur, expedita exercitationem architecto pariatur, adipisci          ";
// let str2 = `           Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut optio tenetur, expedita exercitationem architecto pariatur, adipisci          `;

// console.log(str1.trim());
// console.log(str2);

// NaN
// let num = Number("1");
// console.log(isNaN('8i'));

// if (isNaN(num)) {
//     console.log('Isso não é um número');
// } else {
//     console.log('Isso é um número');
// }

// toFixed: arredonda casas decimais para cima.

// let valor = 2.456;

// console.log(valor.toFixed(2));

// toLocaleString: formata o valor para o idioma indicado.
// let valor = 2.456;
// console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));