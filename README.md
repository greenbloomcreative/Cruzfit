# Cruzfit Active Wear — Catálogo digital

Sitio estático (HTML + CSS + JS, sin dependencias). Abrir `index.html` o servir la carpeta:

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Estructura
- `index.html` — secciones: banner tipográfico, statement B&W, categorías (bento), catálogo, marca, footer y modal de producto.
- `styles.css` — diseño general en blanco y negro; rosa (Pulse) y lima (Core) solo como acentos de producto.
- `app.js` — datos del catálogo (`PRODUCTS`), filtros y galería 3D de producto.
- `assets/brand/` — logo vectorizado desde el PDF de marca (icono, wordmark y lockup).
- `assets/img/` — fotos del lookbook con cielo (portadas y categorías) + recortes en B&W.
- `garments.js` — renders de producto (SVG) de cada prenda, en cualquier color: frente, espalda y detalle.

## Añadir productos o colores
Editar `PRODUCTS` y `PALETTE` en `app.js`. Cada producto indica su prenda (`render`) o sus dos prendas (`set`) y una paleta de colores (`base` + `accent`). Las portadas del bento por categoría están en `BENTO` y usan las fotos reales de los modelos.
