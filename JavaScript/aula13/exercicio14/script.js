let frutas = [
    {
        'fruta': "Maçã",
        'preco': 1.00
    },
    {
        'fruta': "Banana",
        'preco': 2.00
    },
    {
        'fruta': "Pera",
        'preco': 3.00
    },
];

(function exibirFrutas(obj) {
    for (let elem of obj) {
        for (let prop in elem) {
            document.write(`${prop} -> ${elem[prop]} <br>`)
        }
    }
})(frutas);