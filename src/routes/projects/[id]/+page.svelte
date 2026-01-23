<script lang="ts">
  import type { Project } from '$lib/projects';

  export let data: {
    project: Project;
  };

  const { project } = data;
</script>

<div class="p-8 max-w-5xl mx-auto space-y-12 text-gray-300">
  <!-- Title -->
  <h1 class="text-4xl font-bold text-green-400">{project.title}</h1>

  <!-- Cover Image -->
<div class="mb-8">
  <img
    src={project.imageUrl}
    alt={project.title}
    class="w-full h-120 object-cover object-[30%_30%] rounded-lg shadow-md"
  />
</div>



  <!-- Overview -->
  {#if project.overview}
    <section>
      <h2 class="text-2xl font-semibold text-green-400 mb-4">Overview</h2>
      <p>{project.overview}</p>
    </section>
  {/if}

  <!-- Current Features -->
  {#if project.features && project.features.length > 0}
    <section>
      <h2 class="text-2xl font-semibold text-green-400 mb-4">Current Features</h2>
      <ul class="list-disc ml-6 space-y-2">
        {#each project.features as feature}
          <li>{feature}</li>
        {/each}
      </ul>
    </section>
  {/if}

  <!-- Roadmap / Planned Features -->
  {#if project.roadmap && project.roadmap.length > 0}
    <section>
      <h2 class="text-2xl font-semibold text-green-400 mb-4">Roadmap / Planned Features</h2>
      <ul class="list-disc ml-6 space-y-2">
        {#each project.roadmap as item}
          <li>{item}</li>
        {/each}
      </ul>
    </section>
  {/if}

  <!-- Development Notes -->
  {#if project.notes && project.notes.length > 0}
    <section>
      <h2 class="text-2xl font-semibold text-green-400 mb-4">Development Notes</h2>
      <ul class="list-disc ml-6 space-y-2">
        {#each project.notes as note}
          <li>{note}</li>
        {/each}
      </ul>
    </section>
  {/if}

  <!-- Image Gallery -->
  {#if project.images.length > 0}
    <section>
      <h2 class="text-2xl font-semibold text-gray-200 mb-6">Project Gallery</h2>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {#each project.images as image}
          <div class="overflow-hidden rounded-xl bg-gray-900 shadow-md group">
            <img
              src={image.src}
              alt={image.alt ?? project.title}
              class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        {/each}
      </div>
    </section>
  {/if}
</div>
