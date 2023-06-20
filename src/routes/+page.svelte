<script lang="ts">
  import { CodeBlock } from '@skeletonlabs/skeleton';

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

<svelte:head>
  <title>SkeletonBlocks</title>
</svelte:head>

<div class="flex items-center justify-center h-screen">
  <div>
    <h1 class="h1 mb-6 text-center">SkeletonBlocks</h1>
    <p>Before getting started, make sure you have following dependencies:</p>
    <ul class="list-disc ml-8 my-6">
      <li class="pl-1">Svelte / SvelteKit with TypeScript</li>
      <li class="pl-1"><a class="anchor" href="https://www.skeleton.dev/">SkeletonUI</a></li>
      <li class="pl-1">
        <a class="anchor" href="https://github.com/antfu/unplugin-icons">unplugin-icons</a>
      </li>
    </ul>
    <p>All of these can be installed from scratch like so:</p>
    <CodeBlock class="mt-6" code={instructions} />
    <p class="my-6">Then edit your <code class="code">vite.config.ts</code> like so:</p>
    <CodeBlock language="js" code={icons} />
  </div>
</div>
