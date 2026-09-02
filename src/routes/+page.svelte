<script lang="ts">
  import Globe from '$lib/Globe.svelte';
  import { goto } from '$app/navigation';
  import { projects } from '$lib/projects';

  let globeRef: Globe;

  type CardProject = { id?: string; title: string; description: string; imageUrl?: string };

  const futureProject: CardProject = {
    title: 'Future Projects',
    description: 'Exciting projects coming soon!'
  };

  const leftProjects: CardProject[] = projects;
  const rightProjects: CardProject[] = [futureProject];

  const projectTargets: Record<string, { x: number; y: number; z: number }> = {
    project1: { x: -150, y: 60, z: 0 },
    project2: { x: 150, y: -60, z: 0 },
    project3: { x: 0, y: 150, z: -80 }
  };

  const openProject = (id: string | undefined) => {
    if (!id) return;
    if (globeRef && projectTargets[id]) {
      globeRef.zoomToProject(id);
    } else {
      goto(`/projects/${id}`);
    }
  };

  const handleZoomComplete = (e: CustomEvent<{ id: string | null }>) => {
    if (e.detail.id) goto(`/projects/${e.detail.id}`);
  };
</script>

<main class="flex flex-col items-center p-6 min-h-screen bg-cover bg-center text-green-400">

  <!-- Hero Section -->
  <section class="text-center mt-10 mb-20">
    <h2 class="text-4xl sm:text-5xl font-light text-gray-200 mb-4">
      Building Intelligent Systems
    </h2>
    <p class="text-gray-400 text-lg max-w-xl mx-auto">
      AI • Computer Vision • Full-Stack Engineering
    </p>
  </section>

  <!-- Globe + Projects Grid -->
  <section
    class="w-full max-w-7xl grid gap-10 items-center mb-24"
    style="grid-template-columns: 0.8fr 1.6fr 0.8fr;"
  >

    <!-- LEFT PROJECTS -->
    <div class="flex flex-col gap-6 items-start">
      {#each leftProjects as project}
        <button
          on:click={() => openProject(project.id)}
          class="group relative w-full h-[200px] rounded-xl overflow-hidden bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 text-left"
        >
          {#if project.imageUrl}
            <img
              src={project.imageUrl}
              alt={project.title}
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          {/if}

          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div class="relative z-10 h-full flex flex-col justify-end p-4">
            <h2 class="text-lg font-semibold text-green-400">{project.title}</h2>
            <p class="text-gray-300 text-xs line-clamp-2 mt-1">{project.description}</p>
          </div>
        </button>
      {/each}
    </div>

    <!-- CENTER GLOBE -->
    <div class="w-full h-[60vh] mt-6">
      <Globe bind:this={globeRef} {projectTargets} on:zoomComplete={handleZoomComplete} />
    </div>

    <!-- RIGHT PROJECTS -->
<div class="flex flex-col gap-6 items-start">
  {#each rightProjects as project}
    {#if project.imageUrl}
      <!-- Normal clickable project -->
      <button
        on:click={() => openProject(project.id)}
        class="group relative w-full h-[200px] rounded-xl overflow-hidden bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 text-left"
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div class="relative z-10 h-full flex flex-col justify-end p-4">
          <h2 class="text-lg font-semibold text-green-400">{project.title}</h2>
          <p class="text-gray-300 text-xs line-clamp-2 mt-1">{project.description}</p>
        </div>
      </button>
    {:else}
      <!-- Static Future Projects placeholder -->
      <div
        class="relative w-full h-[200px] rounded-xl overflow-hidden bg-gray-700 shadow-md flex items-center justify-center"
      >
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
        </svg>

        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div class="absolute bottom-4 left-4">
          <h2 class="text-lg font-semibold text-green-400">{project.title}</h2>
          <p class="text-gray-300 text-xs mt-1">{project.description}</p>
        </div>
      </div>
    {/if}
  {/each}
</div>    

  </section>
</main>
