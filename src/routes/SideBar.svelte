<script lang="ts">
  import { base } from "$app/paths";
  import IconXml from '~icons/mdi/xml';
</script>

<div>
  <h3 class="h3 pb-2">BLOG</h3>

  <nav class="list-nav">
    <ul>
      <li>
        <div class="flex justify-between">
          <a class="w-full" href="{base}/blog/simple">Simple</a>
          <a href="https://github.com/knarkzel/skeletonblocks/blob/master/src/routes/blog/simple/+page.svelte" target="_blank">
            <IconXml />
          </a>
        </div>
      </li>
    </ul>
  </nav>
</div>
