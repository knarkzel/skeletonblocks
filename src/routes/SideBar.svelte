<script lang="ts">
  import NavItem from "./NavItem.svelte";
</script>

<nav class="w-64 space-y-2 p-4 pb-24">
  <h3 class="h3">BLOG</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/blog/regular" />
      <NavItem name="Detailed" path="/blog/detailed" />
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
      <NavItem name="Vertical" path="/cta/vertical" />
      <NavItem name="Horizontal" path="/cta/horizontal" />
    </ul>
  </section>

  <h3 class="h3">ECOMMERCE</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/ecommerce/regular" />
    </ul>
  </section>
  
  <h3 class="h3">HERO</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/hero/regular" />
      <NavItem name="Flipped" path="/hero/flipped" />
      <NavItem name="Vertical" path="/hero/vertical" />
      <NavItem name="Icons" path="/hero/icons" />
      <NavItem name="Icons flipped" path="/hero/icons-flipped" />
      <NavItem name="Icons vertical" path="/hero/icons-vertical" />
    </ul>
  </section>

  <h3 class="h3">PRICING</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/pricing/regular" />
      <NavItem name="Alternative" path="/pricing/alternative" />
    </ul>
  </section>

  <h3 class="h3">STATISTIC</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/statistic/regular" />
      <NavItem name="Image" path="/statistic/image" />
      <NavItem name="Icons" path="/statistic/icons" />
    </ul>
  </section>

  <h3 class="h3">TESTIMONIAL</h3>

  <section class="list-nav pb-2">
    <ul>
      <NavItem name="Regular" path="/testimonial/regular" />
      <NavItem name="Vertical" path="/testimonial/vertical" />
      <NavItem name="Horizontal" path="/testimonial/horizontal" />
    </ul>
  </section>
</nav>
