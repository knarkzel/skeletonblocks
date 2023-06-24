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

<div class="mt-8 max-w-screen-md mx-auto">
  <div>
    <h1 class="h1 mb-6 text-center">SkeletonBlocks</h1>
    <p>
      SkeletonBlocks is a free collection of  combines the simplicity
      and versatility of the Skeleton CSS framework with the powerful block-based
      design approach of Tailblocks. 
      Before getting started, make sure you have following dependencies:
    </p>
    <ul class="my-6 ml-8 list-disc">
      <li class="pl-1">Svelte / SvelteKit with TypeScript</li>
      <li class="pl-1"><a class="anchor" href="https://www.skeleton.dev/">SkeletonUI</a></li>
      <li class="pl-1">
        <a class="anchor" href="https://github.com/antfu/unplugin-icons">unplugin-icons</a>
      </li>
    </ul>
    <p>All of these can be installed from scratch like so:</p>
    <CodeBlock class="mt-6" language="bash" code={instructions} />
    <p class="my-6">Then edit your <code class="code">vite.config.ts</code>
like so:</p>
    <CodeBlock language="js" code={icons} />
  </div>
</div>
