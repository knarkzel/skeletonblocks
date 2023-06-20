<script lang="ts">
  import NavItem from "./NavItem.svelte";
</script>

<nav class="space-y-2">
  <h3 class="h3">BLOG</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name='Regular' path='/blog/regular' />
    </ul>
  </section>

  <h3 class="h3">CONTACT</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name='Regular' path='/contact/regular' />
    </ul>
  </section>
</nav>
