<script lang="ts">
  import Globe from '$lib/Globe.svelte';
  import { goto } from '$app/navigation';
  import { projects } from '$lib/projects';

  let globeRef: Globe;

  const leftProjects = projects.slice(0, 3);
  const rightProjects = projects.slice(3);

  const projectTargets: Record<string, { x: number; y: number; z: number }> = {
    project1: { x: -150, y: 60, z: 0 },
    project2: { x: 150, y: -60, z: 0 },
    project3: { x: 0, y: 150, z: -80 },
    project4: { x: 0, y: -150, z: 80 }
  };

  const openProject = (id: string) => {
    if (globeRef && projectTargets[id]) {
      globeRef.zoomToProject(id);
    } else {
      goto(`/projects/${id}`);
    }
  };

  const handleZoomComplete = (e: CustomEvent<{ id: string | null }>) => {
    if (e.detail.id) goto(`/projects/${e.detail.id}`);
  };

  const coreSkills = [
    'Python',
    'TypeScript',
    'SvelteKit',
    'Node.js',
    'OpenCV',
    'YOLOv8',
    'Firebase',
    'AWS',
    'Google Cloud',
    'Docker',
    'PostgreSQL',
    'MongoDB'
  ];
</script>

<div class="flex flex-col items-center px-6">
  <!-- Hero Section -->
  <section class="w-full max-w-4xl text-center pt-16 pb-16">
    <p class="text-emerald-400 text-sm font-medium tracking-wide uppercase mb-4">
      Software Engineer
    </p>
    <h1 class="text-4xl sm:text-6xl font-semibold text-gray-100 mb-6 tracking-tight">
      Joseph Velasquez
    </h1>
    <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
      Computer Science graduate building full-stack applications, computer vision systems, and
      AI-driven tools — from real-time vehicle tracking to production EMR support.
    </p>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <a
        href="/Joseph-Velasquez-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-gray-950 transition-transform hover:scale-105"
      >
        Download Resume
      </a>
      <a
        href="/contact"
        class="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-gray-200 transition-colors hover:border-emerald-400/50 hover:text-emerald-400"
      >
        Get in Touch
      </a>
    </div>
  </section>

  <!-- Globe + Projects Grid -->
  <section
    class="w-full max-w-7xl grid grid-cols-1 lg:[grid-template-columns:0.85fr_1.4fr_0.85fr] gap-8 items-center mb-20"
  >
    <!-- LEFT PROJECTS -->
    <div class="flex flex-col gap-6 items-start">
      {#each leftProjects as project}
        <button
          on:click={() => openProject(project.id)}
          class="group relative w-full h-[200px] rounded-xl overflow-hidden bg-gray-900 ring-1 ring-white/5 shadow-lg hover:shadow-emerald-400/10 hover:ring-emerald-400/30 transition-all duration-300 text-left"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
          <div class="relative z-10 h-full flex flex-col justify-end p-4">
            <h2 class="text-lg font-semibold text-gray-100">{project.title}</h2>
            <p class="text-gray-400 text-xs line-clamp-2 mt-1">{project.description}</p>
          </div>
        </button>
      {/each}
    </div>

    <!-- CENTER GLOBE -->
    <div class="relative w-full h-[50vh] min-h-[320px]">
      <Globe bind:this={globeRef} {projectTargets} on:zoomComplete={handleZoomComplete} />
    </div>

    <!-- RIGHT PROJECTS -->
    <div class="flex flex-col gap-6 items-start">
      {#each rightProjects as project}
        <button
          on:click={() => openProject(project.id)}
          class="group relative w-full h-[200px] rounded-xl overflow-hidden bg-gray-900 ring-1 ring-white/5 shadow-lg hover:shadow-emerald-400/10 hover:ring-emerald-400/30 transition-all duration-300 text-left"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
          <div class="relative z-10 h-full flex flex-col justify-end p-4">
            <h2 class="text-lg font-semibold text-gray-100">{project.title}</h2>
            <p class="text-gray-400 text-xs line-clamp-2 mt-1">{project.description}</p>
          </div>
        </button>
      {/each}
    </div>
  </section>

  <!-- Core Skills -->
  <section class="w-full max-w-4xl text-center mb-24">
    <p class="text-gray-500 text-sm uppercase tracking-wide mb-5">Core Skills</p>
    <div class="flex flex-wrap items-center justify-center gap-2.5">
      {#each coreSkills as skill}
        <span
          class="rounded-full bg-white/5 px-4 py-1.5 text-sm text-gray-300 ring-1 ring-white/10"
        >
          {skill}
        </span>
      {/each}
    </div>
  </section>
</div>
