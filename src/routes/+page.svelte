<script lang="ts">
  import { onMount } from 'svelte';
  import Globe from '$lib/Globe.svelte';
  import { goto } from '$app/navigation';

  let globeRef: any;
  let fullscreen = false; // controls container expansion
  let fadeOpacity = 0;

  // Projects data with a single image
  const projects = [
    {
      id: 'project1',
      title: 'Lumi',
      description: 'Lumi is a mental health companion app. Users interact with Lumi by talking or typing to it, and the character’s mood changes in response, helping users reflect on their emotions and mental wellbeing.',
      imageUrl: '/lumi/lumi3.png'
    },
    {
      id: 'project2',
      title: 'PLM',
      description: 'PLM (Product Lifecycle Manager) centralizes product development workflows, automates version control, and ensures team alignment from concept to launch, streamlining collaboration across the entire product lifecycle.',
      imageUrl: '/plm/project2.png'
    },
    {
      id: 'project3',
      title: 'ParkingPulse',
      description: 'ParkingPulse is an AI-powered parking lot monitoring system that tracks vehicles and improves security. It uses computer vision for real-time alerts, vehicle identification, and optimized parking space management.',
      imageUrl: '/parkingpulse/project3.jpeg'
    }
  ];

  const projectTargets = {
    project1: { x: 50, y: 10, z: 20 },
    project2: { x: -40, y: -20, z: 30 },
    project3: { x: 0, y: 30, z: -50 }
  };

  const startFade = () => fadeOpacity = 1;

  const openProject = (id: string) => {
    fullscreen = true;           // expand the globe container
    globeRef.zoomToProject(id);  // trigger zoom animation
  };

  const handleZoomComplete = (e: CustomEvent<{ id: string }>) => {
    const id = e.detail.id;
    startFade();
    setTimeout(() => goto(`/projects/${id}`), 650);
  };
</script>

<main class="flex flex-col items-center p-6 min-h-screen bg-cover bg-center text-green-400">

  <!-- Hero -->
  <section class="text-center mt-10 mb-16">
    <h2 class="text-4xl sm:text-5xl font-light text-gray-200 mb-4">
      Building Intelligent Systems
    </h2>
    <p class="text-gray-400 text-lg max-w-xl mx-auto">
      AI • Computer Vision • Full-Stack Engineering
    </p>
  </section>

  <!-- Globe -->
  <div class={`globe-container w-full max-w-3xl h-[60vh] mb-16 transition-all duration-500${fullscreen ? ' globe-fullscreen' : ''}`}>
    <Globe
      bind:this={globeRef}
      {projectTargets}
      fullscreen={fullscreen}
      on:zoomComplete={handleZoomComplete}
    />
  </div>

  <!-- Projects -->
  <section class="w-full max-w-5xl grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {#each projects as project}
      <button
        class="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition text-left"
        on:click={() => openProject(project.id)}
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          class="w-full h-50 object-cover rounded-lg mb-4"
        />
        <h2 class="text-2xl font-semibold mb-2 text-green-400">{project.title}</h2>
        <p class="text-gray-300">{project.description}</p>
      </button>
    {/each}
  </section>

  <!-- Fade overlay -->
  <div
    class="fixed inset-0 bg-black transition-opacity duration-1000 pointer-events-none"
    style="opacity: {fadeOpacity}"
  ></div>
</main>

<style>
  .globe-container {
    transition: all 0.5s ease;
  }
  .globe-fullscreen {
    width: full !important;
    height: full !important;
  }
</style>
