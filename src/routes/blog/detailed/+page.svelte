<script lang="ts">
  import IconEye from "~icons/mdi/eye-outline";
  import IconComment from "~icons/mdi/comment-outline";
  import IconArrowRight from "~icons/mdi/arrow-right";
  import { Avatar } from "@skeletonlabs/skeleton";

  const items = [
    {
      title: "Roof party normcore before they sold out, cornhole vape",
      category: "CATEGORY",
      body: "Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.",
      views: "1.2K",
      comments: 6,
      author: "Holden Caulfield",
      role: "UI DEVELOPER",
    },
    {
      title: "Pinterest DIY dreamcatcher gentrify single-origin coffee",
      category: "CATEGORY",
      body: "Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.",
      views: "1.2K",
      comments: 6,
      author: "Alper Kamu",
      role: "DESIGNER",
    }
  ];
</script>

<section class="grid gap-x-8 gap-y-16 md:grid-cols-2 max-w-screen-xl mx-auto">
  {#each items as item}
    <div class="space-y-4">
      <span class="badge variant-filled-primary">{item.category}</span>
      <h3 class="h3">{item.title}</h3>
      <p class="text-sm text-gray-700 dark:text-gray-400">{item.body}</p>
      <div class="flex justify-between">
        <a class="anchor no-underline dark:text-primary-400" href="#">
          Learn More <IconArrowRight class="inline" />
        </a>
        
        <div>
          <small class="text-gray-500 dark:text-gray-400">
            <IconEye class="inline" />
            {item.views}
            <IconComment class="ml-2 mr-1 inline" />{item.comments}
          </small>
        </div>
      </div>

      <div class="flex items-center gap-4 pt-4 border-t border-gray-300 dark:border-gray-600">
        <Avatar initials="JD" fill="text-white" background="bg-primary-400" width="w-12" />
        <div>
          <p>{item.author}</p>
          <small class="text-gray-700 dark:text-gray-400">{item.role}</small>
        </div>
      </div>
    </div>
  {/each}
</section>
