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
- `assets/img/` — fotos del lookbook optimizadas + recortes en B&W.

## Añadir productos o colores
Editar el arreglo `PRODUCTS` en `app.js`. Cada color tiene `name`, `hex`, `accent` opcional y su propia lista de `views` (fotos en `assets/img/`). Al añadir un segundo color, el selector de color y la galería 3D se actualizan solos.
