// Questão 03 - Dias desde 01/01/2025 até a data
function calcularDias() {
    const dataInput = document.getElementById("dataInput").value;
    const dataInicio = new Date("2025-01-01");
    const dataFim = new Date(dataInput);
    const dias = Math.floor((dataFim - dataInicio) / (1000 * 60 * 60 * 24));
    document.getElementById("diasResultado").innerText = `Dias: ${dias}`;
}
