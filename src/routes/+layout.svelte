<script lang="ts">
  import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '../app.postcss';

  // Highlighting
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github-dark.css';
  import { storeHighlightJs } from '@skeletonlabs/skeleton';
  storeHighlightJs.set(hljs);

  import { AppShell } from '@skeletonlabs/skeleton';
  import SideBar from './SideBar.svelte';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4 shadow-lg">
  <svelte:fragment slot="sidebarLeft">
    <SideBar />
  </svelte:fragment>

  <slot />
</AppShell>
