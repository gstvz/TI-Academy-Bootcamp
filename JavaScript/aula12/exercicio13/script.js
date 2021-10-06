(function (palavra) {
    let palavraSeparada = palavra.split("");
    palavraSeparada = palavraSeparada.reverse();
    palavraSeparada = palavraSeparada.join("");
    console.log(palavraSeparada);
})('Gustavo');

// Solução do professor.

let palavra = "Hulk";

function invertePalavra(p="Gustavo") {
    for(let i=(p.length - 1); i >= 0; i--) {
        console.log(p[i]);
    }
}

invertePalavra('Diana');