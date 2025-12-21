# 🔎 Switch Games Searcher

**Buscador de juegos de Nintendo Switch** — aplicación SPA creada con React + Vite que consulta una API pública de [Sample APIs](https://sampleapis.com/): `api.sampleapis.com/switch/games` y muestra una lista de juegos con una vista de detalle por juego.  
Se usa `react-router` para el enrutamiento.

Cada ruta muestra:
- `/` → Un listado de juegos con título y desarrolladores.
- `/:gameId` → Una vista de detalle por juego con géneros, desarrolladores, publicadores y fechas de lanzamiento.

Se puede visualizar desde el siguiente link: [search-switch-games](https://search-switch-games.netlify.app/) o ejecutar de manera local.

---

## 🛠 Requisitos

- Node.js 18+ (recomendado)
- npm o pnpm

### ▶️ Instalación y uso

Clona el repositorio e instala dependencias:

```bash
git clone <repo-url>
cd learning-react/projects/02-search-games-API
npm install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre `http://localhost:5173` (o la URL indicada por Vite).

Otros comandos disponibles:

- `npm run dev` — Inicia Vite en modo desarrollo
- `npm run build` — Genera build de producción
- `npm run preview` — Sirve el build para pruebas locales
