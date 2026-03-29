// Questão 02 - Nota Necessária para Aprovação
function calcularMedia() {
    const mediaParcial = parseFloat(document.getElementById("nota1").value);
    const notaNecessaria = 120 - mediaParcial;
    
    document.getElementById("mediaResultado").innerText = `Média Parcial: ${mediaParcial.toFixed(2)}\nNota necessária: ${notaNecessaria.toFixed(2)}`;
}
