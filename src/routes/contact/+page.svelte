<script lang="ts">
  const contact = {
    name: 'Joseph Velasquez',
    location: 'Riverside, CA',
    email: 'josephvelasquez317@gmail.com',
    github: 'https://github.com/josephvelasquez48',
    linkedin: 'https://www.linkedin.com/in/joseph-e-velasquez'
  };
</script>

<main class="min-h-screen flex items-center justify-center px-6 text-gray-200">
  <section class="w-full max-w-4xl text-center -mt-10">

    <!-- Header -->
    <h1 class="text-5xl sm:text-6xl font-light mb-6">
      Contact
    </h1>

    <p class="text-gray-400 text-lg mb-14 max-w-2xl mx-auto">
      I’m always open to discussing projects, research, or opportunities.
    </p>

    <!-- Card -->
    <div class="bg-gray-900 rounded-3xl shadow-2xl p-12 space-y-10">

      <!-- Name -->
      <div>
        <h2 class="text-2xl font-semibold text-green-400">
          {contact.name}
        </h2>
        <p class="text-gray-400 text-lg">{contact.location}</p>
      </div>

      <!-- Email -->
      <div>
        <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Email
        </p>
        <a
          href={`mailto:${contact.email}`}
          class="text-2xl font-light text-gray-200 hover:text-green-400 transition"
        >
          {contact.email}
        </a>
      </div>

      <!-- Links -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center pt-6">

        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-4 rounded-2xl bg-gray-800 hover:bg-gray-700 text-lg transition"
        >
          GitHub
        </a>

        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-4 rounded-2xl bg-gray-800 hover:bg-gray-700 text-lg transition"
        >
          LinkedIn
        </a>

      </div>
    </div>
  </section>
</main>
