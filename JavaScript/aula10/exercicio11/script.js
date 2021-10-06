function manipularPalavra(palavra) {

    let palavraUpperCase = palavra.toUpperCase();

    document.write(`
        Esta palavra tem ${palavra.length} caracteres <br>
        A palavra ${palavra} ficou ${palavraUpperCase} <br>
        A letra ${palavraUpperCase[2]} é o 3º caractere da palavra ${palavraUpperCase} <br>
        ${palavra.toUpperCase()} ficou ${palavraUpperCase.replace(/S/gi, "X")}
    `)
}

manipularPalavra("Gustavo");