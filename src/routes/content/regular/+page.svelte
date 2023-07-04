<script lang="ts">
  import IconArrowRight from "~icons/mdi/arrow-right";

  const items = [
    {
      title: "Shooting Stars",
      body: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
    },
    {
      title: "The Catalyzer",
      body: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
    },
    {
      title: "Neptune",
      body: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
    },
    {
      title: "Melanchole",
      body: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
    }
  ];
</script>

<section>
  <div class="mx-auto max-w-screen-sm text-center">
    <small class="text-primary-700 dark:text-primary-400">ROOF PARTY POLAROID</small>
    <h3 class="h3">Master Cleanse Reliac Heirloom</h3>
    <p class="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
      Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
      farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies
      heirloom prism food truck ugh squid celiac humblebrag.
    </p>
  </div>

  <div class="mx-auto my-8 grid max-w-screen-lg gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each items as item}
      <div class="border-l-2 border-gray-300 pl-4">
        <p>{item.title}</p>
        <p class="my-2 text-gray-600 dark:text-gray-400">{item.body}</p>
        <a class="anchor no-underline dark:text-primary-400" href="#">
          Learn More <IconArrowRight class="inline" />
        </a>
      </div>
    {/each}
  </div>

  <button class="btn variant-filled-primary mx-auto block">Button</button>
</section>
