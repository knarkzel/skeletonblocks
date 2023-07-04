<script lang="ts">
  import { CodeBlock } from "@skeletonlabs/skeleton";

  const instructions = `
npm create skeleton-app@latest my-app
cd my-app
npm i -D unplugin-icons
  `;

  const icons = `
import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: 'svelte',
      autoInstall: true,
    })
  ]
})
  `;
</script>

<div class="mx-auto mt-8 max-w-screen-md pb-24">
  <div>
    <h1 class="h1 mb-6 text-center">SkeletonBlocks</h1>
    <p>
      SkeletonBlocks is a comprehensive collection of ready-to-use Tailwind CSS blocks that
      seamlessly integrate SkeletonUI and TailwindCSS, offering a convenient solution for developers
      seeking pre-built CSS blocks. This versatile package leverages the power of Svelte, Tailwind,
      and the lightweight SkeletonUI framework to provide a vast assortment of easily customizable
      blocks for web development projects.
    </p>
    <p class="mt-4">Before getting started, make sure you have installed following:</p>
    <ul class="my-6 ml-8 list-disc">
      <li class="px-2 py-1">
        <a class="anchor dark:text-primary-400" href="https://svelte.dev/">Svelte</a>
      </li>
      <li class="px-2 py-1">
        <a class="anchor dark:text-primary-400" href="https://www.skeleton.dev/">SkeletonUI</a>
      </li>
      <li class="px-2 py-1">
        <a class="anchor dark:text-primary-400" href="https://github.com/antfu/unplugin-icons">unplugin-icons</a>
      </li>
    </ul>
    <p>All of these can be installed from scratch like so:</p>
    <CodeBlock class="mt-6" language="bash" code={instructions} />
    <p class="my-6">
      Then edit your <code class="code">vite.config.js</code>
      like so:
    </p>
    <CodeBlock language="js" code={icons} />
  </div>
</div>
