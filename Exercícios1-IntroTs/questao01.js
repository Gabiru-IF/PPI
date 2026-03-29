// Questão 01 - Cálculo do Volume de um Cilindro
function calcularVolume() {
    const raio = parseFloat(document.getElementById("raio").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const volume = Math.PI * raio * raio * altura;
    document.getElementById("resultado").innerText = `Volume: ${volume.toFixed(2)} unidades³`;
}
