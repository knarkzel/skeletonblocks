<script lang="ts">
  import IconFacebook from '~icons/mdi/facebook';
  import IconTwitter from '~icons/mdi/twitter';
  import IconInstagram from '~icons/ri/instagram-fill';
  import IconComment from '~icons/mdi/comment';
</script>

<section class="max-w-screen-sm mx-auto">
  <h3 class="h3 text-center mb-2">Contact Us</h3>
  <p class="text-gray-700 leading-relaxed">
    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
  </p>
  <form class="mt-4 space-y-2">
    <div class="grid sm:grid-cols-2 gap-4">
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

    <div class="flex justify-center text-gray-700 gap-3">
      <IconFacebook />
      <IconTwitter />
      <IconInstagram />
      <IconComment />
    </div>
  </div>
</section>
