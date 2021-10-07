window.onload = function () {
    const numero = document.querySelector('#numero');
    const btn = document.querySelector('#btn');
    const resultado = document.querySelector('#resultado');
    
    btn.addEventListener('click', tabuada);
}

const tabuada = () => {
    let x = parseInt(numero.value);
    let tabuada = 0;

    if(typeof x !== 'number') {
        resultado.innerHTML = `${x} não é um valor numérico`;
    } else {
        if(x < 1 || x > 10){
            resultado.innerHTML = `Digite um valor entre 1 e 10`;
        } else {
            while(tabuada <= 10) {
                resultado.innerHTML += `${x} * ${x} = ${x * tabuada} <br>`;
                tabuada++;
            }
        }
    } 
}

