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

<section class="mx-auto grid max-w-screen-xl gap-8 sm:grid-cols-2">
  <div>
    <h3 class="h4">Moon hashtag pop-up try-hard offal truffaut</h3>

    <p class="mt-2 text-sm text-gray-600">
      Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable
      fingerstache kickstarter.
    </p>

    <div class="mt-8 grid grid-cols-2 gap-y-8 lg:grid-cols-4">
      {#each items as item}
        <div>
          <h3 class="h3">{item.amount}</h3>
          <p class="text-sm text-gray-600">{item.label}</p>
        </div>
      {/each}
    </div>
  </div>

  <img alt="Statistic" src="https://dummyimage.com/600x300" />
</section>
