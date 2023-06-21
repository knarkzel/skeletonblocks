<script lang="ts">
  import IconApple from '~icons/mdi/apple';
  import IconPlaystore from '~icons/ion/logo-google-playstore';
</script>

<section class="mx-auto grid max-w-screen-xl gap-8 md:grid-cols-2 lg:grid-cols-3 items-center">
  <img alt="Product" src="https://dummyimage.com/720x600" />

  <div class="flex flex-col items-center md:items-start lg:col-span-2">
    <h2 class="h2">Knausgaard typewriter readymade marfa</h2>

    <p class="mt-2 text-sm text-gray-600">
      Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
      typewriter affogato, hella selvage wolf narwhal dreamcatcher.
    </p>

    <form class="flex gap-4 mt-6">
      <label class="label">
        <small>Placeholder</small>
        <input class="input" type="email" />
      </label>

      <button class="btn variant-filled-primary mt-auto h-min">Button</button>
    </form>

    <small class="text-gray-600">Neutra shabby chic ramps, viral fixie.</small>

    <div class="flex gap-4 mt-6">
      <div class="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-gray-600">
        <IconApple class="text-2xl" />
        <div class="leading-5">
          <small class="text-xs">GET IT ON</small>
          <p>Google Play</p>
        </div>
      </div>

      <div class="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-gray-600">
        <IconApple class="text-2xl" />
        <div class="leading-5">
          <small class="text-xs">DOWNLOAD ON THE</small>
          <p>App Store</p>
        </div>
      </div>
    </div>
  </div>
</section>
