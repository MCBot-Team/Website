# MCBot Website

The official website for MCBot - Your all-in-one Discord bot for Minecraft communities.

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 📦 Deployment

The site is built as a static site and can be deployed to any static hosting service:

```bash
npm run build
```

The built files will be in the `dist/` directory.
