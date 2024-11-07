function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (altura > 0 && peso > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);
        resultado.innerText = `Seu IMC é ${imc}`;
    } else {
        resultado.innerText = 'Por favor, insira valores válidos para altura e peso.';
    }
}
