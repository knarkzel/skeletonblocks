<script lang="ts">
  import "@skeletonlabs/skeleton/themes/theme-hamlindigo.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";

  import { base } from "$app/paths";
  import { Drawer, drawerStore, AppShell } from "@skeletonlabs/skeleton";
  import { LightSwitch } from "@skeletonlabs/skeleton";
  import SideBar from "./SideBar.svelte";
  import IconMenu from "~icons/mdi/menu";
  import IconGitHub from "~icons/mdi/github";

  function openDrawer() {
    drawerStore.open({
      width: "w-min"
    });
  }
</script>

<Drawer>
  <SideBar />
</Drawer>

<div class="flex items-center justify-between p-4 shadow-md">
  <button on:click={openDrawer} aria-label="Menu">
    <IconMenu class="text-2xl lg:hidden" />
  </button>

  <div class="flex items-center gap-4">
    <a href="https://www.youtube.com/@svelterust" target="_blank">
      <img class="inline h-8" alt="SvelteRust" src="{base}/logo.png" width="32" height="32" />
    </a>
    
    <a href="https://github.com/knarkzel/skeletonblocks">
      <IconGitHub class="inline text-2xl" />
    </a>
    
    <LightSwitch />
  </div>
</div>

<AppShell slotSidebarLeft="hidden lg:block">
  <svelte:fragment slot="sidebarLeft">
    <SideBar />
  </svelte:fragment>

  <div class="p-4">
    <slot />
  </div>
</AppShell>
