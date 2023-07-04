<script lang="ts">
  const items = [
    {
      category: "CATEGORY",
      title: "The Catalyzer",
      price: "$16.00",
      image: "https://dummyimage.com/800x600"
    },
    {
      category: "CATEGORY",
      title: "Shooting Stars",
      price: "$21.15",
      image: "https://dummyimage.com/800x600"
    },
    {
      category: "CATEGORY",
      title: "Neptune",
      price: "$12.00",
      image: "https://dummyimage.com/800x600"
    },
    {
      category: "CATEGORY",
      title: "The 400 Blows",
      price: "$18.40",
      image: "https://dummyimage.com/800x600"
    },
    {
      category: "CATEGORY",
      title: "The Catalyzer",
      price: "$16.00",
      image: "https://dummyimage.com/800x600"
    },
    {
      category: "CATEGORY",
      title: "Shooting Stars",
      price: "$21.15",
      image: "https://dummyimage.com/800x600"
    },
    {
      category: "CATEGORY",
      title: "Neptune",
      price: "$12.00",
      image: "https://dummyimage.com/800x600"
    },
    {
      category: "CATEGORY",
      title: "The 400 Blows",
      price: "$18.40",
      image: "https://dummyimage.com/800x600"
    }
  ];
</script>

<section class="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
  {#each items as item}
    <div>
      <img class="w-full" alt={item.title} src={item.image} width="800" height="600" />
      <p class="mt-3 text-xs text-gray-700 dark:text-gray-400">{item.category}</p>
      <p class="mt-1">{item.title}</p>
      <p class="mt-1 text-sm text-gray-800 dark:text-gray-300">{item.price}</p>
    </div>
  {/each}
</section>
