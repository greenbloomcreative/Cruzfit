/* =========================================================
   CRUZFIT — Catálogo digital
   Todo el catálogo vive en PRODUCTS: para añadir productos,
   colores o fotos nuevas solo hay que editar este arreglo.
   ========================================================= */

const IMG = "assets/img/";

const PRODUCTS = [
  {
    id: "top-pulse",
    name: "Top Deportivo Pulse",
    line: "Línea Pulse · Mujer",
    cats: ["mujer", "tops"],
    desc: "Top de soporte medio con escote en V de malla y banda inferior ancha. Se queda en su lugar en saltos, sprints y estiramientos.",
    colors: [
      { name: "Rosa Pulse", hex: "#f0468f", views: ["women-front.jpg", "women-stretch.jpg", "duo.jpg"] },
      { name: "Negro Onyx", hex: "#2b2b2b", views: ["women-front--negro.jpg", "women-stretch--negro.jpg", "duo--negro.jpg"] },
      { name: "Lila", hex: "#a77df0", views: ["women-front--lila.jpg", "women-stretch--lila.jpg", "duo--lila.jpg"] },
      { name: "Salvia", hex: "#8fcca0", views: ["women-front--salvia.jpg", "women-stretch--salvia.jpg", "duo--salvia.jpg"] },
      { name: "Cobalto", hex: "#2f5be0", views: ["women-front--cobalto.jpg", "women-stretch--cobalto.jpg", "duo--cobalto.jpg"] },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: ["Soporte medio", "Panel de malla transpirable", "Copas removibles", "Banda elástica de 4 cm"],
  },
  {
    id: "legging-pulse",
    name: "Leggings Pulse Tiro Alto",
    line: "Línea Pulse · Mujer",
    cats: ["mujer", "bottoms"],
    desc: "Leggings sin costuras laterales con cintura alta y líneas de compresión que estilizan y sostienen. Opacos en sentadilla profunda.",
    colors: [
      { name: "Rosa Pulse", hex: "#f0468f", views: ["leggings-detail.jpg", "women-front.jpg", "women-stretch.jpg"] },
      { name: "Negro Onyx", hex: "#2b2b2b", views: ["leggings-detail--negro.jpg", "women-front--negro.jpg", "women-stretch--negro.jpg"] },
      { name: "Lila", hex: "#a77df0", views: ["leggings-detail--lila.jpg", "women-front--lila.jpg", "women-stretch--lila.jpg"] },
      { name: "Salvia", hex: "#8fcca0", views: ["leggings-detail--salvia.jpg", "women-front--salvia.jpg", "women-stretch--salvia.jpg"] },
      { name: "Cobalto", hex: "#2f5be0", views: ["leggings-detail--cobalto.jpg", "women-front--cobalto.jpg", "women-stretch--cobalto.jpg"] },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: ["Cintura alta", "Compresión estructurada", "Malla posterior en rodilla", "Prueba de sentadilla"],
  },
  {
    id: "tee-core",
    name: "Camiseta Compresión Core",
    line: "Línea Core · Hombre",
    cats: ["hombre", "tops"],
    desc: "Camiseta de compresión manga corta con mapeo de texturas y vivos de contraste en hombros. Ajuste segunda piel para entrenar sin roces.",
    colors: [
      { name: "Negro / Lima", hex: "#111", accent: "#d3f36b", views: ["men-front.jpg", "tee-detail.jpg", "duo.jpg"] },
      { name: "Negro / Rosa", hex: "#111", accent: "#f0468f", views: ["men-front--rosa.jpg", "tee-detail--rosa.jpg", "duo--rosa.jpg"] },
      { name: "Negro / Blanco", hex: "#111", accent: "#f1f1f1", views: ["men-front--blanco.jpg", "tee-detail--blanco.jpg", "duo--blanco.jpg"] },
      { name: "Negro / Naranja", hex: "#111", accent: "#f07a2a", views: ["men-front--naranja.jpg", "tee-detail--naranja.jpg", "duo--naranja.jpg"] },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specs: ["Ajuste de compresión", "Textura mapeada en torso", "Vivos de contraste", "Secado rápido"],
  },
  {
    id: "short-core",
    name: "Short de Entrenamiento Core",
    line: "Línea Core · Hombre",
    cats: ["hombre", "bottoms"],
    desc: "Short ligero de 7\" con cordón interior y franjas curvas en color de contraste. Tela ripstop que se mueve contigo en cada zancada.",
    colors: [
      { name: "Negro / Lima", hex: "#111", accent: "#d3f36b", views: ["shorts-detail.jpg", "men-front.jpg", "tee-detail.jpg"] },
      { name: "Negro / Rosa", hex: "#111", accent: "#f0468f", views: ["shorts-detail--rosa.jpg", "men-front--rosa.jpg", "tee-detail--rosa.jpg"] },
      { name: "Negro / Blanco", hex: "#111", accent: "#f1f1f1", views: ["shorts-detail--blanco.jpg", "men-front--blanco.jpg", "tee-detail--blanco.jpg"] },
      { name: "Negro / Naranja", hex: "#111", accent: "#f07a2a", views: ["shorts-detail--naranja.jpg", "men-front--naranja.jpg", "tee-detail--naranja.jpg"] },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specs: ["Largo 7\"", "Cintura elástica con cordón", "Tejido ripstop ligero", "Logo Cruzfit bordado"],
  },
  {
    id: "set-pulse",
    name: "Set Pulse",
    line: "Set · Mujer",
    cats: ["mujer", "sets"],
    desc: "Top Deportivo Pulse + Leggings Pulse Tiro Alto. El conjunto completo en cinco tonos, pensado para moverse como una sola pieza.",
    colors: [
      { name: "Rosa Pulse", hex: "#f0468f", views: ["women-stretch.jpg", "women-front.jpg", "leggings-detail.jpg", "duo.jpg"] },
      { name: "Negro Onyx", hex: "#2b2b2b", views: ["women-stretch--negro.jpg", "women-front--negro.jpg", "leggings-detail--negro.jpg", "duo--negro.jpg"] },
      { name: "Lila", hex: "#a77df0", views: ["women-stretch--lila.jpg", "women-front--lila.jpg", "leggings-detail--lila.jpg", "duo--lila.jpg"] },
      { name: "Salvia", hex: "#8fcca0", views: ["women-stretch--salvia.jpg", "women-front--salvia.jpg", "leggings-detail--salvia.jpg", "duo--salvia.jpg"] },
      { name: "Cobalto", hex: "#2f5be0", views: ["women-stretch--cobalto.jpg", "women-front--cobalto.jpg", "leggings-detail--cobalto.jpg", "duo--cobalto.jpg"] },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: ["Incluye top + leggings", "Tallas independientes", "Compresión coordinada"],
  },
  {
    id: "set-core",
    name: "Set Core",
    line: "Set · Hombre",
    cats: ["hombre", "sets"],
    desc: "Camiseta Compresión Core + Short de Entrenamiento Core. Base negra con acentos en cuatro colores para el día de pierna y para todos los demás.",
    colors: [
      { name: "Negro / Lima", hex: "#111", accent: "#d3f36b", views: ["men-front.jpg", "tee-detail.jpg", "shorts-detail.jpg", "duo.jpg"] },
      { name: "Negro / Rosa", hex: "#111", accent: "#f0468f", views: ["men-front--rosa.jpg", "tee-detail--rosa.jpg", "shorts-detail--rosa.jpg", "duo--rosa.jpg"] },
      { name: "Negro / Blanco", hex: "#111", accent: "#f1f1f1", views: ["men-front--blanco.jpg", "tee-detail--blanco.jpg", "shorts-detail--blanco.jpg", "duo--blanco.jpg"] },
      { name: "Negro / Naranja", hex: "#111", accent: "#f07a2a", views: ["men-front--naranja.jpg", "tee-detail--naranja.jpg", "shorts-detail--naranja.jpg", "duo--naranja.jpg"] },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specs: ["Incluye camiseta + short", "Tallas independientes", "Acentos coordinados"],
  },
];

const VIEW_LABELS = {
  "women-front.jpg": "Frente",
  "women-stretch.jpg": "En movimiento",
  "leggings-detail.jpg": "Detalle",
  "men-front.jpg": "Frente",
  "tee-detail.jpg": "Detalle",
  "shorts-detail.jpg": "Detalle",
  "duo.jpg": "Colección",
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const swatchBg = (c) => c.accent ? `linear-gradient(135deg, ${c.hex} 55%, ${c.accent} 55%)` : c.hex;

/* ---------- Grid del catálogo ---------- */
function renderGrid() {
  const grid = $("#productGrid");
  grid.innerHTML = PRODUCTS.map((p) => {
    const v = p.colors[0].views;
    return `
      <button class="card" data-id="${p.id}" data-cats="${p.cats.join(" ")}" aria-label="Ver ${p.name}">
        <div class="card-media">
          <span class="card-badge">${p.cats.includes("sets") ? "Set" : p.line.split("·")[0].trim()}</span>
          <img class="img-a" src="${IMG + v[0]}" alt="${p.name}" loading="lazy" />
          <img class="img-b" src="${IMG + (v[1] || v[0])}" alt="" loading="lazy" />
        </div>
        <div class="card-body">
          <div class="card-row"><h3>${p.name}</h3></div>
          <div class="card-row">
            <span class="meta">${p.colors.length} colores · ${p.sizes[0]}–${p.sizes.at(-1)}</span>
            <span class="card-dots">${p.colors.map((c, i) => `<i class="dot${i === 0 ? " is-on" : ""}" data-c="${i}" title="${c.name}" style="background:${swatchBg(c)}"></i>`).join("")}</span>
          </div>
          <span class="card-go">Ver producto</span>
        </div>
      </button>`;
  }).join("");
  $("#statCount").textContent = String(PRODUCTS.length).padStart(2, "0");
  renderColorways();
}

/* Al pasar por un punto de color, la tarjeta muestra ese colorway */
function previewDot(dot) {
  const card = dot.closest(".card");
  const p = PRODUCTS.find((x) => x.id === card.dataset.id);
  const c = p.colors[+dot.dataset.c];
  card.dataset.color = dot.dataset.c;
  $(".img-a", card).src = IMG + c.views[0];
  $(".img-b", card).src = IMG + (c.views[1] || c.views[0]);
  $$(".dot", card).forEach((d) => d.classList.toggle("is-on", d === dot));
}

/* ---------- Gama de colores (nuevos colorways) ---------- */
function renderColorways() {
  const rows = [
    { id: "set-pulse", view: 1, label: "Línea Pulse", note: "Top + leggings · 5 tonos" },
    { id: "short-core", view: 0, label: "Línea Core", note: "Short + camiseta · 4 acentos" },
  ];
  $("#colorways").innerHTML = rows.map((r) => {
    const p = PRODUCTS.find((x) => x.id === r.id);
    return `
      <div class="cw-row">
        <div class="cw-head"><h3>${r.label}</h3><p>${r.note}</p></div>
        <div class="cw-strip">
          ${p.colors.map((c, i) => `
            <button class="cw-item" data-open="${p.id}" data-open-color="${i}" aria-label="${p.name} en ${c.name}">
              <img src="${IMG + c.views[r.view]}" alt="" loading="lazy" />
              <span class="cw-label"><i class="dot" style="background:${swatchBg(c)}"></i>${c.name}</span>
            </button>`).join("")}
        </div>
      </div>`;
  }).join("");
}

function applyFilter(cat) {
  $$(".filters button").forEach((b) => b.classList.toggle("is-on", b.dataset.filter === cat));
  $$(".bento-tabs button").forEach((b) => b.classList.toggle("is-on", b.dataset.cat === cat));
  $$("#productGrid .card").forEach((c) => {
    const show = cat === "todo" || c.dataset.cats.split(" ").includes(cat);
    c.hidden = !show;
    if (show) { c.style.animation = "none"; void c.offsetWidth; c.style.animation = ""; }
  });
}

/* ---------- Galería 3D (paneles flotantes) ---------- */
const state = { product: null, color: 0, size: null, index: 0, angle: 0 };

function cardWidth() {
  const st = $("#stage");
  const h = st.clientHeight, w = st.clientWidth;
  return Math.max(150, Math.min(w * 0.46, h * 0.62, 380));
}

function buildRing() {
  const p = state.product, c = p.colors[state.color];
  const ring = $("#ring");
  const cw = cardWidth();
  ring.style.setProperty("--cw", cw + "px");

  // Panel de ficha + un panel por vista
  const panels = [
    { spec: true },
    ...c.views.map((v) => ({ img: v })),
  ];
  const n = panels.length;
  const radius = Math.round((cw / 2) / Math.tan(Math.PI / n) + cw * 0.18);
  state.n = n; state.radius = radius;

  ring.innerHTML = panels.map((pn, i) => {
    const rot = (360 / n) * i;
    const num = String(i + 1).padStart(2, "0");
    if (pn.spec) {
      return `
      <article class="panel3d is-spec" style="transform: rotateY(${rot}deg) translateZ(${radius}px)">
        <h4>${p.name}</h4>
        <div class="pcols">
          <p>CRUZFIT<br/>${p.line.toUpperCase()}<br/><br/>${c.name.toUpperCase()}</p>
          <p>${p.desc}</p>
        </div>
        <div class="pimg">
          <img src="${IMG + c.views[0]}" alt="" />
          <img src="${IMG + (c.views[1] || c.views[0])}" alt="" />
        </div>
        <span class="pnum">${num}</span>
      </article>`;
    }
    return `
      <article class="panel3d" style="transform: rotateY(${rot}deg) translateZ(${radius}px)">
        <h4>${VIEW_LABELS[pn.img] || "Vista"}</h4>
        <div class="pcols"><p>${p.name.toUpperCase()}</p><p>${c.name} · Tallas ${p.sizes[0]}–${p.sizes.at(-1)}</p></div>
        <div class="pimg"><img src="${IMG + pn.img}" alt="${p.name} — ${VIEW_LABELS[pn.img] || "vista"}" /></div>
        <span class="pnum">${num}</span>
      </article>`;
  }).join("");
  rawIndex = state.index;
  goTo(state.index, true);
}

function goTo(i, instant = false) {
  const n = state.n;
  state.index = ((i % n) + n) % n;
  // giro por el camino más corto
  const target = -(360 / n) * i;
  state.angle = target;
  const ring = $("#ring");
  ring.classList.toggle("no-anim", instant);
  ring.style.transform = `translateZ(${-state.radius}px) rotateY(${state.angle}deg)`;
  $$(".panel3d", ring).forEach((el, k) => el.classList.toggle("is-back", k !== state.index));
  $("#stageCount").textContent = `${String(state.index + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
  $$("#pmThumbs .thumb").forEach((t, k) => t.classList.toggle("is-on", k + 1 === state.index));
  if (instant) requestAnimationFrame(() => ring.classList.remove("no-anim"));
}
let rawIndex = 0;
const step = (d) => { rawIndex += d; goTo(rawIndex); };

function renderInfo() {
  const p = state.product, c = p.colors[state.color];
  $("#pmLine").textContent = p.line;
  $("#pmTitle").textContent = p.name;
  $("#pmDesc").textContent = p.desc;
  $("#pmColorName").textContent = c.name;
  $("#pmSwatches").innerHTML = p.colors.map((col, i) =>
    `<button class="swatch ${i === state.color ? "is-on" : ""}" data-color="${i}" style="background:${swatchBg(col)}" aria-label="${col.name}"></button>`).join("");
  $("#pmSizes").innerHTML = p.sizes.map((s) =>
    `<button class="size ${s === state.size ? "is-on" : ""}" data-size="${s}">${s}</button>`).join("");
  $("#pmThumbs").innerHTML = c.views.map((v, i) =>
    `<button class="thumb" data-view="${i + 1}" aria-label="${VIEW_LABELS[v] || "Vista"}"><img src="${IMG + v}" alt="" /></button>`).join("");
  $("#pmSpecs").innerHTML = p.specs.map((s) => `<li>${s}</li>`).join("");
  updateCta();
}

function updateCta() {
  const p = state.product;
  $("#pmCta").textContent = state.size ? `Consultar ${p.name} · ${state.size}` : "Consultar disponibilidad";
}

function openProduct(id, color = 0) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  Object.assign(state, { product: p, color: Math.min(+color || 0, p.colors.length - 1), size: null, index: 0 });
  rawIndex = 0;
  const m = $("#pmodal");
  m.hidden = false;
  document.body.classList.add("is-locked");
  renderInfo();
  requestAnimationFrame(buildRing);
  history.replaceState(null, "", "#producto-" + id);
  $(".pmodal-close").focus({ preventScroll: true });
}

function closeProduct() {
  $("#pmodal").hidden = true;
  document.body.classList.remove("is-locked");
  history.replaceState(null, "", "#catalogo");
}

/* ---------- Arrastre en el escenario 3D ---------- */
function initDrag() {
  const st = $("#stage");
  let x0 = null, moved = 0;
  st.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button")) return;
    x0 = e.clientX; moved = 0; st.classList.add("is-drag");
    $("#ring").classList.add("no-anim");
  });
  window.addEventListener("pointermove", (e) => {
    if (x0 === null) return;
    moved = e.clientX - x0;
    $("#ring").style.transform = `translateZ(${-state.radius}px) rotateY(${state.angle + moved * 0.25}deg)`;
  });
  window.addEventListener("pointerup", () => {
    if (x0 === null) return;
    st.classList.remove("is-drag");
    $("#ring").classList.remove("no-anim");
    const shift = Math.round((moved * 0.25) / (360 / state.n));
    x0 = null;
    step(-shift || 0);
  });
}

/* ---------- Banner: coloca los textos en los huecos de las letras ---------- */
function layoutHero() {
  const poster = $(".hero-poster");
  if (!poster) return;
  const fs = parseFloat(getComputedStyle($(".hero-type")).fontSize);
  const gap = fs * 0.06;
  const box = poster.getBoundingClientRect();
  const end = (el) => el.getBoundingClientRect().right - box.left;
  poster.style.setProperty("--for-end", end($(".l2")) + gap + "px");
  poster.style.setProperty("--vity-end", end($(".l4")) + gap + "px");
  poster.style.setProperty("--vity-start", $(".l4").getBoundingClientRect().left - box.left + "px");
}

/* ---------- Eventos ---------- */
function init() {
  renderGrid();
  initDrag();
  layoutHero();
  document.fonts && document.fonts.ready.then(layoutHero);

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) {
      const dot = e.target.closest(".dot[data-c]");
      return openProduct(card.dataset.id, dot ? dot.dataset.c : card.dataset.color);
    }

    const opener = e.target.closest("[data-open]");
    if (opener) { e.preventDefault(); return openProduct(opener.dataset.open, opener.dataset.openColor); }

    if (e.target.closest("[data-close]")) return closeProduct();

    const f = e.target.closest("[data-filter]");
    if (f) return applyFilter(f.dataset.filter);

    const bt = e.target.closest("[data-cat]");
    if (bt) return applyFilter(bt.dataset.cat);

    const go = e.target.closest("[data-cat-go], [data-filter-link]");
    if (go) applyFilter(go.dataset.catGo || go.dataset.filterLink);

    const sw = e.target.closest("[data-color]");
    if (sw) { state.color = +sw.dataset.color; state.index = 0; rawIndex = 0; renderInfo(); buildRing(); return; }

    const sz = e.target.closest("[data-size]");
    if (sz) { state.size = sz.dataset.size; $$("#pmSizes .size").forEach((b) => b.classList.toggle("is-on", b === sz)); updateCta(); return; }

    const th = e.target.closest("[data-view]");
    if (th) {
      let d = +th.dataset.view - state.index;
      if (d > state.n / 2) d -= state.n;
      if (d < -state.n / 2) d += state.n;
      rawIndex += d; goTo(rawIndex); return;
    }

    if (e.target.closest("#pmCta")) closeProduct();
  });

  document.addEventListener("pointerover", (e) => {
    const dot = e.target.closest("#productGrid .dot[data-c]");
    if (dot) previewDot(dot);
  });

  $("#prevCard").addEventListener("click", () => step(-1));
  $("#nextCard").addEventListener("click", () => step(1));

  document.addEventListener("keydown", (e) => {
    if ($("#pmodal").hidden) {
      if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-open][role=button]")) { e.preventDefault(); openProduct(e.target.dataset.open); }
      return;
    }
    if (e.key === "Escape") closeProduct();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  let rt;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(() => { layoutHero(); if (!$("#pmodal").hidden) buildRing(); }, 150);
  });

  const m = location.hash.match(/^#producto-(.+)$/);
  if (m) openProduct(m[1]);
}

document.addEventListener("DOMContentLoaded", init);
