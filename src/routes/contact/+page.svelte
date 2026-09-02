<script lang="ts">
  const contact = {
    name: 'Joseph Velasquez',
    location: 'Riverside, CA',
    email: 'josephvelasquez317@gmail.com',
    phone: '(951) 446-3526',
    github: 'https://github.com/josephvelasquez48',
    linkedin: 'https://www.linkedin.com/in/joseph-e-velasquez'
  };
</script>

<div class="max-w-3xl mx-auto px-6 pt-8 pb-24 text-center">
  <h1 class="text-4xl sm:text-5xl font-semibold text-gray-100 mb-4">Contact</h1>
  <p class="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
    I'm always open to discussing projects, research, or opportunities.
  </p>

  <div class="rounded-3xl bg-gray-900/60 ring-1 ring-white/5 shadow-2xl p-10 sm:p-12 space-y-10">
    <div>
      <h2 class="text-2xl font-semibold text-gray-100">
        {contact.name}
      </h2>
      <p class="text-gray-400 text-lg">{contact.location}</p>
    </div>

    <div class="grid sm:grid-cols-2 gap-8">
      <div>
        <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">Email</p>
        <a
          href={`mailto:${contact.email}`}
          class="text-lg text-gray-200 hover:text-emerald-400 transition break-words"
        >
          {contact.email}
        </a>
      </div>
      <div>
        <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">Phone</p>
        <a
          href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
          class="text-lg text-gray-200 hover:text-emerald-400 transition"
        >
          {contact.phone}
        </a>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
      <a
        href={contact.github}
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-3.5 rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 hover:text-emerald-400 text-base transition"
      >
        GitHub
      </a>

      <a
        href={contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-3.5 rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 hover:text-emerald-400 text-base transition"
      >
        LinkedIn
      </a>

      <a
        href="/Joseph-Velasquez-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-3.5 rounded-xl bg-emerald-400 text-gray-950 font-semibold text-base transition-transform hover:scale-105"
      >
        Resume
      </a>
    </div>
  </div>
</div>
