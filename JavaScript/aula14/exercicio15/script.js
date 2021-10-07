(function(numero) {
    let tabuada = 0;

    if(typeof numero !== 'number') {
        document.write(`${numero} não é um valor numérico`);
    } else {
        if(numero < 1 || numero > 10){
            document.write(`Digite um valor entre 1 e 10`);
        } else {
            while(tabuada <= 10) {
                document.write(`${numero} * ${tabuada} = ${numero * tabuada} <br>`);
                tabuada++;
            }
        }
    } 
})(5);
