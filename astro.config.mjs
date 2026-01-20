import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import playformCompress from "@playform/compress";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  imageService: "compile",
  integrations: [playformCompress()],
});

playformCompress({
  CSS: true,
  HTML: true,
  Image: false,
  JavaScript: true,
  SVG: true,
});
