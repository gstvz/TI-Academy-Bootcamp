window.onload = function() {
    const numeroUm = document.querySelector('#numeroUm');
    const numeroDois = document.querySelector('#numeroDois');
    const soma = document.querySelector('#soma');

    numeroDois.addEventListener('blur', function() {
        soma.value = parseInt(numeroUm.value) + parseInt(numeroDois.value);
    })
}

