<script lang="ts">
  import "@skeletonlabs/skeleton/themes/theme-hamlindigo.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";

  import { base } from "$app/paths";
  import { Drawer, drawerStore, AppShell } from "@skeletonlabs/skeleton";
  import { LightSwitch } from '@skeletonlabs/skeleton';
  import SideBar from "./SideBar.svelte";
  import IconMenu from "~icons/mdi/menu";


  function openDrawer() {
    drawerStore.open({
      width: "w-min",
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

  <p class="text-center">
    Created by <a href="https://www.youtube.com/@svelterust" target="_blank">
      <span class="anchor hidden sm:inline">@svelterust</span>
      <img class="ml-1 inline h-8" alt="SvelteRust" src="{base}/logo.png" width="32" height="32" />
    </a>
  </p>

  <LightSwitch />
</div>

<AppShell slotSidebarLeft="hidden lg:block">
  <svelte:fragment slot="sidebarLeft">
    <SideBar />
  </svelte:fragment>

  <div class="p-4">
    <slot />
  </div>
</AppShell>
