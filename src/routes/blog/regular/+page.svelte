<script lang="ts">
  import IconEye from "~icons/mdi/eye-outline";
  import IconComment from "~icons/mdi/comment-outline";
  import IconArrowRight from "~icons/mdi/arrow-right";

  const items = [
    {
      title: "The Catalyzer",
      category: "CATEGORY",
      body: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      image: "https://dummyimage.com/720x400",
      views: "1.2K",
      comments: 6
    },
    {
      title: "The 400 Blows",
      category: "CATEGORY",
      body: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      image: "https://dummyimage.com/720x400",
      views: "1.2K",
      comments: 6
    },
    {
      title: "Shooting Stars",
      category: "CATEGORY",
      body: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      image: "https://dummyimage.com/720x400",
      views: "1.2K",
      comments: 6
    }
  ];
</script>

<section class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {#each items as item}
    <div class="shadow-md outline outline-2 outline-gray-200">
      <img src={item.image} alt={item.title} width="720" height="400" />
      <div class="p-4">
        <small class="text-xs text-gray-400">{item.category}</small>
        <p>{item.title}</p>
        <p class="my-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
        <div class="flex justify-between">
          <a class="anchor no-underline" href="#">
            Learn More <IconArrowRight class="inline" />
          </a>
          <div>
            <small class="text-gray-500">
              <IconEye class="inline" />
              {item.views}
              <IconComment class="ml-2 mr-1 inline" />{item.comments}
            </small>
          </div>
        </div>
      </div>
    </div>
  {/each}
</section>
