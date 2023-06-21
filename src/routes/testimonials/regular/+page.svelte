<script lang="ts">
  import { Avatar } from "@skeletonlabs/skeleton";
  import IconQuote from "~icons/mdi/format-quote-open";

  const items = [
    {
      body: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Holden Caulfield",
      category: "UI DEVELOPER"
    },
    {
      body: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Alper Kamu",
      category: "DESIGNER"
    }
  ];
</script>

<section>
  <h3 class="h3 text-center">Testimonials</h3>
  <div class="mt-8 grid grid-cols-2 gap-8">
    {#each items as item}
      <div class="rounded bg-gray-300 p-4">
        <IconQuote class="text-2xl text-gray-500" />
        <p class="mt-1 pl-1 text-sm leading-relaxed text-gray-700">
          {item.body}
        </p>
        <div class="mt-4 flex items-center gap-4">
          <Avatar />
          <div class="flex flex-col">
            <p>{item.author}</p>
            <small class="text-gray-600">{item.category}</small>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
