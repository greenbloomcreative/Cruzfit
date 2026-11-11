/* =========================================================
   CRUZFIT — Renders de producto (SVG)
   Cada prenda se dibuja como una toma de estudio sin modelo:
   silueta, volumen, costuras, malla, vivos y logo.
   Así cualquier color se muestra limpio, sin montajes.
   Uso: garmentSVG("tee", { base: "#161616", accent: "#d4f26a" }, "front")
   ========================================================= */
(function () {
  const W = 1000, H = 1250, CX = 500;
  let uid = 0;

  /* ---- utilidades de color ---- */
  const hex2rgb = (h) => { h = h.replace("#", ""); if (h.length === 3) h = h.split("").map((c) => c + c).join(""); const n = parseInt(h, 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; };
  const rgb2hex = (r, g, b) => "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
  const mix = (a, b, t) => { const A = hex2rgb(a), B = hex2rgb(b); return rgb2hex(A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t); };
  const lum = (h) => { const [r, g, b] = hex2rgb(h); return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255; };

  /* ---- simetría: se define la mitad derecha y se espeja ---- */
  // start: [x,y] en el eje central; segs: [[c1x,c1y,c2x,c2y,x,y] | [x,y]] hasta volver al eje
  function sym(start, segs) {
    const pts = [start];
    let d = `M${start[0]},${start[1]}`;
    segs.forEach((s) => {
      d += s.length === 6 ? ` C${s[0]},${s[1]} ${s[2]},${s[3]} ${s[4]},${s[5]}` : ` L${s[0]},${s[1]}`;
      pts.push([s[s.length - 2], s[s.length - 1]]);
    });
    for (let i = segs.length - 1; i >= 0; i--) {
      const s = segs[i], prev = pts[i];
      const m = (x) => 2 * CX - x;
      d += s.length === 6 ? ` C${m(s[2])},${s[3]} ${m(s[0])},${s[1]} ${m(prev[0])},${prev[1]}` : ` L${m(prev[0])},${prev[1]}`;
    }
    return d + " Z";
  }
  const mirror = (d) => d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, (_, x, y) => `${2 * CX - +x},${y}`);
  const both = (d) => d + " " + mirror(d);

  /* ---- logo Cruzfit (icono real de la marca) ---- */
  const ICON = "M 561.492188 509.007812 L 549.292969 509.007812 L 544.3125 522.203125 L 550.757812 522.203125 C 554.0625 522.203125 557.035156 520.1875 558.257812 517.117188 Z M 558.191406 511.242188 L 556.179688 516.289062 C 555.289062 518.523438 553.164062 519.964844 550.757812 519.964844 L 547.546875 519.964844 L 550.839844 511.242188 Z M 558.191406 511.242188  M 559.0625 468.3125 L 550.507812 468.3125 C 546.367188 468.3125 542.644531 470.851562 541.132812 474.707031 L 540.566406 476.148438 L 556.136719 476.148438 Z M 555.839844 470.550781 L 554.585938 473.910156 L 544.070312 473.910156 C 545.511719 471.828125 547.886719 470.550781 550.507812 470.550781 Z M 555.839844 470.550781  M 547.550781 499.15625 L 531.535156 499.15625 L 527.699219 508.925781 L 522.703125 521.652344 L 516.875 536.5 L 525.542969 536.5 C 530.398438 536.5 534.742188 533.480469 536.441406 528.933594 L 538.953125 522.203125 L 543.875 509.007812 Z M 544.332031 501.390625 L 541.78125 508.222656 L 536.855469 521.421875 L 534.34375 528.152344 C 532.980469 531.804688 529.445312 534.261719 525.542969 534.261719 L 520.15625 534.261719 L 524.78125 522.472656 L 529.78125 509.742188 L 533.058594 501.390625 Z M 544.332031 501.390625  M 576.007812 480.808594 L 525.613281 480.808594 C 525.613281 480.808594 506.285156 484.019531 504.082031 501.863281 C 504.082031 501.863281 502.183594 517.046875 515.566406 519.769531 C 515.566406 519.769531 515.21875 519.464844 514.699219 518.890625 C 514.972656 519.183594 515.257812 519.476562 515.566406 519.769531 C 515.566406 519.769531 516.082031 520.171875 517.644531 520.648438 L 522.71875 507.980469 C 520.101562 507.117188 517.742188 505.527344 517.460938 502.621094 C 517.460938 502.621094 516.386719 496.792969 523.417969 494.253906 C 524.054688 494.183594 524.71875 494.140625 525.417969 494.140625 C 525.488281 494.140625 525.558594 494.140625 525.628906 494.144531 C 525.894531 494.144531 526.191406 494.148438 526.511719 494.152344 L 545.113281 494.152344 C 546.550781 494.148438 547.996094 494.144531 549.425781 494.136719 C 555.617188 494.117188 561.496094 494.085938 565.128906 494.0625 C 568.441406 494.042969 571.414062 492.035156 572.667969 488.96875 Z M 572.675781 483.046875 L 570.597656 488.121094 C 569.683594 490.355469 567.53125 491.8125 565.117188 491.828125 C 561.917969 491.847656 556.117188 491.878906 549.417969 491.902344 C 547.988281 491.90625 546.542969 491.910156 545.113281 491.914062 L 526.519531 491.914062 C 526.207031 491.914062 525.914062 491.910156 525.65625 491.90625 C 525.574219 491.90625 525.496094 491.90625 525.417969 491.90625 C 524.671875 491.90625 523.914062 491.949219 523.167969 492.03125 L 522.90625 492.0625 L 522.65625 492.152344 C 515.769531 494.636719 514.796875 500.226562 515.246094 502.925781 C 515.460938 504.90625 516.476562 507.425781 519.824219 509.1875 L 516.484375 517.527344 C 516.433594 517.472656 516.382812 517.421875 516.332031 517.363281 L 515.992188 517.675781 L 516.011719 517.578125 C 511.386719 516.636719 508.351562 513.851562 506.992188 509.296875 C 505.902344 505.640625 506.300781 502.171875 506.304688 502.136719 C 507.121094 495.503906 510.617188 490.292969 516.695312 486.640625 C 520.894531 484.117188 524.972656 483.214844 525.820312 483.046875 Z M 572.675781 483.046875";
  function logo(x, y, s, fill) {
    return `<g transform="translate(${x},${y}) scale(${s * 0.95}) translate(-539,-502)" fill="${fill}"><path d="${ICON}"/></g>`;
  }
  const word = (x, y, size, fill, anchor = "middle") =>
    `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Archivo, Arial, sans-serif" font-weight="800" font-size="${size}" letter-spacing="${size * 0.08}" fill="${fill}">CRUZFIT</text>`;

  /* ---- siluetas y detalles por prenda ---- */
  const G = {};

  // Top deportivo (Pulse)
  G.bra = {
    hole: (v) => v === "back" ? `M${CX},200 C455,300 420,420 395,560 C450,580 550,580 605,560 C580,420 545,300 ${CX},200 Z` : "",
    body: sym([CX, 452], [[540, 412, 576, 300, 584, 176], [694, 150], [702, 262, 742, 360, 806, 432], [822, 520, 816, 606, 796, 690], [794, 792], [700, 812, 600, 818, CX, 818]]),
    detail: [520, 380, 520, 520],
    draw(c, v) {
      let s = "";
      // banda inferior
      s += `<path d="M204,690 C300,708 400,712 ${CX},712 C600,712 700,708 796,690 L794,792 C700,812 600,818 ${CX},818 C400,818 300,812 206,792 Z" fill="${c.shade}" opacity=".35"/>`;
      s += `<path d="M206,694 C300,712 400,716 ${CX},716 C600,716 700,712 794,694" class="seam"/>`;
      s += `<path d="M206,704 C300,722 400,726 ${CX},726 C600,726 700,722 794,704" class="stitch"/>`;
      if (v === "back") {
        // espalda nadadora
        s += `<path d="M${CX},200 C455,300 420,420 395,560 M${CX},200 C545,300 580,420 605,560" class="seam"/>`;
        s += logo(CX, 765, 1.1, c.accent);
      } else {
        // inserto de malla en V
        s += `<path d="M440,470 L560,470 L${CX},600 Z" fill="url(#mesh${c.id})" />`;
        s += `<path d="M440,470 L560,470 L${CX},600 Z" class="seam"/>`;
        s += both(`<path d="M590,190 C600,330 640,420 700,470" class="stitch"/>`);
        s += word(CX, 774, 30, c.accent);
        // copas
        s += both(`<path d="M560,520 C620,560 700,575 780,560" class="fold"/>`);
      }
      return s;
    },
  };

  // Leggings (Pulse)
  G.leggings = {
    body: sym([CX, 112], [[708, 112], [722, 200, 752, 300, 766, 404], [774, 700, 706, 1000, 672, 1192], [552, 1192], [552, 1000, 532, 720, 514, 612], [CX, 592]]),
    detail: [300, 90, 400, 500],
    draw(c, v) {
      let s = "";
      s += `<path d="M292,112 H708 L722,200 C ${640},${226} 560,232 ${CX},232 C440,232 360,226 278,200 Z" fill="${c.shade}" opacity=".3"/>`;
      s += `<path d="M280,204 C360,230 440,236 ${CX},236 C560,236 640,230 720,204" class="seam"/>`;
      s += `<path d="M282,216 C360,242 440,248 ${CX},248 C560,248 640,242 718,216" class="stitch"/>`;
      // líneas de compresión en rodilla y muslo
      s += both(`<path d="M520,760 C580,720 680,690 758,700" class="seam" stroke-opacity=".9"/>`);
      s += both(`<path d="M530,880 C590,900 660,905 742,880" class="pipe"/>`);
      s += both(`<path d="M512,600 C560,560 650,520 760,430" class="fold"/>`);
      s += both(`<path d="M600,1000 C610,1080 615,1140 612,1190" class="fold"/>`);
      if (v === "back") {
        s += `<path d="M380,232 C430,300 470,330 ${CX},380 C530,330 570,300 620,232" class="seam"/>`;
        s += both(`<path d="M540,930 C580,960 640,962 712,935 L705,1010 C640,1030 585,1028 546,1000 Z" fill="url(#mesh${c.id})"/>`);
        s += word(CX, 190, 34, c.accent);
      } else {
        s += logo(CX, 168, 1.15, c.accent);
        s += word(690, 520, 22, c.mid, "end");
      }
      return s;
    },
  };

  // Camiseta de compresión (Core)
  G.tee = {
    body: sym([CX, 214], [[560, 212, 600, 190, 616, 148], [772, 194], [884, 404], [792, 452], [778, 440], [764, 432], [772, 650, 762, 900, 768, 1124], [680, 1138, 590, 1142, CX, 1142]]),
    detail: [520, 120, 420, 520],
    draw(c, v) {
      let s = "";
      // paneles laterales texturizados
      s += both(`<path d="M672,470 C700,520 712,700 704,1000 L766,1004 C770,820 772,620 764,436 Z" fill="url(#dots${c.id})"/>`);
      s += both(`<path d="M672,470 C700,520 712,700 704,1000" class="seam"/>`);
      // cuello
      s += `<path d="M384,148 C400,190 440,214 ${CX},214 C560,214 600,190 616,148" class="seam"/>`;
      s += `<path d="M392,160 C410,198 446,222 ${CX},222 C554,222 590,198 608,160" class="stitch"/>`;
      // vivos raglán
      s += both(`<path d="M612,170 C690,220 770,300 850,404" class="pipe"/>`);
      s += both(`<path d="M784,446 L878,402" class="seam"/>`);
      s += both(`<path d="M560,560 C600,620 640,650 690,660" class="fold"/>`);
      if (v === "back") {
        s += `<path d="M300,330 C400,360 600,360 700,330" class="seam"/>`;
        s += word(CX, 300, 30, c.accent);
      } else {
        s += logo(626, 360, 1.25, c.accent);
      }
      return s;
    },
  };

  // Short (Core)
  G.shorts = {
    body: sym([CX, 250], [[748, 250], [754, 338], [786, 440, 822, 700, 846, 880], [560, 922], [548, 820, 530, 720, 512, 650], [CX, 640]]),
    detail: [520, 600, 420, 520],
    draw(c, v) {
      let s = "";
      s += `<path d="M256,250 H744 L748,338 C650,350 560,352 ${CX},352 C440,352 350,350 252,338 Z" fill="${c.shade}" opacity=".35"/>`;
      s += `<path d="M252,340 C350,352 440,356 ${CX},356 C560,356 650,352 748,340" class="seam"/>`;
      s += `<path d="M254,352 C350,364 440,368 ${CX},368 C560,368 650,364 746,352" class="stitch"/>`;
      // franjas curvas
      s += both(`<path d="M580,912 C640,830 720,740 818,690" class="pipe" stroke-width="16"/>`);
      s += both(`<path d="M720,900 C760,856 800,830 842,820" class="pipe" stroke-width="12"/>`);
      s += both(`<path d="M540,420 C560,520 590,600 650,640" class="fold"/>`);
      s += both(`<path d="M700,420 C700,520 720,600 760,660" class="fold"/>`);
      if (v === "back") {
        s += both(`<path d="M590,420 H700 V520 C680,530 610,530 590,520 Z" class="seam" fill="${c.shade}" fill-opacity=".15"/>`);
      } else {
        // cordón
        s += `<path d="M486,330 C476,400 470,440 476,480 M514,330 C524,410 534,440 528,486" stroke="${c.cord}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
        s += word(360, 852, 26, c.mid);
        s += logo(682, 790, .95, c.accent);
      }
      return s;
    },
  };

  // ---------- Colección 02 ----------
  // Crop manga larga (mujer)
  G.crop = {
    body: sym([CX, 228], [[560, 226, 600, 200, 612, 168], [742, 206], [802, 300, 870, 700, 906, 1012], [828, 1040], [790, 760, 760, 560, 744, 470], [752, 560, 750, 650, 746, 736], [680, 752, 590, 756, CX, 756]]),
    detail: [560, 700, 420, 520],
    draw(c, v) {
      let s = "";
      s += `<path d="M388,168 C400,206 440,228 ${CX},228 C560,228 600,206 612,168" class="seam"/>`;
      s += both(`<path d="M612,170 C640,300 680,420 744,470" class="pipe"/>`);
      s += both(`<path d="M830,1000 L902,976" class="seam"/>`);
      s += both(`<ellipse cx="866" cy="1012" rx="14" ry="7" fill="${c.deep}"/>`);
      s += `<path d="M254,700 C350,716 440,720 ${CX},720 C560,720 650,716 746,700" class="stitch"/>`;
      s += both(`<path d="M560,400 C600,470 640,520 700,540" class="fold"/>`);
      s += both(`<path d="M800,560 C820,700 850,840 870,960" class="fold"/>`);
      s += v === "back" ? `<path d="M${CX},240 V740" class="seam"/>` : logo(CX, 640, 1.05, c.accent);
      return s;
    },
  };

  // Bike short (mujer)
  G.bike = {
    body: sym([CX, 176], [[706, 176], [716, 258, 746, 358, 760, 452], [764, 566, 754, 680, 748, 786], [560, 806], [553, 726, 530, 668, 512, 630], [CX, 616]]),
    detail: [320, 150, 360, 450],
    draw(c, v) {
      let s = "";
      s += `<path d="M294,176 H706 L716,258 C640,282 560,288 ${CX},288 C440,288 360,282 284,258 Z" fill="${c.shade}" opacity=".3"/>`;
      s += `<path d="M284,262 C360,288 440,294 ${CX},294 C560,294 640,288 716,262" class="seam"/>`;
      s += both(`<path d="M560,780 C620,760 690,756 748,768" class="pipe"/>`);
      s += both(`<path d="M520,640 C580,600 670,540 758,470" class="fold"/>`);
      s += both(`<path d="M700,330 L752,330 L758,470 L708,470 Z" fill="${c.shade}" opacity=".25"/>`);
      s += both(`<path d="M700,330 L708,470" class="seam"/>`);
      s += v === "back" ? word(CX, 240, 30, c.accent) : logo(CX, 226, 1.05, c.accent);
      return s;
    },
  };

  // Tank (hombre)
  G.tank = {
    body: sym([CX, 250], [[556, 248, 592, 222, 602, 176], [690, 172], [698, 300, 736, 404, 806, 470], [812, 700, 800, 950, 806, 1136], [700, 1150, 600, 1154, CX, 1154]]),
    detail: [520, 140, 420, 520],
    draw(c, v) {
      let s = "";
      s += `<path d="M398,176 C408,222 444,250 ${CX},250 C556,250 592,222 602,176" class="seam"/>`;
      s += both(`<path d="M690,180 C700,300 738,400 804,466" class="pipe"/>`);
      s += both(`<path d="M708,520 C730,700 740,900 744,1120" class="seam"/>`);
      s += both(`<path d="M560,600 C600,660 650,690 700,700" class="fold"/>`);
      s += `<path d="M198,1110 C300,1126 400,1130 ${CX},1130 C600,1130 700,1126 802,1110" class="stitch"/>`;
      s += v === "back" ? word(CX, 330, 34, c.accent) : logo(CX, 400, 1.3, c.accent);
      return s;
    },
  };

  // Jogger (hombre)
  G.jogger = {
    body: sym([CX, 150], [[716, 150], [720, 236], [736, 300, 762, 420, 770, 520], [772, 800, 724, 1000, 694, 1114], [694, 1196], [556, 1196], [556, 1114], [550, 900, 530, 700, 512, 640], [CX, 624]]),
    detail: [540, 150, 400, 500],
    draw(c, v) {
      let s = "";
      s += `<path d="M284,150 H716 L720,236 C640,248 560,252 ${CX},252 C440,252 360,248 280,236 Z" fill="${c.shade}" opacity=".35"/>`;
      s += `<path d="M280,238 C360,250 440,254 ${CX},254 C560,254 640,250 720,238" class="seam"/>`;
      s += both(`<path d="M556,1114 H694 V1196 H556 Z" fill="url(#rib${c.id})"/>`);
      s += both(`<path d="M556,1114 H694" class="seam"/>`);
      s += both(`<path d="M720,300 L748,470" class="pipe" stroke-width="7"/>`);
      s += both(`<path d="M560,520 C600,700 620,860 640,1100" class="fold"/>`);
      s += both(`<path d="M700,600 C710,760 700,900 690,1080" class="fold"/>`);
      s += both(`<path d="M552,760 C600,780 680,780 752,760" class="stitch"/>`);
      if (v !== "back") {
        s += `<path d="M486,236 C478,300 474,340 480,380 M514,236 C522,310 530,340 524,386" stroke="${c.cord}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
        s += logo(330, 370, .9, c.accent);
      } else {
        s += both(`<path d="M590,330 H700 V430 C680,440 610,440 590,430 Z" class="seam"/>`);
      }
      return s;
    },
  };

  /* ---- composición final ---- */
  function garmentSVG(type, colors, view = "front", opts = {}) {
    const g = G[type];
    const id = "g" + (++uid);
    const base = colors.base, accent = colors.accent || mix(base, "#ffffff", 0.35);
    const L = lum(base);
    const c = {
      id, base, accent,
      shade: mix(base, "#000000", L < 0.2 ? 0.55 : 0.28),
      deep: mix(base, "#000000", 0.6),
      mid: L < 0.35 ? mix(base, "#ffffff", 0.32) : mix(base, "#000000", 0.32),
      cord: L < 0.35 ? mix(base, "#ffffff", 0.55) : mix(base, "#000000", 0.45),
    };
    const hi = L < 0.2 ? 0.22 : L < 0.5 ? 0.16 : 0.1;
    const sh = L < 0.2 ? 0.55 : 0.3;
    const vb = view === "detail" ? g.detail.join(" ") : `0 0 ${W} ${H}`;
    const scene = opts.scene || ["#f1efeb", "#dedbd5"];

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" class="gsvg" role="img" aria-label="${opts.label || type}">
<defs>
  <radialGradient id="bg${id}" cx="50%" cy="38%" r="75%"><stop offset="0" stop-color="${scene[0]}"/><stop offset="1" stop-color="${scene[1]}"/></radialGradient>
  <linearGradient id="vol${id}" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity="${sh}"/><stop offset=".22" stop-color="#000" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity="${hi * 0.6}"/><stop offset=".78" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="${sh}"/></linearGradient>
  <linearGradient id="top${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="${hi}"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="${sh * 0.6}"/></linearGradient>
  <pattern id="mesh${id}" width="14" height="14" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="${c.shade}"/><circle cx="7" cy="7" r="3.4" fill="${c.deep}"/></pattern>
  <pattern id="dots${id}" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="${base}"/><circle cx="6" cy="6" r="2.2" fill="${c.shade}"/></pattern>
  <pattern id="rib${id}" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="${base}"/><rect width="4" height="10" fill="${c.shade}" opacity=".6"/></pattern>
  <filter id="tex${id}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
  <filter id="soft${id}" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9"/></filter>
  <filter id="drop${id}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="26"/></filter>
  <clipPath id="clip${id}"><path d="${g.body}"/></clipPath>
  <style>
    #${id} .seam{fill:none;stroke:#000;stroke-opacity:.28;stroke-width:3;stroke-linecap:round}
    #${id} .stitch{fill:none;stroke:#fff;stroke-opacity:${L < 0.3 ? 0.22 : 0.4};stroke-width:2;stroke-dasharray:6 7;stroke-linecap:round}
    #${id} .pipe{fill:none;stroke:${accent};stroke-width:10;stroke-linecap:round}
    #${id} .fold{fill:none;stroke:#000;stroke-opacity:${L < 0.2 ? 0.35 : 0.12};stroke-width:16;stroke-linecap:round;filter:url(#soft${id})}
    #${id} .shine{fill:none;stroke:#fff;stroke-opacity:${L < 0.2 ? 0.12 : 0.2};stroke-width:26;stroke-linecap:round;filter:url(#soft${id})}
  </style>
</defs>
${opts.noBg ? "" : `<rect x="-200" y="-200" width="${W + 400}" height="${H + 400}" fill="url(#bg${id})"/>
<ellipse cx="${CX}" cy="${H - 40}" rx="300" ry="26" fill="#000" opacity=".12" filter="url(#drop${id})"/>`}
<g id="${id}">
  <path d="${g.body}" fill="#000" opacity=".22" transform="translate(0,26)" filter="url(#drop${id})"/>
  <path d="${g.body}" fill="${base}"/>
  <g clip-path="url(#clip${id})">
    ${g.draw(c, view)}
    <rect width="${W}" height="${H}" fill="url(#vol${id})"/>
    <rect width="${W}" height="${H}" fill="url(#top${id})"/>
    <rect width="${W}" height="${H}" fill="#fff" filter="url(#tex${id})" opacity="${L < 0.25 ? 0.10 : 0.07}"/>
  </g>
  <path d="${g.body}" fill="none" stroke="#000" stroke-opacity=".18" stroke-width="2.5"/>
  ${g.hole && g.hole(view) ? `<path d="${g.hole(view)}" fill="${opts.noBg ? "none" : `url(#bg${id})`}" stroke="#000" stroke-opacity=".25" stroke-width="3"/>` : ""}
</g>
</svg>`;
  }

  /* set: dos prendas en una misma toma (arriba + abajo, en diagonal) */
  function setSVG(top, bottom, view = "front", opts = {}) {
    const scene = opts.scene || ["#f1efeb", "#dedbd5"];
    const id = "s" + (++uid);
    const inner = (t, x, y, w) => garmentSVG(t[0], t[1], view, { noBg: true })
      .replace("<svg ", `<svg x="${x}" y="${y}" width="${w}" height="${w * 1.25}" `);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="gsvg" role="img" aria-label="${opts.label || "set"}">
<defs><radialGradient id="bg${id}" cx="50%" cy="38%" r="75%"><stop offset="0" stop-color="${scene[0]}"/><stop offset="1" stop-color="${scene[1]}"/></radialGradient></defs>
<rect width="${W}" height="${H}" fill="url(#bg${id})"/>
${inner(bottom, 250, 330, 720)}
${inner(top, 20, 20, 620)}
</svg>`;
  }

  window.garmentSVG = garmentSVG;
  window.setSVG = setSVG;
  window.GARMENT_TYPES = Object.keys(G);
})();
