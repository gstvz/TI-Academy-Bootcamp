window.onload = function() {
    const txtNomeCli = document.querySelector('#nomeCliente');
    const btnBuscar = document.querySelector('#btnBuscar');
    btnBuscar.addEventListener('click', function() {
        let dataSetCliente = txtNomeCli.dataset.codigo;
        let dataSetStatus = txtNomeCli.dataset.statuscli;
        console.log(dataSetCliente);
        console.log(dataSetStatus);
    })
}