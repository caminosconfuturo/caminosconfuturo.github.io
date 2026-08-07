/* ==========================================================================
   Asociación Caminos con Futuro — prototipo
   Cabecera, pie y elementos flotantes se inyectan aquí para que el prototipo
   tenga una sola fuente de verdad de navegación. En la web final (Lovable /
   framework) esto son componentes; aquí es JS plano y sin dependencias.
   ========================================================================== */

const WA = 'https://wa.me/34645788999?text=' +
  encodeURIComponent('Hola, me gustaría informarme sobre vuestros servicios');
const TEL_MOVIL = '+34645788999';
const TEL_FIJO = '+34854642132';
const MAPS = 'https://www.google.com/maps/search/?api=1&query=Calle+%C3%81guila+Perdicera+5+41006+Sevilla';

const AREAS = [
  { slug:'intervencion-educativa',          nombre:'Intervención educativa',        clase:'area--educativa' },
  { slug:'intervencion-terapeutica',        nombre:'Intervención terapéutica',      clase:'area--terapeutica' },
  { slug:'orientacion-familiar',            nombre:'Orientación y apoyo familiar',  clase:'area--familiar' },
  { slug:'inclusion-y-desarrollo-personal', nombre:'Inclusión y desarrollo personal', clase:'area--inclusion' },
  { slug:'otros-servicios',                 nombre:'Otros servicios',               clase:'area--otros' }
];

/* ---------------------------------------------------------------- Iconos */
const I = {
  camino:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21c2-6 5-8 8-8s6-3 8-9"/><circle cx="6" cy="19" r="1.6" fill="currentColor" stroke="none"/><circle cx="18" cy="6" r="1.6" fill="currentColor" stroke="none"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1s-.7 1-.9 1.2c-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.8-1.3-1.3-2.9-1.3-4.5 0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.4-8.2 8.4z"/></svg>',
  tel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.8a2 2 0 0 1 1.7 2z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  reloj:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
  ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  cerrar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  caret:'<svg class="nav__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'
};

/* ---------------------------------------------------------------- Helpers */
const raiz = () => (document.body.dataset.raiz || './');
const logo = extra => `
  <a class="logo" href="${raiz()}index.html" ${extra || ''}>
    <span class="logo__marca"><img src="${raiz()}assets/logo-isotipo.png" alt="" width="46" height="48"></span>
    <span class="logo__txt">Caminos con Futuro<small>Asociación · Sevilla</small></span>
  </a>`;

/* Lockup completo (símbolo + tipografía) para el pie */
const logoCompleto = () => `
  <a class="logo logo--pie" href="${raiz()}index.html">
    <img src="${raiz()}assets/logo-completo-pie.png"
         alt="Asociación Caminos con Futuro. Centro de intervención educativa, terapéutica, social y familiar"
         width="260" height="267">
  </a>`;


/* ---------------------------------------------- Aviso de borrador (temporal)
   Quitar esta función y su llamada cuando la web pase a producción. */
function bannerBorrador() {
  const el = document.createElement('div');
  el.className = 'borrador';
  el.innerHTML = `
    <div class="contenedor">
      <div class="borrador__inner">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
        <p><b>Borrador de trabajo.</b> Textos provisionales. Los recuadros
        <span class="muestra">PLACEHOLDER</span> marcan la información que falta.</p>
        <button class="borrador__cerrar" type="button" aria-label="Ocultar este aviso">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    </div>`;
  document.body.insertBefore(el, document.body.firstChild);
  el.querySelector('button').addEventListener('click', () => el.remove());
}

/* ---------------------------------------------------------------- Cabecera */
function cabecera() {
  const r = raiz();
  const activa = document.body.dataset.pagina || '';
  const marca = p => (activa === p ? ' aria-current="page"' : '');
  const areas = AREAS.map(a => `
    <li class="${a.clase}"><a href="${r}servicios-${a.slug}.html"><span class="punto" aria-hidden="true"></span>${a.nombre}</a></li>`).join('');

  document.getElementById('cabecera').innerHTML = `
    <div class="contenedor cabecera__inner">
      ${logo('aria-label="Caminos con Futuro, ir al inicio"')}
      <ul class="nav">
        <li><a href="${r}index.html"${marca('inicio')}>Inicio</a></li>
        <li><a href="${r}quienes-somos.html"${marca('quienes')}>Quiénes somos</a></li>
        <li class="desplegable">
          <button type="button" aria-expanded="false" aria-controls="panel-servicios">Servicios ${I.caret}</button>
          <ul class="desplegable__panel" id="panel-servicios">
            <li><a href="${r}servicios.html"><span class="punto" aria-hidden="true" style="background:var(--tinta-tenue)"></span>Todas las áreas</a></li>
            ${areas}
          </ul>
        </li>
        <li><a href="${r}opiniones.html"${marca('opiniones')}>Opiniones</a></li>
        <li><a href="${r}contacto.html"${marca('contacto')}>Contacto</a></li>
      </ul>
      <a class="btn btn--primario cabecera__cta" href="${r}contacto.html">Pide tu cita</a>
      <button class="hamburguesa" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="menu-movil">${I.menu}</button>
    </div>

    <div class="menu-movil" id="menu-movil" data-open="false" role="dialog" aria-modal="true" aria-label="Menú de navegación" hidden>
      <div class="menu-movil__top">
        ${logo()}
        <button class="hamburguesa" type="button" data-cerrar aria-label="Cerrar menú">${I.cerrar}</button>
      </div>
      <nav aria-label="Navegación principal">
        <a href="${r}index.html">Inicio</a>
        <a href="${r}quienes-somos.html">Quiénes somos</a>
        <a href="${r}servicios.html">Servicios</a>
        ${AREAS.map(a => `<a class="sub ${a.clase}" href="${r}servicios-${a.slug}.html"><span class="punto" aria-hidden="true"></span>${a.nombre}</a>`).join('')}
        <a href="${r}opiniones.html">Opiniones</a>
        <a href="${r}contacto.html">Contacto</a>
      </nav>
      <a class="btn btn--primario btn--bloque" href="${WA}" target="_blank" rel="noopener">${I.wa} Escríbenos por WhatsApp</a>
    </div>`;
}

/* ---------------------------------------------------------------- Franja CTA */
function ctaBand() {
  const el = document.getElementById('cta-band');
  if (!el) return;
  el.innerHTML = `
    <div class="contenedor">
      <div class="cta-band__grid">
        <div>
          <h2>¿Hablamos de vuestro caso?</h2>
          <p>Cuéntanos qué necesitáis y os orientamos sin compromiso. Atendemos en Sevilla capital y también online para familias de la provincia.</p>
        </div>
        <div class="acciones">
          <a class="btn btn--claro" href="${WA}" target="_blank" rel="noopener">${I.wa} WhatsApp</a>
          <a class="btn btn--fantasma" href="tel:${TEL_MOVIL}">${I.tel} 645 788 999</a>
        </div>
      </div>
    </div>`;
}

/* ---------------------------------------------------------------- Pie */
function pie() {
  const r = raiz();
  document.getElementById('pie').innerHTML = `
    <div class="contenedor">
      <div class="pie__grid">
        <div>
          ${logoCompleto()}
          <p>Acompañamos a niños, adolescentes, jóvenes y a sus familias en su desarrollo, su autonomía y su bienestar.</p>
          <div class="redes">
            <a href="https://www.instagram.com/asoc.caminosconfuturo" target="_blank" rel="noopener" aria-label="Instagram de Caminos con Futuro">${I.ig}</a>
          </div>
        </div>
        <div>
          <h4>Navegación</h4>
          <ul>
            <li><a href="${r}index.html">Inicio</a></li>
            <li><a href="${r}quienes-somos.html">Quiénes somos</a></li>
            <li><a href="${r}servicios.html">Servicios</a></li>
            <li><a href="${r}opiniones.html">Opiniones</a></li>
            <li><a href="${r}contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4>Áreas de intervención</h4>
          <ul>${AREAS.map(a => `<li><a href="${r}servicios-${a.slug}.html">${a.nombre}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li><a href="${MAPS}" target="_blank" rel="noopener">Calle Águila Perdicera 5, bajo 2<br>41006 Sevilla</a></li>
            <li><a href="tel:${TEL_MOVIL}">645 788 999</a> · <a href="tel:${TEL_FIJO}">854 642 132</a></li>
            <li><span class="etiqueta-ph" style="margin:0">PLACEHOLDER: EMAIL_PUBLICO</span></li>
            <li>Lunes a viernes, 9:00–21:00</li>
          </ul>
        </div>
      </div>
      <div class="pie__legal">
        <span>© 2026 Asociación Caminos con Futuro</span>
        <ul>
          <li><a href="${r}legal.html">Aviso legal</a></li>
          <li><a href="${r}legal.html">Política de privacidad</a></li>
          <li><a href="${r}legal.html">Política de cookies</a></li>
        </ul>
      </div>
    </div>`;
}

/* ---------------------------------------------------------------- Flotantes */
function flotantes() {
  const cont = document.getElementById('flotantes');
  if (!cont) return;
  cont.innerHTML = `
    <a class="fab-wa" href="${WA}" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">${I.wa}</a>
    <nav class="barra-movil" aria-label="Acciones rápidas">
      <ul>
        <li><a href="tel:${TEL_MOVIL}">${I.tel}<span>Llamar</span></a></li>
        <li><a class="wa" href="${WA}" target="_blank" rel="noopener">${I.wa}<span>WhatsApp</span></a></li>
        <li><a href="${MAPS}" target="_blank" rel="noopener">${I.pin}<span>Cómo llegar</span></a></li>
      </ul>
    </nav>
    <aside class="cookies" id="cookies" hidden>
      <p><strong>Usamos cookies técnicas.</strong> Este prototipo no instala analítica ni cookies de terceros.</p>
      <div class="acciones">
        <button class="btn btn--verde" type="button" data-cookies="ok">Aceptar</button>
        <a class="btn btn--secundario" href="${raiz()}legal.html">Más información</a>
      </div>
    </aside>`;
}

/* ---------------------------------------------------------------- Interacciones */
function interacciones() {
  // Sombra de cabecera al hacer scroll
  const cab = document.querySelector('.cabecera');
  const onScroll = () => cab.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });

  // Desplegable de servicios (teclado + ratón)
  const disp = document.querySelector('.desplegable');
  if (disp) {
    const btn = disp.querySelector('button');
    const panel = disp.querySelector('.desplegable__panel');
    const abrir = v => { panel.dataset.open = v; btn.setAttribute('aria-expanded', v); };
    btn.addEventListener('click', () => abrir(btn.getAttribute('aria-expanded') !== 'true'));
    disp.addEventListener('mouseenter', () => abrir(true));
    disp.addEventListener('mouseleave', () => abrir(false));
    disp.addEventListener('focusout', e => { if (!disp.contains(e.relatedTarget)) abrir(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') abrir(false); });
  }

  // Menú móvil
  const menu = document.getElementById('menu-movil');
  const abridor = document.querySelector('.cabecera__inner .hamburguesa');
  const cerrador = menu && menu.querySelector('[data-cerrar]');
  const toggleMenu = v => {
    menu.hidden = !v;
    requestAnimationFrame(() => { menu.dataset.open = v; });
    abridor.setAttribute('aria-expanded', v);
    document.body.style.overflow = v ? 'hidden' : '';
    if (v) menu.querySelector('a').focus(); else abridor.focus();
  };
  if (menu && abridor) {
    abridor.addEventListener('click', () => toggleMenu(true));
    cerrador.addEventListener('click', () => toggleMenu(false));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) toggleMenu(false); });
  }

  // Cookies
  const cookies = document.getElementById('cookies');
  if (cookies) {
    setTimeout(() => { cookies.hidden = false; }, 1200);
    cookies.querySelector('[data-cookies]').addEventListener('click', () => { cookies.hidden = true; });
  }

  // Aparición al hacer scroll (una sola vez)
  const nodos = document.querySelectorAll('.reveal');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entradas, obs) => {
      entradas.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { rootMargin:'0px 0px -8% 0px', threshold:0.08 });
    nodos.forEach(n => io.observe(n));
  } else {
    nodos.forEach(n => n.classList.add('visible'));
  }

  // Formulario de contacto (prototipo: no envía)
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const ok = form.querySelector('.form-ok');
      if (ok) { ok.hidden = false; ok.focus(); }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  bannerBorrador();
  cabecera(); ctaBand(); pie(); flotantes(); interacciones();
});
