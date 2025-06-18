// Modo oscuro
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<span class="icon">☀️</span><span>Modo Claro</span>';
}

themeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<span class="icon">🌙</span><span>Modo Oscuro</span>';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<span class="icon">☀️</span><span>Modo Claro</span>';
    }
    
    // Actualizar gráficos al cambiar tema
    if (typeof Chart !== 'undefined') {
        Chart.getChart('chartSalidas').update();
        Chart.getChart('chartMateriales').update();
    }
});