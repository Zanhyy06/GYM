const content = document.getElementById('content');
const pageTitle = document.getElementById('pageTitle');

const views = {
  overview: `
    <div class="grid overview-grid">
      <article class="card hero-card">
        <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85" alt="Entrenamiento de fuerza" />
        <div class="hero-content">
          <div class="hero-label"><i data-lucide="flame"></i> RUTINA DE HOY</div>
          <h2>FUERZA &<br>RESISTENCIA</h2>
          <p>Entrenamiento completo de tren superior. Mantén el control de cada repetición.</p>
          <div class="progress-track"><span></span></div>
          <div class="progress-meta"><span><strong>72%</strong> completado</span><span>45 min</span></div>
        </div>
      </article>

      <article class="card stats-card">
        <div class="card-header"><h2>Tu actividad</h2><button aria-label="Más opciones">•••</button></div>
        <div class="stat-row"><div class="stat-icon lime"><i data-lucide="clock-3"></i></div><div><strong>8h 25m</strong><small>Tiempo activo</small></div><span class="delta">+12%</span></div>
        <div class="stat-row"><div class="stat-icon orange"><i data-lucide="flame"></i></div><div><strong>2.840</strong><small>Calorías quemadas</small></div><span class="delta">+8%</span></div>
        <div class="stat-row"><div class="stat-icon purple"><i data-lucide="calendar-check"></i></div><div><strong>12</strong><small>Sesiones este mes</small></div><span class="delta">+3</span></div>
      </article>

      <article class="card chart-card">
        <div class="card-header"><h2>Progreso semanal</h2><button class="filter-button"><i data-lucide="calendar-days"></i> Esta semana <i data-lucide="chevron-down"></i></button></div>
        <div class="chart-wrap">
          <svg viewBox="0 0 700 180" preserveAspectRatio="none" aria-label="Gráfico de actividad semanal">
            <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9f31d" stop-opacity=".42"/><stop offset="1" stop-color="#c9f31d" stop-opacity="0"/></linearGradient></defs>
            <g stroke="#edf0e8" stroke-width="1"><line x1="0" y1="20" x2="700" y2="20"/><line x1="0" y1="70" x2="700" y2="70"/><line x1="0" y1="120" x2="700" y2="120"/><line x1="0" y1="170" x2="700" y2="170"/></g>
            <path d="M0,145 C55,150 75,105 115,112 C160,120 180,76 230,82 C280,88 300,38 350,52 C405,68 430,32 465,38 C520,45 560,86 600,64 C650,40 665,28 700,18 L700,180 L0,180 Z" fill="url(#area)"/>
            <path d="M0,145 C55,150 75,105 115,112 C160,120 180,76 230,82 C280,88 300,38 350,52 C405,68 430,32 465,38 C520,45 560,86 600,64 C650,40 665,28 700,18" fill="none" stroke="#91ab12" stroke-width="3"/>
            <circle cx="350" cy="52" r="6" fill="#171916" stroke="#c9f31d" stroke-width="4"/><circle cx="700" cy="18" r="5" fill="#171916" stroke="#c9f31d" stroke-width="3"/>
          </svg>
        </div>
        <div class="grid-labels"><span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span></div>
      </article>

      <article class="card research-card"><span class="tag">SEMILLERO DE INVESTIGACIÓN</span><h2>Descubre nuevos métodos de entrenamiento</h2><p>Conoce los proyectos y resultados más recientes del equipo académico.</p><button data-action="research"><span>Explorar investigación</span><i data-lucide="arrow-up-right"></i></button></article>
    </div>`,
  routines: `
    <div class="section-head"><div><h2>Mis rutinas</h2><p>Planes personalizados según tus objetivos.</p></div><button class="filter-button"><i data-lucide="sliders-horizontal"></i> Filtrar</button></div>
    <div class="grid routines-grid">
      <article class="card exercise-card"><div class="exercise-image"></div><div class="exercise-info"><span class="meta">TREN SUPERIOR · 45 MIN</span><h3>Fuerza & resistencia</h3><button data-action="start">Comenzar rutina</button></div></article>
      <article class="card exercise-card"><div class="exercise-image"></div><div class="exercise-info"><span class="meta">CARDIO · 30 MIN</span><h3>Resistencia metabólica</h3><button data-action="start">Comenzar rutina</button></div></article>
      <article class="card exercise-card"><div class="exercise-image"></div><div class="exercise-info"><span class="meta">CUERPO COMPLETO · 50 MIN</span><h3>Hipertrofia avanzada</h3><button data-action="start">Comenzar rutina</button></div></article>
    </div>`,
  attendance: `
    <div class="section-head"><div><h2>Control de asistencia</h2><p>Registro mensual y seguimiento de permanencia.</p></div><button class="primary-button" data-action="attendance"><i data-lucide="plus"></i> Nuevo registro</button></div>
    <div class="grid attendance-layout">
      <article class="card calendar-card"><div class="card-header" style="padding:0"><h2>Noviembre 2026</h2><button class="filter-button"><i data-lucide="calendar-days"></i> Mes actual</button></div><div class="calendar"><span class="weekday">LUN</span><span class="weekday">MAR</span><span class="weekday">MIÉ</span><span class="weekday">JUE</span><span class="weekday">VIE</span><span class="weekday">SÁB</span><span class="weekday">DOM</span><span class="day muted">26</span><span class="day muted">27</span><span class="day muted">28</span><span class="day muted">29</span><span class="day muted">30</span><span class="day muted">31</span><span class="day">1</span><span class="day present">2</span><span class="day">3</span><span class="day present">4</span><span class="day">5</span><span class="day present">6</span><span class="day">7</span><span class="day">8</span><span class="day present">9</span><span class="day">10</span><span class="day present">11</span><span class="day">12</span><span class="day present">13</span><span class="day">14</span><span class="day">15</span><span class="day selected">16</span><span class="day present">17</span><span class="day">18</span><span class="day present">19</span><span class="day present">20</span><span class="day">21</span><span class="day">22</span><span class="day present">23</span><span class="day">24</span><span class="day">25</span><span class="day">26</span><span class="day">27</span><span class="day">28</span><span class="day">29</span><span class="day">30</span></div></article>
      <article class="card alert-card"><span class="tag">ALERTAS DE PERMANENCIA</span><h3>Socios a revisar</h3><div class="alert-item"><div class="avatar">AM</div><div><strong>Ana Martínez</strong><small>12 días sin asistir</small></div><span class="risk">Riesgo</span></div><div class="alert-item"><div class="avatar">JL</div><div><strong>Juan López</strong><small>9 días sin asistir</small></div><span class="risk">Atención</span></div><div class="alert-item"><div class="avatar">CR</div><div><strong>Carlos Ruiz</strong><small>7 días sin asistir</small></div><span class="risk">Atención</span></div></article>
    </div>`,
  research: `
    <div class="section-head"><div><h2>Vitrina académica</h2><p>Investigación aplicada al rendimiento físico y bienestar.</p></div><button class="filter-button"><i data-lucide="search"></i> Buscar</button></div>
    <div class="grid research-grid"><article class="card article"><span class="article-number">01</span><h3>Hábitos digitales en el entrenamiento</h3><p>Análisis del comportamiento de los usuarios que utilizan plataformas inteligentes para registrar su actividad.</p><div class="article-footer"><span>Ingeniería deportiva · 2026</span><button><i data-lucide="arrow-up-right"></i></button></div></article><article class="card article"><span class="article-number">02</span><h3>Alertas tempranas de deserción</h3><p>Modelado basado en reglas simples para identificar cambios de permanencia en gimnasios comunitarios.</p><div class="article-footer"><span>Datos e investigación · 2026</span><button><i data-lucide="arrow-up-right"></i></button></div></article></div>`
};

function renderView(view) {
  content.innerHTML = views[view];
  document.querySelectorAll('.nav-item[data-view]').forEach(item => item.classList.toggle('active', item.dataset.view === view));
  const titles = { overview:'Buen día, Santiago', routines:'Mis rutinas', attendance:'Control de asistencia', research:'Investigación' };
  pageTitle.innerHTML = view === 'overview' ? `${titles[view]} <span>👋</span>` : titles[view];
  document.getElementById('sidebar').classList.remove('open');
  lucide.createIcons();
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.querySelector('span').textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

document.querySelectorAll('.nav-item[data-view]').forEach(item => item.addEventListener('click', () => renderView(item.dataset.view)));
document.getElementById('menuButton').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));
document.getElementById('quickAction').addEventListener('click', () => showToast('Asistencia registrada correctamente'));
document.addEventListener('click', event => {
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'research') renderView('research');
  if (action === 'start') showToast('Rutina iniciada');
  if (action === 'attendance') showToast('Registro de asistencia agregado');
});

const now = new Date();
const day = now.toLocaleDateString('es-CO', { weekday:'long', day:'2-digit', month:'short' }).toUpperCase();
document.getElementById('dayLabel').textContent = day;
renderView('overview');
