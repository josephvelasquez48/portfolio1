<script lang="ts">
import '../app.css';
</script>
<header class="fixed top-0 left-0 w-full bg-gray-900/70 text-gray-100 shadow-md z-50">
    <nav class="max-w-6xl mx-auto flex justify-between items-center p-4">
      <div class="text-2xl font-bold">Joseph Velasquez</div>
      <ul class="flex space-x-6">
        <li><a href="/" class="hover:text-indigo-400">Home</a></li>
        <li><a href="/about" class="hover:text-indigo-400">About</a></li>
        <li><a href="/contact" class="hover:text-indigo-400">Contact</a></li>
      </ul>
    </nav>
  </header>

<main class="relative min-h-screen bg-cover bg-center text-green-400 flex flex-col items-center p-6 overflow-hidden"
  style="background-image: url('/test.png');">

  <slot />
</main>

