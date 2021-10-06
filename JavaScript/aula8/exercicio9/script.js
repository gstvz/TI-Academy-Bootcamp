let altura = prompt("Digite sua altura");
let peso = prompt("Digite seu peso");
let nome = prompt("Digite seu nome");

function calcularImc(altura, peso, nome) {
    let imc = parseFloat(peso) / (parseFloat(altura)**2);
    document.write(`
        Nome: ${nome} <br>
        Altura: ${altura} <br>
        Peso: ${peso} <br>
        IMC: ${imc} <br>
    `)
}

calcularImc(altura, peso, nome);