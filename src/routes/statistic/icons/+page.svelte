<script lang="ts">
  import IconDownload from "~icons/mdi/download";
  import IconAccounts from "~icons/mdi/account-multiple";
  import IconFile from "~icons/mdi/file";
  import IconMap from "~icons/mdi/map-marker";

  const items = [
    {
      component: IconDownload,
      amount: "2.7K",
      label: "Users"
    },
    {
      component: IconAccounts,
      amount: "1.8K",
      label: "Subscribers"
    },
    {
      component: IconFile,
      amount: "35",
      label: "Downloads"
    },
    {
      component: IconMap,
      amount: "4",
      label: "Places"
    }
  ];
</script>

<section class="mx-auto max-w-screen-xl">
  <div class="mx-auto max-w-screen-md">
    <h3 class="h3 text-center">Moon hashtag pop-up try-hard offal truffaut</h3>

    <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
      Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
      farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies
      heirloom prism food truck ugh squid celiac humblebrag.
    </p>
  </div>

  <div class="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
    {#each items as item}
      <div
        class="border-1 flex flex-col items-center rounded-lg border border-gray-300 p-8 dark:border-gray-600"
      >
        <svelte:component
          this={item.component}
          class="text-3xl text-primary-600 dark:text-primary-400"
        />
        <h3 class="h3 mt-2">{item.amount}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
      </div>
    {/each}
  </div>
</section>
