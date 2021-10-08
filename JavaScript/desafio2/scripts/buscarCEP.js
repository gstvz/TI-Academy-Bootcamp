const buscarCEP = async function(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let data = await fetch(url);
    let json = await data.json();
    dadosCEP(json);
}

const dadosCEP = function(json) {
    for(let prop in json) {
        if(document.querySelector(`#${prop}`)) {
            document.querySelector(`#${prop}`).value = json[prop];
        }
    }
}

export { buscarCEP };