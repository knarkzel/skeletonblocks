<script lang="ts">
  import NavItem from "./NavItem.svelte";
</script>

<nav class="space-y-2">
  <h3 class="h3">BLOG</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/blog/regular" />
    </ul>
  </section>

  <h3 class="h3">CONTACT</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/contact/regular" />
    </ul>
  </section>

  <h3 class="h3">CONTENT</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/content/regular" />
    </ul>
  </section>

  <h3 class="h3">CTA</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/cta/regular" />
      <NavItem name="With signup horizontal" path="/cta/with-signup-horizontal" />
      <NavItem name="With signup vertical" path="/cta/with-signup-vertical" />
    </ul>
  </section>

  <h3 class="h3">HERO</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/hero/regular" />
    </ul>
  </section>

  <h3 class="h3">STATISTIC</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/statistic/regular" />
      <NavItem name="With image" path="/statistic/with-image" />
      <NavItem name="With icons" path="/statistic/with-icons" />
    </ul>
  </section>

  <h3 class="h3">TESTIMONIALS</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/testimonials/regular" />
      <NavItem name="Vertical" path="/testimonials/vertical" />
      <NavItem name="Horizontal" path="/testimonials/horizontal" />
    </ul>
  </section>
</nav>
