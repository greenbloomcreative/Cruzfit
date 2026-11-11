/* =========================================================
   CRUZFIT — Catálogo digital
   Todo el catálogo vive en PRODUCTS: para añadir productos,
   colores o fotos nuevas solo hay que editar este arreglo.
   - Fotos con cielo (assets/img/*.jpg): portadas y categorías.
   - Fotos de estudio (assets/img/studio/*.jpg): fichas de producto.
   ========================================================= */

const IMG = "assets/img/";
const STUDIO = "assets/img/studio/";

const PRODUCTS = [
  {
    id: "top-pulse",
    name: "Top Deportivo Pulse",
    line: "Línea Pulse · Mujer",
    cats: ["mujer", "tops"],
    desc: "Top de soporte medio con escote en V de malla y banda inferior ancha. Se queda en su lugar en saltos, sprints y estiramientos.",
    colors: [{ name: "Rosa Pulse", hex: "#f0468f", views: ["women-front.jpg", "women-stretch.jpg", "duo.jpg"] }],
    soon: [["Negro Onyx", "#2b2b2b"], ["Lila", "#a77df0"], ["Salvia", "#8fcca0"], ["Cobalto", "#2f5be0"]],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: ["Soporte medio", "Panel de malla transpirable", "Copas removibles", "Banda elástica de 4 cm"],
  },
  {
    id: "legging-pulse",
    name: "Leggings Pulse Tiro Alto",
    line: "Línea Pulse · Mujer",
    cats: ["mujer", "bottoms"],
    desc: "Leggings sin costuras laterales con cintura alta y líneas de compresión que estilizan y sostienen. Opacos en sentadilla profunda.",
    colors: [{ name: "Rosa Pulse", hex: "#f0468f", views: ["leggings-detail.jpg", "women-front.jpg", "women-stretch.jpg"] }],
    soon: [["Negro Onyx", "#2b2b2b"], ["Lila", "#a77df0"], ["Salvia", "#8fcca0"], ["Cobalto", "#2f5be0"]],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: ["Cintura alta", "Compresión estructurada", "Malla posterior en rodilla", "Prueba de sentadilla"],
  },
  {
    id: "tee-core",
    name: "Camiseta Compresión Core",
    line: "Línea Core · Hombre",
    cats: ["hombre", "tops"],
    desc: "Camiseta de compresión manga corta con mapeo de texturas y vivos lima en hombros. Ajuste segunda piel para entrenar sin roces.",
    colors: [{ name: "Negro / Lima", hex: "#111111", accent: "#d3f36b", views: ["men-front.jpg", "tee-detail.jpg", "duo.jpg"] }],
    soon: [["Marino", "#1c2a4a"], ["Oliva", "#4c5a26"], ["Grafito", "#a9adb2"], ["Arena", "#d8c7a4"]],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specs: ["Ajuste de compresión", "Textura mapeada en torso", "Vivos lima", "Secado rápido"],
  },
  {
    id: "short-core",
    name: "Short de Entrenamiento Core",
    line: "Línea Core · Hombre",
    cats: ["hombre", "bottoms"],
    desc: "Short ligero de 7\" con cordón interior y franjas curvas lima. Tela ripstop que se mueve contigo en cada zancada.",
    colors: [{ name: "Negro / Lima", hex: "#111111", accent: "#d3f36b", views: ["shorts-detail.jpg", "men-front.jpg", "tee-detail.jpg"] }],
    soon: [["Marino", "#1c2a4a"], ["Oliva", "#4c5a26"], ["Grafito", "#a9adb2"], ["Arena", "#d8c7a4"]],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specs: ["Largo 7\"", "Cintura elástica con cordón", "Tejido ripstop ligero", "Logo Cruzfit"],
  },
  {
    id: "set-pulse",
    name: "Set Pulse",
    line: "Set · Mujer",
    cats: ["mujer", "sets"],
    desc: "Top Deportivo Pulse + Leggings Pulse Tiro Alto. El conjunto completo en rosa intenso, pensado para moverse como una sola pieza.",
    colors: [{ name: "Rosa Pulse", hex: "#f0468f", views: ["women-front.jpg", "women-stretch.jpg", "leggings-detail.jpg", "duo.jpg"] }],
    soon: [["Negro Onyx", "#2b2b2b"], ["Lila", "#a77df0"], ["Salvia", "#8fcca0"], ["Cobalto", "#2f5be0"]],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: ["Incluye top + leggings", "Tallas independientes", "Compresión coordinada"],
  },
  {
    id: "set-core",
    name: "Set Core",
    line: "Set · Hombre",
    cats: ["hombre", "sets"],
    desc: "Camiseta Compresión Core + Short de Entrenamiento Core. Negro total con vivos lima, para el día de pierna y para todos los demás.",
    colors: [{ name: "Negro / Lima", hex: "#111111", accent: "#d3f36b", views: ["men-front.jpg", "tee-detail.jpg", "shorts-detail.jpg", "duo.jpg"] }],
    soon: [["Marino", "#1c2a4a"], ["Oliva", "#4c5a26"], ["Grafito", "#a9adb2"], ["Arena", "#d8c7a4"]],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specs: ["Incluye camiseta + short", "Tallas independientes", "Vivos lima coordinados"],
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
const viewLabel = (f) => VIEW_LABELS[f] || "Vista";

/* Portadas del bento por categoría (fotos con cielo) */
const BENTO = {
  todo: {
    a: { img: "women-stretch.jpg", pos: "50% 22%", title: "Mujer", text: "Línea Pulse: tops y leggings de tiro alto con soporte y compresión.", go: "mujer" },
    b: { img: "men-front.jpg", pos: "50% 30%", pill: "Hombre", title: "Hombre", text: "Línea Core: compresión negra con vivos lima.", go: "hombre" },
    cream: { id: "set-pulse", eyebrow: "Recomendado", title: "El set Pulse: rosa intenso, costuras de compresión y un tiro alto que no se baja en ninguna sentadilla.", text: "Top de soporte medio con panel de malla y leggings sin costuras laterales." },
    mini: { id: "short-core", img: "shorts-detail.jpg", title: "Descubre<br/>el short Core" },
  },
  mujer: {
    a: { img: "women-front.jpg", pos: "50% 20%", title: "Línea Pulse", text: "Top de soporte medio y leggings de tiro alto en rosa Pulse.", open: "set-pulse" },
    b: { img: "women-stretch.jpg", pos: "50% 25%", pill: "Mujer", title: "Leggings Pulse", text: "Sin costuras laterales. Opacos en sentadilla profunda.", open: "legging-pulse" },
    cream: { id: "top-pulse", eyebrow: "Mujer · Recomendado", title: "Top Pulse: escote en V de malla y una banda que no se mueve en ningún sprint.", text: "Soporte medio con copas removibles. Combínalo con los leggings de tiro alto." },
    mini: { id: "legging-pulse", img: "leggings-detail.jpg", title: "Descubre<br/>los leggings" },
  },
  hombre: {
    a: { img: "shorts-detail.jpg", pos: "50% 45%", title: "Short Core", text: "7\" de tela ripstop con franjas curvas lima.", open: "short-core" },
    b: { img: "men-front.jpg", pos: "50% 30%", pill: "Hombre", title: "Línea Core", text: "Camiseta de compresión y short en negro con vivos lima.", open: "set-core" },
    cream: { id: "tee-core", eyebrow: "Hombre · Recomendado", title: "Camiseta Core: compresión segunda piel con textura mapeada en el torso.", text: "Vivos lima en hombros y secado rápido para entrenar sin roces." },
    mini: { id: "tee-core", img: "tee-detail.jpg", title: "Descubre<br/>la camiseta" },
  },
  tops: {
    a: { img: "women-front.jpg", pos: "50% 20%", title: "Top Pulse", text: "Soporte medio con panel de malla transpirable.", open: "top-pulse" },
    b: { img: "men-front.jpg", pos: "50% 26%", pill: "Tops", title: "Camiseta Core", text: "Compresión manga corta con vivos lima.", open: "tee-core" },
    cream: { id: "top-pulse", eyebrow: "Tops", title: "Dos tops, una misma idea: soporte que acompaña sin limitar el movimiento.", text: "Top Pulse para mujer y Camiseta Core para hombre." },
    mini: { id: "tee-core", img: "tee-detail.jpg", title: "Descubre<br/>la camiseta" },
  },
  bottoms: {
    a: { img: "leggings-detail.jpg", pos: "50% 40%", title: "Leggings Pulse", text: "Cintura alta y compresión estructurada.", open: "legging-pulse" },
    b: { img: "shorts-detail.jpg", pos: "50% 45%", pill: "Bottoms", title: "Short Core", text: "Ligero, con cordón interior y franjas lima.", open: "short-core" },
    cream: { id: "legging-pulse", eyebrow: "Bottoms", title: "Leggings que no se bajan y shorts que no se suben. Así de simple.", text: "Leggings Pulse de tiro alto y Short Core de 7\"." },
    mini: { id: "short-core", img: "shorts-detail.jpg", title: "Descubre<br/>el short Core" },
  },
  sets: {
    a: { img: "women-stretch.jpg", pos: "50% 22%", title: "Set Pulse", text: "Top + leggings en rosa Pulse.", open: "set-pulse" },
    b: { img: "duo.jpg", pos: "50% 25%", pill: "Sets", title: "Set Core", text: "Camiseta + short en negro con vivos lima.", open: "set-core" },
    cream: { id: "set-core", eyebrow: "Sets", title: "El conjunto completo: piezas pensadas para moverse juntas.", text: "Set Pulse para mujer y Set Core para hombre, con tallas independientes." },
    mini: { id: "set-pulse", img: "women-front.jpg", title: "Descubre<br/>el set Pulse" },
  },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const swatchBg = (c) => c.accent ? `linear-gradient(135deg, ${c.hex} 55%, ${c.accent} 55%)` : c.hex;
const inCat = (p, cat) => cat === "todo" || p.cats.includes(cat);

/* ---------- Grid del catálogo (fotos de estudio) ---------- */
function renderGrid() {
  $("#productGrid").innerHTML = PRODUCTS.map((p) => {
    const v = p.colors[0].views;
    return `
      <button class="card" data-id="${p.id}" data-cats="${p.cats.join(" ")}" aria-label="Ver ${p.name}">
        <div class="card-media">
          <span class="card-badge">${p.cats.includes("sets") ? "Set" : p.line.split("·")[0].trim()}</span>
          <img class="img-a" src="${STUDIO + v[0]}" alt="${p.name}" loading="lazy" />
          <img class="img-b" src="${STUDIO + (v[1] || v[0])}" alt="" loading="lazy" />
        </div>
        <div class="card-body">
          <h3>${p.name}</h3>
          <p class="meta">${p.line.split("·")[1].trim()} · ${p.colors[0].name}</p>
          <p class="meta meta--soft">${1 + (p.soon || []).length} colores · ${p.sizes[0]}–${p.sizes.at(-1)}</p>
        </div>
      </button>`;
  }).join("");
}

/* ---------- Bento: cambia portadas según la categoría ---------- */
function setTileImage(tile, file, pos) {
  const imgs = $$("img", tile).filter((i) => !i.closest(".mini-card"));
  const old = imgs.at(-1);
  if (old.getAttribute("src") === IMG + file) { old.style.objectPosition = pos; return; }
  imgs.slice(0, -1).forEach((i) => i.remove());
  const img = new Image();
  img.src = IMG + file; img.alt = ""; img.style.objectPosition = pos;
  img.className = "tile-img is-entering";
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

  const mini = $("#miniCard");
  mini.dataset.open = d.mini.id;
  $("img", mini).src = IMG + d.mini.img;
  $("#miniTitle").innerHTML = d.mini.title;

  const n = PRODUCTS.filter((p) => inCat(p, cat)).length;
  $("#statCount").textContent = String(n).padStart(2, "0");
  $("#statLabel").textContent = n === 1 ? "pieza" : "piezas";

  const grid = $("#bentoGrid");
  grid.classList.remove("is-swapping"); void grid.offsetWidth; grid.classList.add("is-swapping");
}

function applyFilter(cat, { bento = true } = {}) {
  $$(".filters button").forEach((b) => b.classList.toggle("is-on", b.dataset.filter === cat));
  $$(".bento-tabs button").forEach((b) => b.classList.toggle("is-on", b.dataset.cat === cat));
  $$("#productGrid .card").forEach((c) => {
    const show = cat === "todo" || c.dataset.cats.split(" ").includes(cat);
    c.hidden = !show;
    if (show) { c.style.animation = "none"; void c.offsetWidth; c.style.animation = ""; }
  });
  if (bento) renderBento(cat);
}

/* ---------- Ficha: slider 3D con fotos completas ---------- */
const state = { product: null, color: 0, size: null, index: 0, n: 1, radius: 0, angle: 0 };
let rawIndex = 0;

function cardWidth() {
  const st = $("#stage");
  const f = st.clientWidth < 600 ? 0.58 : 0.36;
  return Math.max(150, Math.min(st.clientWidth * f, (st.clientHeight - 90) / 1.42, 360));
}

function buildRing() {
  const p = state.product, c = p.colors[state.color];
  const ring = $("#ring");
  const cw = cardWidth();
  ring.style.setProperty("--cw", cw + "px");
  const n = c.views.length;
  const radius = Math.round((cw / 2) / Math.tan(Math.PI / Math.max(n, 3)) + cw * 0.32);
  state.n = n; state.radius = radius;

  ring.innerHTML = c.views.map((v, i) => `
    <article class="panel3d" style="transform: rotateY(${(360 / n) * i}deg) translateZ(${radius}px)">
      <header>
        <h4>${p.name}</h4>
        <p>${viewLabel(v)} · ${c.name}</p>
      </header>
      <div class="pimg"><img src="${STUDIO + v}" alt="${p.name} — ${viewLabel(v).toLowerCase()}" draggable="false" /></div>
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
  $("#pmLine").textContent = p.line;
  $("#pmTitle").textContent = p.name;
  $("#pmDesc").textContent = p.desc;
  $("#pmColorName").textContent = c.name;
  $("#pmSwatches").innerHTML = p.colors.map((col, i) =>
    `<button class="swatch ${i === state.color ? "is-on" : ""}" data-color="${i}" style="background:${swatchBg(col)}" aria-label="${col.name}"></button>`).join("");
  $("#pmSoonWrap").hidden = !(p.soon && p.soon.length);
  $("#pmSoon").innerHTML = (p.soon || []).map(([name, hex]) =>
    `<i class="soon" style="background:${hex}" title="${name} · próximamente"></i>`).join("");
  $("#pmSizes").innerHTML = p.sizes.map((s) =>
    `<button class="size ${s === state.size ? "is-on" : ""}" data-size="${s}">${s}</button>`).join("");
  $("#pmGallery").innerHTML = c.views.map((v, i) => `
    <button class="gimg ${i === 0 ? "is-on" : ""} ${v === "duo.jpg" ? "fit-contain" : ""}" data-view="${i}" aria-label="Ver ${viewLabel(v).toLowerCase()} en 3D">
      <img src="${STUDIO + v}" alt="${p.name} — ${viewLabel(v).toLowerCase()}" loading="lazy" />
    </button>`).join("");
  $("#pmSpecs").innerHTML = p.specs.map((s) => `<li>${s}</li>`).join("");
  updateCta();
}

function updateCta() {
  const p = state.product;
  $("#pmCta").textContent = state.size ? `Consultar ${p.name} · Talla ${state.size}` : "Consultar disponibilidad";
}

function openProduct(id, color = 0) {
  const p = PRODUCTS.find((x) => x.id === id);
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

/* ---------- Banner: textos en los huecos + entrada animada ---------- */
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

function initHeroMotion() {
  const hero = $(".hero");
  requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("is-in")));
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let raf = null;
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      hero.style.setProperty("--px", (x * -3).toFixed(2) + "%");
      hero.style.setProperty("--py", (y * -3).toFixed(2) + "%");
    });
  });
  hero.addEventListener("pointerleave", () => { hero.style.setProperty("--px", "0%"); hero.style.setProperty("--py", "0%"); });
}

/* ---------- Eventos ---------- */
function init() {
  renderGrid();
  renderBento("todo");
  initDrag();
  layoutHero();
  initHeroMotion();
  document.fonts && document.fonts.ready.then(layoutHero);

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) return openProduct(card.dataset.id);

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
    if (sw) { state.color = +sw.dataset.color; state.index = 0; renderInfo(); buildRing(); return; }

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
