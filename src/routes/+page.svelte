<script lang="ts">
  import Globe from '$lib/Globe.svelte';
  import { goto } from '$app/navigation';

  let globeRef: any;

  const projects = [
     {
      id: 'project1',
      title: 'ParkingPulse',
      description:
        'ParkingPulse is an AI-powered parking lot monitoring system that tracks vehicles and improves security. It uses computer vision for real-time alerts, vehicle identification, and optimized parking space management.',
      imageUrl: '/parkingpulse/project3.jpeg'
    },
    {
      id: 'project2',
      title: 'Lumi',
      description:
        'Lumi is a mental health companion app. Users interact with Lumi by talking or typing to it, and the character’s mood changes in response, helping users reflect on their emotions and mental wellbeing.',
      imageUrl: '/lumi/lumi3.png'
    },
    {
      id: 'project3',
      title: 'PLM',
      description:
        'PLM (Product Lifecycle Manager) centralizes product development workflows, automates version control, and ensures team alignment from concept to launch, streamlining collaboration across the entire product lifecycle.',
      imageUrl: '/plm/project2.png'
    },
    {
      id: 'project4',
      title: 'Future Projects',
      
    }
   
  ];

  const leftProjects = projects.slice(0, 3);
  const rightProjects = projects.slice(3, 6);

  const openProject = (id: string) => {
    goto(`/projects/${id}`);
  };
</script>

<main class="flex flex-col items-center p-6 min-h-screen bg-cover bg-center text-green-400">

  <!-- Hero -->
  <section class="text-center mt-10 mb-20">
    <h2 class="text-4xl sm:text-5xl font-light text-gray-200 mb-4">
      Building Intelligent Systems
    </h2>
    <p class="text-gray-400 text-lg max-w-xl mx-auto">
      AI • Computer Vision • Full-Stack Engineering
    </p>
  </section>

  <!-- Globe + Projects -->
  <section
    class="w-full max-w-7xl grid gap-10 items-center mb-24"
    style="grid-template-columns: 0.8fr 1.6fr 0.8fr;"
  >

    <!-- LEFT -->
    <div class="flex flex-col gap-6 items-start">
      {#each leftProjects as project}
        <button
          on:click={() => openProject(project.id)}
          class="group relative w-full h-[200px]
                 rounded-xl overflow-hidden
                 bg-gray-900 shadow-md hover:shadow-xl
                 transition-all duration-300 text-left"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            class="absolute inset-0 w-full h-full object-cover
                   group-hover:scale-105 transition-transform duration-500"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div class="relative z-10 h-full flex flex-col justify-end p-4">
            <h2 class="text-lg font-semibold text-green-400">
              {project.title}
            </h2>
            <p class="text-gray-300 text-xs line-clamp-2 mt-1">
              {project.description}
            </p>
          </div>
        </button>
      {/each}
    </div>

   <!-- GLOBE -->
<div class="w-full h-[60vh] mt-6"> <!-- add mt-6 or mt-8 to move down -->
  <Globe bind:this={globeRef} />
</div>

    <!-- RIGHT -->
    <div class="flex flex-col gap-6 items-start">
      {#each rightProjects as project}
        <button
          on:click={() => openProject(project.id)}
          class="group relative w-full h-[200px]
                 rounded-xl overflow-hidden
                 bg-gray-900 shadow-md hover:shadow-xl
                 transition-all duration-300 text-left"
        >
          

          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div class="relative z-10 h-full flex flex-col justify-end p-4">
            <h2 class="text-lg font-semibold text-green-400">
              {project.title}
            </h2>
            <p class="text-gray-300 text-xs line-clamp-2 mt-1">
              {project.description}
            </p>
          </div>
        </button>
      {/each}
    </div>

  </section>
</main>
