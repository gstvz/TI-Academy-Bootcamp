window.onload = function() {

    function resultadoCEP(dadosCEP) {
        for(let campo in dadosCEP) {
            if(document.querySelector(`#${campo}`)) {
                document.querySelector(`#${campo}`).value = dadosCEP[campo];
            }
        }
    }; 

    let dadosCEP = async function(cep) {
        let url = `https://viacep.com.br/ws/${cep}/json/`;

        try {
            let dadosFetch = await fetch(url);
            let dadosJSON = await dadosFetch.json();
            resultadoCEP(dadosJSON);
        } catch (error) {
            alert(error);
        }
    }  

    const btnBuscar = document.querySelector('#buscarCEP');
    const CEP_ = document.querySelector('#NumeroCEP');

    btnBuscar.addEventListener('click', function() {
        dadosCEP(CEP_.value);
    });

}

// 87053660