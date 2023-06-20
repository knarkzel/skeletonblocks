<script lang="ts">
  import IconFacebook from '~icons/mdi/facebook';
  import IconTwitter from '~icons/mdi/twitter';
  import IconInstagram from '~icons/ri/instagram-fill';
  import IconComment from '~icons/mdi/comment';
</script>

<section class="mx-auto max-w-screen-sm">
  <h3 class="h3 mb-2 text-center">Contact Us</h3>
  <p class="leading-relaxed text-gray-700">
    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
  </p>
  <form class="mt-4 space-y-2">
    <div class="grid gap-4 sm:grid-cols-2">
      <label class="label">
        <span>Name</span>
        <input class="input" type="text" />
      </label>

      <label class="label">
        <span>Email</span>
        <input class="input" type="email" />
      </label>
    </div>

    <label class="label">
      <span>Message</span>
      <textarea class="textarea" rows="4" />
    </label>

    <button class="btn variant-filled-primary mx-auto block">Button</button>
  </form>

  <hr class="my-8" />

  <div class="grid gap-4 text-center">
    <a class="anchor no-underline" href="#">example@email.com</a>

    <div class="text-gray-700">
      <p>49 Smith St.</p>
      <p>Saint Cloud, MN 56301</p>
    </div>

    <div class="flex justify-center gap-3 text-gray-700">
      <IconFacebook />
      <IconTwitter />
      <IconInstagram />
      <IconComment />
    </div>
  </div>
</section>
