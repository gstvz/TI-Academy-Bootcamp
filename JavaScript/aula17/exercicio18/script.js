window.onload = function() {
    const btn = document.querySelector('#btn');
    const lista = document.querySelector('#lista');
    let veiculos = [
        "ônibus",
        "motocicleta",
        "patinete"
    ];

    btn.addEventListener('click', function() {
        for (let veiculo of veiculos) {
            let li = document.createElement('li');
            lista.appendChild(li).textContent = veiculo;
        }        
    });
}