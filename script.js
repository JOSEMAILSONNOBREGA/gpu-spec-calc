// Função principal acionada pelo botão da tela
function processarCalculo() {
    // Captura os valores inseridos na interface
    const clock = parseFloat(document.getElementById('clock').value);
    const barramento = parseFloat(document.getElementById('barramento').value);

    // Validação simples para evitar campos vazios ou zerados
    if (!clock || !barramento) {
        alert("Por favor, insira valores válidos de clock e barramento.");
        return;
    }

    // Aplica a fórmula matemática de largura de banda de memória (Memory Bandwidth)
    // Fórmula: (Clock Efetivo em MHz * Largura do Barramento em Bits) / 8 / 1000 = Resultado em GB/s
    const larguraBanda = (clock * barramento) / 8 / 1000;

    // Exibe o resultado arredondado na tela e torna a caixa visível
    document.getElementById('val-banda').innerText = larguraBanda.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
}
