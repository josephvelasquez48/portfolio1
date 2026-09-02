<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';

  let menuOpen = false;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (href: string) =>
    href === '/' ? $page.url.pathname === '/' : $page.url.pathname.startsWith(href);
</script>

<div class="min-h-screen bg-site text-gray-300 flex flex-col">
  <header class="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-white/5 z-50">
    <nav class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      <a href="/" class="flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-100">
        <span
          class="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-400/10 text-emerald-400 text-sm font-bold ring-1 ring-emerald-400/30"
        >
          JV
        </span>
        Joseph Velasquez
      </a>

      <!-- Desktop nav -->
      <div class="hidden sm:flex items-center gap-8">
        <ul class="flex space-x-8 text-sm">
          {#each navLinks as link}
            <li>
              <a
                href={link.href}
                class="transition-colors hover:text-emerald-400 {isActive(link.href)
                  ? 'text-emerald-400'
                  : 'text-gray-300'}"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
        <a
          href="/Joseph-Velasquez-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-400 ring-1 ring-emerald-400/30 transition-colors hover:bg-emerald-400/20"
        >
          Resume
        </a>
      </div>

      <!-- Mobile menu button -->
      <button
        class="sm:hidden text-gray-300 p-2"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        on:click={() => (menuOpen = !menuOpen)}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if menuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </nav>

    {#if menuOpen}
      <div class="sm:hidden border-t border-white/5 bg-gray-950/95 px-6 py-4 space-y-4">
        {#each navLinks as link}
          <a
            href={link.href}
            class="block text-sm transition-colors hover:text-emerald-400 {isActive(link.href)
              ? 'text-emerald-400'
              : 'text-gray-300'}"
            on:click={() => (menuOpen = false)}
          >
            {link.label}
          </a>
        {/each}
        <a
          href="/Joseph-Velasquez-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="block rounded-lg bg-emerald-400/10 px-4 py-2 text-center text-sm font-medium text-emerald-400 ring-1 ring-emerald-400/30"
        >
          Resume
        </a>
      </div>
    {/if}
  </header>

  <main class="flex-1 pt-20">
    <slot />
  </main>

  <footer class="border-t border-white/5 mt-16">
    <div
      class="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500"
    >
      <p>&copy; {new Date().getFullYear()} Joseph Velasquez. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <a href="https://github.com/josephvelasquez48" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/joseph-e-velasquez" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition-colors">
          LinkedIn
        </a>
        <a href="mailto:josephvelasquez317@gmail.com" class="hover:text-emerald-400 transition-colors">
          Email
        </a>
      </div>
    </div>
  </footer>
</div>
