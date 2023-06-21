import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      strict: false,
      fallback: "index.html"
    }),
    paths: {
      base: dev ? "" : process.env.BASE_PATH
    }
  }
};

export default config;
