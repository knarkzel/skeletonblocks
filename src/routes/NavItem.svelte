<script lang="ts">
  import { base } from "$app/paths";
  import IconXml from "~icons/mdi/xml";

  export let name: string;
  export let path: string;
</script>

<li>
  <div class="flex justify-between">
    <a class="w-full truncate" href="{base}{path}">{name}</a>
    <a
      href="https://github.com/knarkzel/skeletonblocks/blob/master/src/routes{path}/+page.svelte"
      target="_blank"
      aria-label="Source"
    >
      <IconXml />
    </a>
  </div>
</li>
