<script lang="ts">
  import type { Project } from '$lib/projects';

  export let data: {
    project: Project;
  };

  const { project } = data;
</script>

<div class="max-w-5xl mx-auto px-6 pt-8 pb-24 space-y-12 text-gray-300">
  <a
    href="/"
    class="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
  >
    &larr; Back to projects
  </a>

  <!-- Title + meta -->
  <div>
    <h1 class="text-4xl font-semibold text-gray-100 mb-4">{project.title}</h1>
    <p class="text-lg text-gray-400 max-w-2xl mb-5">{project.description}</p>

    {#if project.tech && project.tech.length > 0}
      <div class="flex flex-wrap gap-2 mb-5">
        {#each project.tech as tag}
          <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300 ring-1 ring-white/10">
            {tag}
          </span>
        {/each}
      </div>
    {/if}

    {#if project.repoUrl || project.liveUrl}
      <div class="flex flex-wrap gap-3">
        {#if project.repoUrl}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-5 py-2.5 text-sm font-medium text-gray-200 hover:ring-emerald-400/40 hover:text-emerald-400 transition-colors"
          >
            GitHub Repo
          </a>
        {/if}
        {#if project.liveUrl}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-gray-950 transition-transform hover:scale-105"
          >
            Live Demo
          </a>
        {/if}
      </div>
    {/if}
  </div>

  <!-- Cover Image -->
  <div>
    <img
      src={project.imageUrl}
      alt={project.title}
      class="w-full h-[420px] object-cover object-[30%_30%] rounded-xl ring-1 ring-white/10 shadow-lg"
    />
  </div>

  <!-- Overview -->
  {#if project.overview}
    <section>
      <h2 class="text-2xl font-semibold text-gray-100 mb-4">Overview</h2>
      <p class="leading-relaxed">{project.overview}</p>
    </section>
  {/if}

  <!-- Current Features -->
  {#if project.features && project.features.length > 0}
    <section>
      <h2 class="text-2xl font-semibold text-gray-100 mb-4">Current Features</h2>
      <ul class="list-disc ml-5 space-y-2">
        {#each project.features as feature}
          <li>{feature}</li>
        {/each}
      </ul>
    </section>
  {/if}

  <!-- Roadmap / Planned Features -->
  {#if project.roadmap && project.roadmap.length > 0}
    <section>
      <h2 class="text-2xl font-semibold text-gray-100 mb-4">Roadmap / Planned Features</h2>
      <ul class="list-disc ml-5 space-y-2">
        {#each project.roadmap as item}
          <li>{item}</li>
        {/each}
      </ul>
    </section>
  {/if}

  <!-- Development Notes -->
  {#if project.notes && project.notes.length > 0}
    <section>
      <h2 class="text-2xl font-semibold text-gray-100 mb-4">Development Notes</h2>
      <ul class="list-disc ml-5 space-y-2">
        {#each project.notes as note}
          <li>{note}</li>
        {/each}
      </ul>
    </section>
  {/if}

  <!-- Image Gallery -->
  {#if project.images.length > 0}
    <section>
      <h2 class="text-2xl font-semibold text-gray-100 mb-6">Project Gallery</h2>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {#each project.images as image}
          <div class="overflow-hidden rounded-xl bg-gray-900 ring-1 ring-white/10 shadow-md group">
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
