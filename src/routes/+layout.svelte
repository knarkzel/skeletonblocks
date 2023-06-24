<script lang="ts">
  import "@skeletonlabs/skeleton/themes/theme-hamlindigo.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";
  import { base } from "$app/paths";
  
  import { AppShell } from "@skeletonlabs/skeleton";
  import SideBar from "./SideBar.svelte";
</script>

<div class="p-4 shadow-md">
  <p class="text-center">
    Created by <a href="https://www.youtube.com/@svelterust" target="_blank">
      <span class="anchor">@svelterust</span>
      <img class="h-8 inline ml-1" alt="SvelteRust" src="{base}/logo.png"/>
    </a>
  </p>
</div>

<AppShell slotSidebarLeft="w-64 p-4">
  <svelte:fragment slot="sidebarLeft">
    <SideBar />
  </svelte:fragment>

  <div class="p-4">
    <slot />
  </div>
</AppShell>
