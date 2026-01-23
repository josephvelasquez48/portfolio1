<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let projectId: string;
  export let title: string;
  export let description: string;
  export let imageUrl: string;

  // Optional gallery images (new, non-breaking)
  export let images: { src: string; alt?: string }[] = [];

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch('select', { projectId });
  };
</script>

<div
  class="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer relative group"
  on:click={handleClick}
>
  <!-- Cover Image -->
  <div class="relative overflow-hidden rounded-lg mb-4">
    <img
      src={imageUrl}
      alt={title}
      class="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />

    {#if images.length > 0}
      <span
        class="absolute bottom-2 right-2 bg-black/70 text-xs text-gray-200 px-2 py-1 rounded-md"
      >
        {images.length} images
      </span>
    {/if}
  </div>

  <!-- Text -->
  <h2 class="text-2xl font-semibold mb-2 text-green-400">
    {title}
  </h2>

  <p class="text-gray-300 text-sm leading-relaxed">
    {description}
  </p>
</div>
