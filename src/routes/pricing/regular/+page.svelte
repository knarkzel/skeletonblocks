<script lang="ts">
  import IconArrowRight from "~icons/mdi/arrow-right";
  import IconCheck from "~icons/mdi/check-circle";
  import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
  
  const items = [
    {
      price: 0,
      package: "START",
      features: ["Vexillologist pitchfork", "Tumeric plaid portland", "Mixtape chillwave tumeric"],
      hint: "Literally you probably haven't heard of them jean shorts."
    },
    {
      price: 38,
      package: "PRO",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
        "Hexagon neutra unicorn"
      ],
      hint: "Literally you probably haven't heard of them jean shorts."
    },
    {
      price: 56,
      package: "BUSINESS",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
        "Vexillologist pitchfork",
        "Hexagon neutra unicorn"
      ],
      hint: "Literally you probably haven't heard of them jean shorts."
    },
    {
      price: 72,
      package: "SPECIAL",
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
        "Vexillologist pitchfork",
        "Hexagon neutra unicorn"
      ],
      hint: "Literally you probably haven't heard of them jean shorts."
    }
  ];

  let value: "monthly" | "annually" = "monthly";
</script>

<section>
  <div class="flex flex-col items-center gap-2">
    <h2 class="h2">Pricing</h2>
    
    <p class="text-gray-700 dark:text-gray-400">
      Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
    </p>

    <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
      <RadioItem name="justify" bind:group={value} value="monthly">Monthly</RadioItem>
      <RadioItem name="justify" bind:group={value} value="annually">Annually</RadioItem>
    </RadioGroup>
  </div>

  <div class="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto">
    {#each items as item}
      <div class="flex flex-col justify-between rounded border border-gray-400 dark:border-gray-500 p-4">
        <div>
          <small class="text-gray-600 dark:text-gray-400">{item.package}</small>

          <div class="flex items-center gap-2 border-b border-gray-300 dark:border-gray-600 pb-2">
            <h2 class="h2">
              {#if item.price === 0} Free {:else} ${item.price} {/if}
            </h2>
            {#if item.price > 0}
              <p class="text-gray-600 dark:text-gray-400">/mo</p>
            {/if}
          </div>

          <div class="my-4 space-y-2 text-gray-700 dark:text-gray-300">
            {#each item.features as feature}
              <p class="flex items-center gap-2 text-xs">
                <IconCheck />
                {feature}
              </p>
            {/each}
          </div>
        </div>

        <div>
          <button class="btn variant-filled-primary mt-4 flex w-full justify-between">
            Button
            <IconArrowRight />
          </button>

          <p class="mt-2 text-xs text-gray-600 dark:text-gray-400">{item.hint}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
