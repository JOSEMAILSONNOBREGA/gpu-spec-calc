console.log("Calculadora de GPU carregada com sucesso.");

// Função para calcular a Largura de Banda da Memória (Memory Bandwidth)
// Fórmula: (Clock da Memória * Largura do Barramento) / 8
function calcularLarguraBanda(clockMHz, barramentoBits) {
    return (clockMHz * barramentoBits) / 8 / 1000; // Resultado em GB/s
}
