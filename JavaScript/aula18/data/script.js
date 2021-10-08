let meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
    'Junho', 'Julho', 'Agosto', 'Setembro',
    'Outubro', 'Novembro', 'Dezembro'
];

let diaSemana = [
    'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira',
    'Quinta-Feira', 'Sexta-Feira', 'Sábado'
];

let data = new Date();
console.log(`Hoje é ${diaSemana[data.getDay()]} de ${meses[data.getMonth()]} de ${data.getFullYear()}`);

let dataFormatada = data.toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
console.log(dataFormatada);