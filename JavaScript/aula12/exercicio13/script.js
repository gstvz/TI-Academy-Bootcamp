(function (palavra) {
    let palavraSeparada = palavra.split("");
    palavraSeparada = palavraSeparada.reverse();
    palavraSeparada = palavraSeparada.join("");
    console.log(palavraSeparada);
})('Gustavo');