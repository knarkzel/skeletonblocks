<script lang="ts">
  import IconEye from '~icons/mdi/eye-outline';
  import IconComment from '~icons/mdi/comment-outline';
  import IconArrowRight from '~icons/mdi/arrow-right';

  const items = [
    {
      category: 'The Catalyzer',
      body: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://dummyimage.com/720x400',
      views: '1.2K',
      url: '/blog/simple',
      comments: 6
    },
    {
      category: 'The 400 Blows',
      body: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://dummyimage.com/720x400',
      views: '1.2K',
      url: '/blog/simple',
      comments: 6
    },
    {
      category: 'Shooting Stars',
      body: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://dummyimage.com/720x400',
      views: '1.2K',
      url: '/blog/simple',
      comments: 6
    }
  ];
</script>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {#each items as item}
    <div class="shadow-md outline outline-2 outline-gray-200">
      <img src={item.image} alt={item.category} width="720" height="400" />
      <div class="p-4">
        <small class="text-gray-400 text-xs">CATEGORY</small>
        <p>{item.category}</p>
        <p class="my-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
        <div class="flex justify-between">
          <a class="anchor no-underline" href={item.url}>
            Learn More <IconArrowRight class="inline" />
          </a>
          <div>
            <small class="text-gray-500">
              <IconEye class="inline" />
              {item.views}
              <IconComment class="inline ml-2 mr-1" />{item.comments}
            </small>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
