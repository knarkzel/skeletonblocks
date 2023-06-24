<script lang="ts">
  import IconApple from "~icons/mdi/apple";
  import IconPlaystore from "~icons/ion/logo-google-playstore";
</script>

<section class="mx-auto grid max-w-screen-xl items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
  <div class="flex flex-col items-center md:items-start lg:col-span-2">
    <h2 class="h2">Knausgaard typewriter readymade marfa</h2>

    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato,
      hella selvage wolf narwhal dreamcatcher.
    </p>

    <form class="mt-6 flex gap-4">
      <label class="label">
        <small>Placeholder</small>
        <input class="input" type="email" />
      </label>

      <button class="btn variant-filled-primary mt-auto h-min">Button</button>
    </form>

    <small class="text-gray-600 dark:text-gray-400">Neutra shabby chic ramps, viral fixie.</small>

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
  </div>

  <img alt="Product" src="https://dummyimage.com/720x600" />
</section>
