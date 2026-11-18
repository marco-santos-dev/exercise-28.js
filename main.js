// 28. Quando o dinheiro dobra? Leia o valor inicial de um investimento e a taxa de rendimento mensal em %. Calcule quantos meses serão necessários para o investimento dobrar de valor.

const initialInvestment = Number(prompt("Valor inicial do investimento (R$):"));
const monthlyRate = Number(prompt("Taxa de rendimento mensal (%):"));

if (
    initialInvestment <= 0 ||
    monthlyRate <= 0 ||
    !Number.isFinite(initialInvestment) ||
    !Number.isFinite(monthlyRate)
) {
    console.log("Valores inválidos.");
} else {
    let balance = initialInvestment;
    let months = 0;

    while (balance < initialInvestment * 2) {
        balance *= 1 + monthlyRate / 100;
        months++;
    }

    console.log(`O investimento dobrará em ${months} mês(es).`);
    console.log(`Saldo final: R$ ${balance.toFixed(2)}`);
}