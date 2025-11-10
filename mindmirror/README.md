# MindMirror

MindMirror is an interactive, multi-screen learning experience inspired by the [Mockello concept design](https://mockello.my.canva.site/). It guides students from a cinematic landing page into a glassmorphic login form, then into strengths and weaknesses dashboards enhanced with animations, progress analytics, and gamified visuals.

## Screens

1. **Landing** – Futuristic hero with animated copy and call-to-action
2. **Login** – Frosted glass form with validation and guest entry
3. **Strengths** – Animated list with chart-style visual
4. **Weaknesses** – Actionable improvements plus analytics graph

## Tech Stack

- React 19 + Vite
- Framer Motion (animations)
- Custom CSS (glassmorphism, gradients, analytics graph)

## Available Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

The development server defaults to port `5173`, but Vite automatically retries (e.g., `5175`) if that port is in use.

## Project Structure

```
mindmirror/
├─ public/
├─ src/
│  ├─ App.jsx        # main multi-screen experience
│  ├─ App.css        # styling for each screen
│  ├─ index.css      # base styles and animations
│  └─ main.jsx       # entry point
├─ index.html
└─ README.md
```

## Deployment

1. Create the production build:
   ```bash
   npm run build
   ```
2. Serve the `dist/` directory (for example with Vercel, Netlify, or GitHub Pages).

## License

MIT © 2025 MindMirror
