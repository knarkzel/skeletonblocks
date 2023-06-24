<script lang="ts">
  const items = [
    {
      amount: "2.7K",
      label: "Users"
    },
    {
      amount: "1.8K",
      label: "Subscribers"
    },
    {
      amount: "35",
      label: "Downloads"
    },
    {
      amount: "4",
      label: "Products"
    }
  ];
</script>

<section class="grid grid-cols-2 gap-y-8 md:grid-cols-4">
  {#each items as item}
    <div class="text-center">
      <h3 class="h3">{item.amount}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
    </div>
  {/each}
</section>
