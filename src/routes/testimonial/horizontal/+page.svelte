<script lang="ts">
  import { Avatar } from '@skeletonlabs/skeleton';

  const items = [
    {
      body: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      author: 'HOLDEN CAULFIELD',
      category: 'Senior Product Designer'
    },
    {
      body: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      author: 'ALPER KAMU',
      category: 'UI Developer'
    },
    {
      body: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      author: 'HENRY LETHAM',
      category: 'CTO'
    }
  ];
</script>

<section class="mx-auto grid max-w-screen-xl lg:grid-cols-3 gap-x-8 gap-y-16">
  {#each items as item}
    <div class="flex flex-col items-center gap-4">
      <Avatar />
      <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-md">{item.body}</p>
      <span class="mb-4 mt-6 inline-block h-1 w-10 rounded bg-primary-700" />
      <div class="text-center">
        <p class="text-xs">{item.author}</p>
        <small class="text-gray-600 dark:text-gray-500">{item.category}</small>
      </div>
    </div>
  {/each}
</section>
