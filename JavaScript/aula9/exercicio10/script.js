let nomes = [
    "Gustavo",
    "André",
    "João",
    "Francisco",
    "Guilherme"
];

function manipularArray(array, novoNome, indice) {
    document.write(`
        Quantidade de elementos do array..: ${nomes.length} <br>  
    `);

    array.push(novoNome)

    document.write(`
        Você escolheu o índice ${indice} que é o elemento ${array[indice]} <br>
        A quantidade atual de elementos do array é de..: ${array.length}
    `);
}

manipularArray(nomes, "Mariana", 2);