<script lang="ts">
  import IconApple from "~icons/mdi/apple";
  import IconPlaystore from "~icons/ion/logo-google-playstore";
</script>

<section class="mx-auto flex max-w-2xl flex-col items-center">
  <img alt="Product" src="https://dummyimage.com/360x300" />

  <h3 class="h3 mt-4">Knausgaard typewriter readymade marfa</h3>

  <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
    Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester
    copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid
    listicle artisan.
  </p>

  <form class="mt-6 flex gap-4">
    <label class="label">
      <small>Placeholder</small>
      <input class="input" type="email" />
    </label>

    <button class="btn variant-filled-primary mt-auto h-min">Button</button>
  </form>

  <small class="mt-2 text-gray-600 dark:text-gray-400">Neutra shabby chic ramps, viral fixie.</small>

  <div class="mt-6 flex gap-4">
    <div
      class="flex items-center gap-2 rounded-lg bg-gray-300 px-4 py-2 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
    >
      <IconPlaystore class="text-2xl" />
      <div class="leading-5">
        <small class="text-xs text-gray-600 dark:text-gray-400">GET IT ON</small>
        <p>Google Play</p>
      </div>
    </div>

    <div
      class="flex items-center gap-2 rounded-lg bg-gray-300 px-4 py-2 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
    >
      <IconApple class="text-2xl" />
      <div class="leading-5">
        <small class="text-xs text-gray-600 dark:text-gray-400">DOWNLOAD ON THE</small>
        <p>App Store</p>
      </div>
    </div>
  </div>
</section>
