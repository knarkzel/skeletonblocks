<script lang="ts">
  import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '../app.postcss';

  import { AppShell } from '@skeletonlabs/skeleton';
  import SideBar from './SideBar.svelte';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4 shadow-lg">
  <svelte:fragment slot="sidebarLeft">
    <SideBar />
  </svelte:fragment>

  <slot />
</AppShell>
