/* =========================================================
   CRUZFIT — Catálogo digital
   - Portadas (banner, categorías, marca): fotos reales de los modelos.
   - Productos: renders de estudio generados en garments.js, en cualquier color.
   Para añadir productos o colores solo hay que editar PRODUCTS.
   ========================================================= */

const IMG = "assets/img/";

const PALETTE = {
  pulse: [
    { name: "Rosa Pulse", base: "#e8418a", accent: "#ffc2dc" },
    { name: "Negro Onyx", base: "#1d1d1f", accent: "#e8418a" },
    { name: "Lila", base: "#a17fe0", accent: "#ece4ff" },
    { name: "Salvia", base: "#93c3a4", accent: "#2f5b40" },
    { name: "Cobalto", base: "#2f56d8", accent: "#c3d0ff" },
  ],
  core: [
    { name: "Negro / Lima", base: "#161616", accent: "#d4f26a" },
    { name: "Marino / Naranja", base: "#1b2640", accent: "#f07a2a" },
    { name: "Oliva / Hueso", base: "#4d5631", accent: "#eee6d4" },
    { name: "Grafito / Rosa", base: "#5d6166", accent: "#f0468f" },
    { name: "Arena / Negro", base: "#cdbb96", accent: "#151515" },
  ],
  longW: [
    { name: "Arena", base: "#cdbb96", accent: "#7a6a4c" },
    { name: "Cacao", base: "#5a3e33", accent: "#e2c3aa" },
    { name: "Salvia", base: "#93c3a4", accent: "#2f5b40" },
    { name: "Hueso", base: "#ece6da", accent: "#a2937a" },
  ],
  longM: [
    { name: "Carbón", base: "#2a2a2c", accent: "#d4f26a" },
    { name: "Oliva", base: "#4d5631", accent: "#eee6d4" },
    { name: "Piedra", base: "#9b968c", accent: "#232325" },
    { name: "Marino", base: "#1b2640", accent: "#f07a2a" },
  ],
};

const PRODUCTS = [
  // ---------- Colección 02 · Longevity (nueva) ----------
  { id: "crop-longevity", col: 2, name: "Crop Manga Larga Longevity", line: "Longevity · Mujer", cats: ["mujer", "tops"], render: "crop", palette: "longW",
    desc: "Crop de manga larga con orificio para el pulgar y vivos que siguen el hombro. Ajuste ceñido que acompaña desde el calentamiento hasta el último estiramiento.",
    sizes: ["XS", "S", "M", "L", "XL"], specs: ["Manga larga con orificio para el pulgar", "Largo crop a la cintura", "Tejido acanalado suave", "Vivos de contraste"] },
  { id: "bike-longevity", col: 2, name: "Bike Short Longevity 6\"", line: "Longevity · Mujer", cats: ["mujer", "bottoms"], render: "bike", palette: "longW",
    desc: "Bike short de tiro alto con paneles laterales y bolsillo para el teléfono. 6\" de largo que no se suben al correr.",
    sizes: ["XS", "S", "M", "L", "XL"], specs: ["Largo 6\"", "Bolsillo lateral para teléfono", "Cintura alta sin costura", "Opaco en sentadilla"] },
  { id: "tank-longevity", col: 2, name: "Tank Longevity", line: "Longevity · Hombre", cats: ["hombre", "tops"], render: "tank", palette: "longM",
    desc: "Tank de sisa amplia con vivos en el contorno y costuras laterales desplazadas para que no rocen. Para días de calor y sesiones largas.",
    sizes: ["S", "M", "L", "XL", "XXL"], specs: ["Sisa amplia", "Costuras laterales desplazadas", "Secado rápido", "Logo frontal"] },
  { id: "jogger-longevity", col: 2, name: "Jogger Longevity", line: "Longevity · Hombre", cats: ["hombre", "bottoms"], render: "jogger", palette: "longM",
    desc: "Jogger cónico con puño acanalado, bolsillos con cierre y cordón interior. Del gimnasio a la calle sin cambiarte.",
    sizes: ["S", "M", "L", "XL", "XXL"], specs: ["Bolsillos con cierre", "Puño acanalado", "Cordón interior", "Tela elástica en 4 direcciones"] },
  { id: "set-longevity-w", col: 2, name: "Set Longevity Mujer", line: "Set · Mujer", cats: ["mujer", "sets"], set: ["crop", "bike"], palette: "longW",
    desc: "Crop Manga Larga + Bike Short. El conjunto de la colección Longevity en tonos tierra.",
    sizes: ["XS", "S", "M", "L", "XL"], specs: ["Incluye crop + bike short", "Tallas independientes", "Colores coordinados"] },
  { id: "set-longevity-m", col: 2, name: "Set Longevity Hombre", line: "Set · Hombre", cats: ["hombre", "sets"], set: ["tank", "jogger"], palette: "longM",
    desc: "Tank + Jogger. El conjunto de la colección Longevity para entrenar y moverte todo el día.",
    sizes: ["S", "M", "L", "XL", "XXL"], specs: ["Incluye tank + jogger", "Tallas independientes", "Colores coordinados"] },

  // ---------- Colección 01 · Core & Pulse ----------
  { id: "top-pulse", col: 1, name: "Top Deportivo Pulse", line: "Pulse · Mujer", cats: ["mujer", "tops"], render: "bra", palette: "pulse",
    desc: "Top de soporte medio con escote en V de malla y banda inferior ancha. Se queda en su lugar en saltos, sprints y estiramientos.",
    sizes: ["XS", "S", "M", "L", "XL"], specs: ["Soporte medio", "Panel de malla transpirable", "Espalda nadadora", "Banda elástica de 4 cm"] },
  { id: "legging-pulse", col: 1, name: "Leggings Pulse Tiro Alto", line: "Pulse · Mujer", cats: ["mujer", "bottoms"], render: "leggings", palette: "pulse",
    desc: "Leggings sin costuras laterales con cintura alta y líneas de compresión que estilizan y sostienen. Opacos en sentadilla profunda.",
    sizes: ["XS", "S", "M", "L", "XL"], specs: ["Cintura alta", "Compresión estructurada", "Malla posterior en rodilla", "Prueba de sentadilla"] },
  { id: "tee-core", col: 1, name: "Camiseta Compresión Core", line: "Core · Hombre", cats: ["hombre", "tops"], render: "tee", palette: "core",
    desc: "Camiseta de compresión manga corta con paneles texturizados y vivos raglán. Ajuste segunda piel para entrenar sin roces.",
    sizes: ["S", "M", "L", "XL", "XXL"], specs: ["Ajuste de compresión", "Paneles laterales texturizados", "Vivos raglán de contraste", "Secado rápido"] },
  { id: "short-core", col: 1, name: "Short de Entrenamiento Core", line: "Core · Hombre", cats: ["hombre", "bottoms"], render: "shorts", palette: "core",
    desc: "Short ligero de 7\" con cordón interior y franjas curvas de contraste. Tela ripstop que se mueve contigo en cada zancada.",
    sizes: ["S", "M", "L", "XL", "XXL"], specs: ["Largo 7\"", "Cintura elástica con cordón", "Tejido ripstop ligero", "Franjas de contraste"] },
  { id: "set-pulse", col: 1, name: "Set Pulse", line: "Set · Mujer", cats: ["mujer", "sets"], set: ["bra", "leggings"], palette: "pulse",
    desc: "Top Deportivo Pulse + Leggings Pulse Tiro Alto. El conjunto completo, pensado para moverse como una sola pieza.",
    sizes: ["XS", "S", "M", "L", "XL"], specs: ["Incluye top + leggings", "Tallas independientes", "Compresión coordinada"] },
  { id: "set-core", col: 1, name: "Set Core", line: "Set · Hombre", cats: ["hombre", "sets"], set: ["tee", "shorts"], palette: "core",
    desc: "Camiseta Compresión Core + Short de Entrenamiento Core, en cinco combinaciones de tela y vivos.",
    sizes: ["S", "M", "L", "XL", "XXL"], specs: ["Incluye camiseta + short", "Tallas independientes", "Vivos coordinados"] },
];
PRODUCTS.forEach((p) => { p.colors = PALETTE[p.palette]; });

/* Vistas de cada producto */
function viewsOf(p) {
  if (p.set) return [
    { key: "set", label: "Set completo" },
    { key: "top", label: "Parte de arriba" },
    { key: "bottom", label: "Parte de abajo" },
    { key: "colors", label: "Todos los colores" },
  ];
  return [
    { key: "front", label: "Frente" },
    { key: "back", label: "Espalda" },
    { key: "detail", label: "Detalle" },
    { key: "colors", label: "Todos los colores" },
  ];
}

function renderView(p, colorIdx, key) {
  const c = p.colors[colorIdx];
  const col = { base: c.base, accent: c.accent };
  const label = `${p.name} — ${c.name}`;
  if (key === "colors") {
    return lineupSVG(p.set ? p.set[0] : p.render, p.colors.map((x) => ({ base: x.base, accent: x.accent })), { label: `${p.name} — todos los colores` });
  }
  if (p.set) {
    if (key === "set") return setSVG([p.set[0], col], [p.set[1], col], "front", { label });
    if (key === "top") return garmentSVG(p.set[0], col, "front", { label });
    if (key === "bottom") return garmentSVG(p.set[1], col, "front", { label });
    return setSVG([p.set[0], col], [p.set[1], col], "back", { label });
  }
  return garmentSVG(p.render, col, key, { label });
}

/* Portadas del bento por categoría (fotos reales) */
const BENTO = {
  todo: {
    a: { img: "women-stretch.jpg", pos: "50% 22%", title: "Mujer", text: "Pulse y la nueva Longevity: tops, leggings y bike shorts.", go: "mujer" },
    b: { img: "men-front.jpg", pos: "50% 30%", pill: "Hombre", title: "Hombre", text: "Core y la nueva Longevity: compresión, tanks y joggers.", go: "hombre" },
    cream: { id: "set-longevity-w", eyebrow: "Nuevo · Colección 02", title: "Longevity: tonos tierra, manga larga y bike shorts para entrenar todos los días.", text: "Cuatro piezas nuevas y dos sets, en arena, cacao, salvia, hueso, carbón, oliva, piedra y marino." },
    mini: { id: "jogger-longevity" },
  },
  mujer: {
    a: { img: "women-front.jpg", pos: "50% 20%", title: "Mujer", text: "Tops, leggings y bike shorts de tiro alto.", go: "mujer" },
    b: { img: "women-stretch.jpg", pos: "50% 25%", pill: "Mujer", title: "Línea Pulse", text: "Soporte y compresión en cinco colores.", open: "set-pulse" },
    cream: { id: "crop-longevity", eyebrow: "Mujer · Nuevo", title: "Crop Manga Larga Longevity: orificio para el pulgar y vivos que siguen el hombro.", text: "Combínalo con el Bike Short de 6\" para el set completo." },
    mini: { id: "legging-pulse" },
  },
  hombre: {
    a: { img: "shorts-detail.jpg", pos: "50% 45%", title: "Hombre", text: "Compresión, shorts, tanks y joggers.", go: "hombre" },
    b: { img: "men-front.jpg", pos: "50% 30%", pill: "Hombre", title: "Línea Core", text: "Camiseta y short en cinco combinaciones de color.", open: "set-core" },
    cream: { id: "tank-longevity", eyebrow: "Hombre · Nuevo", title: "Tank Longevity: sisa amplia y costuras desplazadas para sesiones largas.", text: "En carbón, oliva, piedra y marino." },
    mini: { id: "jogger-longevity" },
  },
  tops: {
    a: { img: "women-front.jpg", pos: "50% 20%", title: "Tops mujer", text: "Top Pulse y Crop Manga Larga.", open: "top-pulse" },
    b: { img: "men-front.jpg", pos: "50% 26%", pill: "Tops", title: "Tops hombre", text: "Camiseta Core y Tank Longevity.", open: "tee-core" },
    cream: { id: "tee-core", eyebrow: "Tops", title: "Soporte que acompaña sin limitar el movimiento.", text: "Cuatro tops entre las dos colecciones." },
    mini: { id: "crop-longevity" },
  },
  bottoms: {
    a: { img: "leggings-detail.jpg", pos: "50% 40%", title: "Bottoms mujer", text: "Leggings Pulse y Bike Short Longevity.", open: "legging-pulse" },
    b: { img: "shorts-detail.jpg", pos: "50% 45%", pill: "Bottoms", title: "Bottoms hombre", text: "Short Core y Jogger Longevity.", open: "short-core" },
    cream: { id: "bike-longevity", eyebrow: "Bottoms", title: "Leggings que no se bajan y shorts que no se suben.", text: "Cuatro bottoms entre las dos colecciones." },
    mini: { id: "short-core" },
  },
  sets: {
    a: { img: "women-stretch.jpg", pos: "50% 22%", title: "Sets mujer", text: "Set Pulse y Set Longevity.", open: "set-pulse" },
    b: { img: "duo.jpg", pos: "50% 25%", pill: "Sets", title: "Sets hombre", text: "Set Core y Set Longevity.", open: "set-core" },
    cream: { id: "set-longevity-m", eyebrow: "Sets", title: "Piezas pensadas para moverse juntas.", text: "Cuatro sets con tallas independientes." },
    mini: { id: "set-longevity-w" },
  },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const swatchBg = (c) => `linear-gradient(135deg, ${c.base} 58%, ${c.accent} 58%)`;
const inCat = (p, cat) => cat === "todo" || p.cats.includes(cat);
const byId = (id) => PRODUCTS.find((x) => x.id === id);

/* ---------- Catálogo ---------- */
function cardHTML(p) {
  const v = viewsOf(p);
  return `
    <button class="card" data-id="${p.id}" data-cats="${p.cats.join(" ")}" aria-label="Ver ${p.name}">
      <div class="card-media">
        ${p.col === 2 ? `<span class="card-badge card-badge--new">Nuevo</span>` : ""}
        <div class="card-art art-a">${renderView(p, 0, v[0].key)}</div>
        <div class="card-art art-b">${renderView(p, 0, v[1].key)}</div>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="meta">${p.line}</p>
        <span class="card-dots">${p.colors.map((c, i) => `<i class="dot${i === 0 ? " is-on" : ""}" data-c="${i}" title="${c.name}" style="background:${swatchBg(c)}"></i>`).join("")}</span>
      </div>
    </button>`;
}

function renderGrid() {
  $("#gridNew").innerHTML = PRODUCTS.filter((p) => p.col === 2).map(cardHTML).join("");
  $("#gridOne").innerHTML = PRODUCTS.filter((p) => p.col === 1).map(cardHTML).join("");
}

function previewDot(dot) {
  const card = dot.closest(".card");
  const p = byId(card.dataset.id);
  const i = +dot.dataset.c;
  if (card.dataset.color === String(i)) return;
  card.dataset.color = i;
  const v = viewsOf(p);
  $(".art-a", card).innerHTML = renderView(p, i, v[0].key);
  $(".art-b", card).innerHTML = renderView(p, i, v[1].key);
  $$(".dot", card).forEach((d) => d.classList.toggle("is-on", d === dot));
}

/* ---------- Nueva colección: vitrina ---------- */
function renderShowcase() {
  const ids = ["crop-longevity", "bike-longevity", "tank-longevity", "jogger-longevity"];
  $("#showcase").innerHTML = ids.map((id, k) => {
    const p = byId(id);
    return `<button class="show-item" data-open="${id}" style="--d:${k * 0.08}s" aria-label="Ver ${p.name}">
      <div class="show-art">${renderView(p, 0, "front")}</div>
      <span class="show-name">${p.name}</span>
      <span class="show-dots">${p.colors.map((c) => `<i class="dot" style="background:${swatchBg(c)}"></i>`).join("")}</span>
    </button>`;
  }).join("");
}

/* ---------- Bento: portadas por categoría ---------- */
function setTileImage(tile, file, pos) {
  const imgs = $$(":scope > img", tile);
  const old = imgs.at(-1);
  if (old.getAttribute("src") === IMG + file) { old.style.objectPosition = pos; return; }
  imgs.slice(0, -1).forEach((i) => i.remove());
  const img = new Image();
  img.src = IMG + file; img.alt = ""; img.style.objectPosition = pos;
  img.className = "is-entering";
  old.after(img);
  const swap = () => {
    requestAnimationFrame(() => requestAnimationFrame(() => img.classList.remove("is-entering")));
    setTimeout(() => old.remove(), 700);
  };
  img.complete ? swap() : img.addEventListener("load", swap, { once: true });
}

function renderBento(cat) {
  const d = BENTO[cat] || BENTO.todo;
  const a = $(".tile--a"), b = $(".tile--b");
  setTileImage(a, d.a.img, d.a.pos);
  setTileImage(b, d.b.img, d.b.pos);
  $("#bentoATitle").textContent = d.a.title;
  $("#bentoAText").textContent = d.a.text;
  $("#bentoBTitle").textContent = d.b.title;
  $("#bentoBText").textContent = d.b.text;
  $("#bentoBPill").textContent = d.b.pill;
  a.dataset.go = d.a.go || ""; a.dataset.openId = d.a.open || "";
  b.dataset.go = d.b.go || ""; b.dataset.openId = d.b.open || "";
  a.setAttribute("aria-label", d.a.title); b.setAttribute("aria-label", d.b.title);

  $("#creamEyebrow").textContent = d.cream.eyebrow;
  $("#creamTitle").textContent = d.cream.title;
  $("#creamText").textContent = d.cream.text;
  $("#creamBtn").dataset.open = d.cream.id;

  const mp = byId(d.mini.id);
  const mini = $("#miniCard");
  mini.dataset.open = mp.id;
  $(".mini-art", mini).innerHTML = renderView(mp, 0, viewsOf(mp)[0].key);
  $("#miniTitle").textContent = mp.name;

  const n = PRODUCTS.filter((p) => inCat(p, cat)).length;
  $("#statCount").textContent = String(n).padStart(2, "0");
  $("#statLabel").textContent = n === 1 ? "pieza" : "piezas";

  const grid = $("#bentoGrid");
  grid.classList.remove("is-swapping"); void grid.offsetWidth; grid.classList.add("is-swapping");
}

function applyFilter(cat, { bento = true } = {}) {
  $$(".filters button").forEach((b) => b.classList.toggle("is-on", b.dataset.filter === cat));
  $$(".bento-tabs button").forEach((b) => b.classList.toggle("is-on", b.dataset.cat === cat));
  $$(".grid .card").forEach((c) => {
    const show = cat === "todo" || c.dataset.cats.split(" ").includes(cat);
    c.hidden = !show;
    if (show) { c.style.animation = "none"; void c.offsetWidth; c.style.animation = ""; }
  });
  $$(".col-block").forEach((blk) => { blk.hidden = !$$(".card:not([hidden])", blk).length; });
  if (bento) renderBento(cat);
}

/* ---------- Ficha: slider 3D + galería ---------- */
const state = { product: null, color: 0, size: null, index: 0, n: 1, radius: 0, angle: 0 };
let rawIndex = 0;

function cardWidth() {
  const st = $("#stage");
  const f = st.clientWidth < 600 ? 0.58 : 0.34;
  return Math.max(150, Math.min(st.clientWidth * f, (st.clientHeight - 100) / 1.36, 360));
}

function buildRing() {
  const p = state.product, c = p.colors[state.color];
  const ring = $("#ring");
  const cw = cardWidth();
  ring.style.setProperty("--cw", cw + "px");
  const views = viewsOf(p);
  const n = views.length;
  const radius = Math.round((cw / 2) / Math.tan(Math.PI / Math.max(n, 3)) + cw * 0.34);
  state.n = n; state.radius = radius;

  ring.innerHTML = views.map((v, i) => `
    <article class="panel3d" style="transform: rotateY(${(360 / n) * i}deg) translateZ(${radius}px)">
      <header><h4>${p.name}</h4><p>${v.label} · ${c.name}</p></header>
      <div class="pimg">${renderView(p, state.color, v.key)}</div>
      <span class="pnum">${String(i + 1).padStart(2, "0")}</span>
    </article>`).join("");
  rawIndex = state.index;
  goTo(state.index, true);
}

function goTo(i, instant = false) {
  const n = state.n;
  state.index = ((i % n) + n) % n;
  state.angle = -(360 / n) * i;
  const ring = $("#ring");
  ring.classList.toggle("no-anim", instant);
  ring.style.transform = `translateZ(${-state.radius}px) rotateY(${state.angle}deg)`;
  $$(".panel3d", ring).forEach((el, k) => el.classList.toggle("is-back", k !== state.index));
  $("#stageCount").textContent = `${String(state.index + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
  $$("#pmGallery .gimg").forEach((g, k) => g.classList.toggle("is-on", k === state.index));
  if (instant) requestAnimationFrame(() => ring.classList.remove("no-anim"));
}
const step = (d) => { rawIndex += d; goTo(rawIndex); };
function goToView(k) {
  let d = k - state.index;
  if (d > state.n / 2) d -= state.n;
  if (d < -state.n / 2) d += state.n;
  rawIndex += d; goTo(rawIndex);
}

function renderInfo() {
  const p = state.product, c = p.colors[state.color];
  $("#pmBarTitle").textContent = p.name;
  $("#pmLine").textContent = (p.col === 2 ? "Nuevo · " : "") + p.line;
  $("#pmTitle").textContent = p.name;
  $("#pmDesc").textContent = p.desc;
  $("#pmColorName").textContent = c.name;
  $("#pmSwatches").innerHTML = p.colors.map((col, i) => `
    <button class="swatch ${i === state.color ? "is-on" : ""}" data-color="${i}" aria-label="${col.name}">
      ${renderView(p, i, viewsOf(p)[0].key)}
    </button>`).join("");
  $("#pmSizes").innerHTML = p.sizes.map((s) =>
    `<button class="size ${s === state.size ? "is-on" : ""}" data-size="${s}">${s}</button>`).join("");
  const vs = viewsOf(p);
  $("#pmGallery").innerHTML = vs.map((v, i) => {
    const wide = vs.length % 2 === 1 && i === vs.length - 1;
    let art = renderView(p, state.color, v.key);
    if (wide) art = art.replace("<svg ", '<svg preserveAspectRatio="xMidYMid slice" ');
    return `<button class="gimg ${wide ? "gimg--wide" : ""} ${i === state.index ? "is-on" : ""}" data-view="${i}" aria-label="Ver ${v.label.toLowerCase()} en 3D">${art}</button>`;
  }).join("");
  $("#pmSpecs").innerHTML = p.specs.map((s) => `<li>${s}</li>`).join("");
  updateCta();
}

function updateCta() {
  const p = state.product;
  $("#pmCta").textContent = state.size ? `Consultar ${p.name} · Talla ${state.size}` : "Consultar disponibilidad";
}

function openProduct(id, color = 0) {
  const p = byId(id);
  if (!p) return;
  Object.assign(state, { product: p, color: Math.min(+color || 0, p.colors.length - 1), size: null, index: 0 });
  rawIndex = 0;
  const m = $("#pmodal");
  m.hidden = false;
  m.scrollTop = 0;
  document.body.classList.add("is-locked");
  renderInfo();
  requestAnimationFrame(buildRing);
  history.replaceState(null, "", "#producto-" + id);
  m.focus({ preventScroll: true });
}

function closeProduct() {
  $("#pmodal").hidden = true;
  document.body.classList.remove("is-locked");
  history.replaceState(null, "", "#catalogo");
}

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

/* =========================================================
   BANNER ANIMADO
   Cada línea de "TRAIN FOR LONGEVITY" es su propio recorte de
   texto; JS calcula la foto para que se vea continua entre líneas.
   Así cada línea puede entrar animada por separado (antes el
   recorte de texto anulaba la animación).
   ========================================================= */
const HERO_RATIO = 1300 / 1420; // proporción del retrato
const hero = { lines: [], box: null, t0: 0, px: 0, py: 0, tx: 0, ty: 0, scroll: 0, running: false, visible: true, reduce: false, grainT: 0, gx: 0, gy: 0 };

function layoutHero() {
  const poster = $(".hero-poster");
  const h1 = $(".hero-type");
  if (!poster || !h1) return;
  const fs = parseFloat(getComputedStyle(h1).fontSize);
  const gap = fs * 0.06;
  const box = poster.getBoundingClientRect();
  const end = (el) => el.getBoundingClientRect().right - box.left;
  poster.style.setProperty("--for-end", end($(".l2")) + gap + "px");
  poster.style.setProperty("--vity-end", end($(".l4")) + gap + "px");
  poster.style.setProperty("--vity-start", $(".l4").getBoundingClientRect().left - box.left + "px");

  // geometría de cada línea relativa al bloque del título (sin transformaciones)
  const hb = h1.getBoundingClientRect();
  hero.box = { w: hb.width, h: hb.height };
  hero.lines = $$(".hero-type .l").map((el) => ({ el, x: el.offsetLeft, y: el.offsetTop }));
  paintHero(performance.now());
}

function paintHero(now) {
  if (!hero.box) return;
  const t = (now - hero.t0) / 1000;
  // zoom de entrada (1.32 → 1.08) y respiración lenta después
  const intro = hero.reduce ? 1 : Math.min(1, t / 2.6);
  const ease = 1 - Math.pow(1 - intro, 3);
  const breathe = hero.reduce ? 0 : Math.sin(t * 0.35) * 0.025 * ease;
  const z = 1.32 - 0.24 * ease + breathe;
  hero.px += (hero.tx - hero.px) * 0.06;
  hero.py += (hero.ty - hero.py) * 0.06;
  const { w: W, h: H } = hero.box;
  let ih = H * z, iw = ih * HERO_RATIO;
  if (iw < W * z) { iw = W * z; ih = iw / HERO_RATIO; }
  const x0 = (W - iw) / 2 + hero.px;
  const y0 = (H - ih) * 0.38 + hero.py + hero.scroll;
  // grano: salta de posición ~12 veces por segundo
  if (!hero.reduce && now - hero.grainT > 80) { hero.grainT = now; hero.gx = (Math.random() * 220) | 0; hero.gy = (Math.random() * 220) | 0; }
  for (const L of hero.lines) {
    L.el.style.backgroundSize = `220px 220px, ${iw}px ${ih}px`;
    L.el.style.backgroundPosition = `${hero.gx - L.x}px ${hero.gy - L.y}px, ${x0 - L.x}px ${y0 - L.y}px`;
  }
}

function loopHero(now) {
  if (!hero.visible) { hero.running = false; return; }
  paintHero(now);
  requestAnimationFrame(loopHero);
}
function startHero() { if (!hero.running && !hero.reduce) { hero.running = true; requestAnimationFrame(loopHero); } }

function initHero() {
  const sec = $(".hero");
  hero.reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  hero.t0 = performance.now();
  layoutHero();
  requestAnimationFrame(() => requestAnimationFrame(() => sec.classList.add("is-in")));
  if (hero.reduce) return;
  startHero();
  sec.addEventListener("pointermove", (e) => {
    const r = sec.getBoundingClientRect();
    hero.tx = ((e.clientX - r.left) / r.width - 0.5) * -40;
    hero.ty = ((e.clientY - r.top) / r.height - 0.5) * -30;
  });
  sec.addEventListener("pointerleave", () => { hero.tx = 0; hero.ty = 0; });
  window.addEventListener("scroll", () => {
    const r = sec.getBoundingClientRect();
    hero.scroll = Math.max(-200, Math.min(200, -r.top * 0.18));
  }, { passive: true });
  new IntersectionObserver(([en]) => { hero.visible = en.isIntersecting; if (hero.visible) startHero(); }).observe(sec);
}

/* ---------- Eventos ---------- */
function init() {
  renderGrid();
  renderShowcase();
  renderBento("todo");
  initDrag();
  initHero();
  document.fonts && document.fonts.ready.then(layoutHero);

  document.addEventListener("pointerover", (e) => {
    const dot = e.target.closest(".card .dot[data-c]");
    if (dot) previewDot(dot);
  });

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) {
      const dot = e.target.closest(".dot[data-c]");
      return openProduct(card.dataset.id, dot ? dot.dataset.c : card.dataset.color);
    }
    const opener = e.target.closest("[data-open]");
    if (opener) { e.preventDefault(); return openProduct(opener.dataset.open); }

    if (e.target.closest("[data-close]")) return closeProduct();

    const tile = e.target.closest("[data-bento]");
    if (tile) {
      if (tile.dataset.openId) return openProduct(tile.dataset.openId);
      if (tile.dataset.go) return applyFilter(tile.dataset.go);
    }
    const f = e.target.closest("[data-filter]");
    if (f) return applyFilter(f.dataset.filter);

    const bt = e.target.closest("[data-cat]");
    if (bt) return applyFilter(bt.dataset.cat);

    const go = e.target.closest("[data-filter-link]");
    if (go) applyFilter(go.dataset.filterLink);

    const sw = e.target.closest("[data-color]");
    if (sw) { state.color = +sw.dataset.color; renderInfo(); buildRing(); return; }

    const sz = e.target.closest("[data-size]");
    if (sz) { state.size = sz.dataset.size; $$("#pmSizes .size").forEach((b) => b.classList.toggle("is-on", b === sz)); updateCta(); return; }

    const th = e.target.closest("[data-view]");
    if (th) { goToView(+th.dataset.view); $("#stage").scrollIntoView({ behavior: "smooth", block: "start" }); return; }

    if (e.target.closest("#pmCta")) closeProduct();
  });

  $("#prevCard").addEventListener("click", () => step(-1));
  $("#nextCard").addEventListener("click", () => step(1));

  document.addEventListener("keydown", (e) => {
    if ($("#pmodal").hidden) {
      if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-bento]")) { e.preventDefault(); e.target.click(); }
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
