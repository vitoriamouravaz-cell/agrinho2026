// Inicialização do Gráfico do Chart.js
const ctx = document.getElementById('agroChart').getContext('2d');
let agroChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Produção Sustentável (Ton)',
            data: [1200, 1900, 3000, 5000, 4200, 6800],
            borderColor: '#34d399', // Verde Emerald
            backgroundColor: 'rgba(52, 211, 153, 0.1)',
            fill: true,
            tension: 0.4
        }, {
            label: 'Meta de Preservação (Hectares)',
            data: [2500, 2500, 2700, 2900, 3200, 3500],
            borderColor: '#fbbf24', // Amarelo Amber
            backgroundColor: 'transparent',
            borderDash: [5, 5],
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: '#94a3b8' } }
        },
        scales: {
            x: { grid: { color: '#334155' }, ticks: { color: '#94a3b8' } },
            y: { grid: { color: '#334155' }, ticks: { color: '#94a3b8' } }
        }
    }
});

// Elementos da Interface para Interatividade
const btnProdutividade = document.getElementById('btn-produtividade');
const btnSustentavel = document.getElementById('btn-sustentavel');

// Elementos dos Cards que vão mudar
const card1Title = document.getElementById('card1-title');
const card1Value = document.getElementById('card1-value');
const card1Icon = document.getElementById('card1-icon');

// Lógica de Alternância de Foco: Força vs Sustentabilidade
btnProdutividade.addEventListener('click', () => {
    // Altera Estado dos Botões
    btnProdutividade.className = "px-4 py-2 rounded-full text-xs font-bold transition-all bg-amber-500 text-slate-950 shadow-lg";
    btnSustentavel.className = "px-4 py-2 rounded-full text-xs font-bold text-slate-400 transition-all hover:text-white";

    // Altera Dados para destacar a FORÇA/PRODUÇÃO do Agronegócio
    card1Title.innerText = "Faturamento Bruto";
    card1Value.innerHTML = "R$ 4.2M <span class='text-sm font-normal text-slate-400'>safra</span>";
    card1Icon.className = "p-3 bg-amber-500/10 rounded-xl text-amber-400";
    card1Icon.innerHTML = "<i class='fa-solid fa-dollar-sign text-xl'></i>";

    // Atualiza o Gráfico para modo Produção
    agroChart.data.datasets[0].label = "Volume de Exportação (Containers)";
    agroChart.data.datasets[0].borderColor = "#fbbf24";
    agroChart.data.datasets[0].backgroundColor = "rgba(251, 191, 36, 0.1)";
    agroChart.update();
});

btnSustentavel.addEventListener('click', () => {
    // Altera Estado dos Botões
    btnSustentavel.className = "px-4 py-2 rounded-full text-xs font-bold transition-all bg-emerald-500 text-slate-950 shadow-lg";
    btnProdutividade.className = "px-4 py-2 rounded-full text-xs font-bold text-slate-400 transition-all hover:text-white";

    // Altera Dados para destacar a SUSTENTABILIDADE do Agronegócio
    card1Title.innerText = "CO2 Sequestrado";
    card1Value.innerHTML = "12.400 <span class='text-sm font-normal text-slate-400'>tons</span>";
    card1Icon.className = "p-3 bg-emerald-500/10 rounded-xl text-emerald-400";
    card1Icon.innerHTML = "<i class='fa-solid fa-tree text-xl'></i>";

    // Atualiza o Gráfico para modo Sustentável
    agroChart.data.datasets[0].label = "Índice de Reflorestamento Ativo";
    agroChart.data.datasets[0].borderColor = "#34d399";
    agroChart.data.datasets[0].backgroundColor = "rgba(52, 211, 153, 0.1)";
    agroChart.update();
});
