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
- `assets/img/studio/` — las mismas fotos recortadas sobre fondo de estudio, para catálogo y fichas.

## Añadir productos o colores
Editar el arreglo `PRODUCTS` en `app.js`. Cada color tiene `name`, `hex`, `accent` opcional y su propia lista de `views` (fotos en `assets/img/studio/`). Los colores sin foto van en `soon` y se muestran como "Próximamente". Las portadas del bento por categoría están en `BENTO`.
