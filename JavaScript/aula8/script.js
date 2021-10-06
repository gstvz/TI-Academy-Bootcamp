let str = `Qualquer conteúdo!`;

let str2 = `Uma outra string ${str}`;

console.log(str);
console.log(str2);

// Arrays é uma coleção de dados, chamados de elementos.

// const frutas = ["Uva", "Banana", "Laranja", "Melancia"]; // 4 elementos

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

// let euGosto = `Eu gosto de ${frutas[0]}`;
// console.log(euGosto);

const Pessoa = [
    "José", // 0
    23, // 1
    "Solteiro", // 2
    "Bola", // 3
    1.70, // 4
    cores = [ // 5
        "azul", // 0
        "preto", // 1
        "vermelho", // 2
        "salmão", // 3
        "ocre" // 4
    ]
];


// (function() {
//     const jose = `
//         Meu nome é ${Pessoa[0]}, eu tenho ${Pessoa[1]} anos 
//         e sou ${Pessoa[2]}, 
//         eu também gosto de jogar ${Pessoa[3]}.
//         Minha altura é de ${Pessoa[4]}.
//     `;
//     document.write(jose);
// })();

let key = 3;
key++;

console.log(Pessoa.length);
console.log(Pessoa[5][key]);