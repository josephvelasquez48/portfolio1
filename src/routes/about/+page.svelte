<script lang="ts">
  const education = [
    {
      school: 'California State University, Fullerton',
      location: 'Fullerton, CA',
      degree: 'B.S. Computer Science',
      date: 'Aug 2025'
    },
    {
      school: 'Riverside City College',
      location: 'Riverside, CA',
      degree: 'A.S. Computer Science',
      date: 'May 2022'
    }
  ];

  const experience = [
    {
      role: 'Software and Systems Engineer',
      org: 'Inland Neurosurgery Institute',
      date: 'Aug 2025 – Oct 2025',
      points: [
        'Supported integration and deployment of a new Electronic Medical Records (EMR) system, ensuring minimal disruption to clinical operations',
        'Resolved hardware, software, and network issues during EMR migration to ensure continuity of clinical operations',
        'Built and maintained automation workflows using Microsoft Power Automate, reducing manual administrative workload',
        'Assisted in maintaining cybersecurity measures, including system monitoring, patching, and basic threat mitigation',
        'Developed a patient scheduling chatbot using a local LLM, enabling automated appointment booking'
      ]
    },
    {
      role: 'Undergraduate Research Assistant — UAV Data & Vision Systems',
      org: 'California State University, Fullerton',
      date: 'Aug 2024 – Mar 2025',
      points: [
        'Developed OpenCV-based computer vision pipelines for real-time object tracking in UAV simulations',
        'Processed geospatial routing data using OSMnx to improve autonomous navigation efficiency',
        'Simulated autonomous systems in Webots to evaluate navigation performance and reliability',
        'Cleaned and structured large-scale datasets for computer vision and route optimization analysis'
      ]
    },
    {
      role: 'Residential IT Support Technician (ResNet)',
      org: 'University of California, Santa Barbara',
      date: 'Aug 2018 – Jun 2019',
      points: [
        'Provided Tier 1 technical support for hardware, software, and network connectivity in a residential campus environment',
        'Diagnosed and resolved Windows, macOS, Wi-Fi, Ethernet, TCP/IP, DNS, and DHCP issues',
        'Configured laptops, smartphones, printers, gaming consoles, and other network-connected devices'
      ]
    }
  ];

  const skillGroups = [
    { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'] },
    { label: 'Backend', items: ['Node.js', 'Flask', 'REST APIs'] },
    { label: 'Frontend', items: ['SvelteKit', 'HTML/CSS'] },
    { label: 'Cloud & DevOps', items: ['AWS (EC2, S3)', 'Google Cloud Platform', 'Docker', 'CI/CD'] },
    { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Firebase Firestore'] },
    { label: 'AI / Computer Vision', items: ['OpenCV', 'YOLOv8', 'Real-Time Data Processing'] },
    { label: 'Tools', items: ['Git', 'Linux'] }
  ];

  const certifications = [
    'AWS Knowledge: Serverless',
    'Google Cloud: App Dev Environment',
    'Google Cloud: Load Balancing'
  ];
</script>

<div class="max-w-4xl mx-auto px-6 pt-8 pb-24">
  <!-- Intro -->
  <section class="mb-16">
    <h1 class="text-4xl font-semibold text-gray-100 mb-8">About</h1>
    <div class="flex flex-col sm:flex-row gap-8 items-start">
      <img
        src="/IMG_2813.png"
        alt="Joseph Velasquez"
        class="w-32 h-32 rounded-full object-cover object-top ring-2 ring-emerald-400/40 shrink-0 mx-auto sm:mx-0"
      />
      <div>
        <p class="text-gray-300 text-lg leading-relaxed mb-4">
          I'm Joseph Velasquez, a Computer Science graduate focused on full-stack development, computer
          vision, and secure systems. I build applications that combine real-time data, modern web
          technologies, and intelligent systems — spanning frontend and backend work as well as
          AI-driven projects involving object detection, tracking, and automation.
        </p>
        <p class="text-gray-400 leading-relaxed mb-6">
          I'm especially interested in creating reliable, scalable software that solves real-world
          problems — whether that's improving physical security, streamlining clinical operations, or
          designing intuitive user experiences.
        </p>
        <a
          href="/Joseph-Velasquez-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-gray-950 transition-transform hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </div>
  </section>

  <!-- Experience -->
  <section class="mb-16">
    <h2 class="text-2xl font-semibold text-gray-100 mb-6">Experience</h2>
    <div class="space-y-8">
      {#each experience as job}
        <div class="rounded-xl bg-gray-900/60 ring-1 ring-white/5 p-6">
          <div class="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <h3 class="text-lg font-semibold text-gray-100">{job.role}</h3>
            <span class="text-sm text-gray-500">{job.date}</span>
          </div>
          <p class="text-emerald-400 text-sm mb-4">{job.org}</p>
          <ul class="list-disc ml-5 space-y-1.5 text-gray-400 text-sm leading-relaxed">
            {#each job.points as point}
              <li>{point}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <!-- Education -->
  <section class="mb-16">
    <h2 class="text-2xl font-semibold text-gray-100 mb-6">Education</h2>
    <div class="space-y-4">
      {#each education as school}
        <div class="rounded-xl bg-gray-900/60 ring-1 ring-white/5 p-6 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 class="text-base font-semibold text-gray-100">{school.school}</h3>
            <p class="text-gray-400 text-sm">{school.degree} &middot; {school.location}</p>
          </div>
          <span class="text-sm text-gray-500">{school.date}</span>
        </div>
      {/each}
    </div>
  </section>

  <!-- Skills -->
  <section class="mb-16">
    <h2 class="text-2xl font-semibold text-gray-100 mb-6">Skills</h2>
    <div class="grid sm:grid-cols-2 gap-4">
      {#each skillGroups as group}
        <div class="rounded-xl bg-gray-900/60 ring-1 ring-white/5 p-5">
          <p class="text-sm font-medium text-emerald-400 mb-2.5">{group.label}</p>
          <div class="flex flex-wrap gap-2">
            {#each group.items as item}
              <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300 ring-1 ring-white/10">
                {item}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Certifications -->
  <section>
    <h2 class="text-2xl font-semibold text-gray-100 mb-6">Certifications</h2>
    <ul class="space-y-2">
      {#each certifications as cert}
        <li class="flex items-center gap-3 text-gray-300 text-sm">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span>
          {cert}
        </li>
      {/each}
    </ul>
  </section>
</div>
