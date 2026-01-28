<script>
  // Path to your profile image
  const profileImage = "/IMG_2813.png"; // put this in your static folder
</script>

<main
  class="relative min-h-screen flex items-center justify-center p-6 overflow-hidden"
  style="background-image: url('/test_upscaled.jpg'); background-size: 80%; background-position: center; background-repeat: no-repeat;">
  
  <section class="about bg-black/60 p-8 rounded-lg text-green-200 max-w-3xl z-10 flex flex-col items-center">
    
    <!-- Profile Image -->
<img
  src={profileImage}
  alt="Profile Image"
  class="w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-green-400 shadow-2xl ring-4 ring-green-300 transition-transform duration-300 hover:scale-105 mb-6"
/>
    <h1>About</h1>

    <p class="intro text-center">
      I’m Joseph Velasquez, a Computer Science graduate with a focus on
      full-stack development, computer vision, and secure systems.
    </p>

    <p>
      I build applications that combine real-time data, modern web
      technologies, and intelligent systems. My work spans frontend
      and backend development, as well as AI-driven projects involving
      object detection, tracking, and automation.
    </p>

    <p>
      I’m especially interested in creating reliable, scalable software
      that solves real-world problems—whether that’s improving physical
      security, streamlining workflows, or designing intuitive user
      experiences.
    </p>

    <div class="highlights w-full mt-6">
      <h2>What I Work With</h2>
      <ul class="list-disc ml-6">
        <li>Full-stack web development (SvelteKit, React, Node.js)</li>
        <li>Computer vision & machine learning (OpenCV, YOLO, ReID)</li>
        <li>Backend systems & APIs (Firebase, Flask, Express)</li>
        <li>Secure and performance-focused application design</li>
      </ul>
    </div>
  </section>
</main>

<style>
  .about {
    backdrop-filter: blur(8px); /* frosted glass effect */
    text-align: left;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .intro {
    font-size: 1.15rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  ul {
    padding-left: 1.25rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
</style>
