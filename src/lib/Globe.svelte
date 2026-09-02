<script lang="ts">
  import * as THREE from 'three';
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';

  export let projectTargets: Record<string, { x: number; y: number; z: number }> = {};
  const dispatch = createEventDispatcher();

  let container: HTMLDivElement;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let particleSystem: THREE.Points;
  let resizeObserver: ResizeObserver;

  let zooming = false;
  let zoomTarget: THREE.Vector3 | null = null;
  let zoomProjectId: string | null = null;

  export function zoomToProject(id: string) {
    if (!projectTargets[id]) return;
    const { x, y, z } = projectTargets[id];
    zoomTarget = new THREE.Vector3(x, y, z + 50);
    zoomProjectId = id;
    zooming = true;
  }

  onMount(() => {
    initThree();
    animate();
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  });

  function initThree() {
    scene = new THREE.Scene();

    const width = container.clientWidth;
    const height = container.clientHeight;

    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.set(0, 0, 500);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // --- Particle globe ---
    const PARTICLE_COUNT = 6000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const color = new THREE.Color();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 150 + Math.random() * 10; // small radius variation

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const stride = i * 3;
      positions[stride] = x;
      positions[stride + 1] = y;
      positions[stride + 2] = z;

      // Emerald-to-cyan hue range for a cohesive, on-brand look
      const hue = 0.42 + Math.random() * 0.12;
      const lightness = 0.4 + Math.random() * 0.35;
      color.setHSL(hue, 0.65, lightness);
      colors[stride] = color.r;
      colors[stride + 1] = color.g;
      colors[stride + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(50, 50, 100);
    scene.add(dirLight);
  }

  function resize() {
    if (!container || !camera || !renderer) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function animate() {
    requestAnimationFrame(animate);

    if (!zooming) {
      particleSystem.rotation.y += 0.0015;
      particleSystem.rotation.x += 0.0003;
    }

    if (zooming && zoomTarget) {
      const current = camera.position;
      current.lerp(zoomTarget, 0.03);

      if (current.distanceTo(zoomTarget) < 1) {
        zooming = false;
        dispatch('zoomComplete', { id: zoomProjectId });
      }
    }

    renderer.render(scene, camera);
  }
</script>

<div class="globe-container" bind:this={container}></div>

<style>
  .globe-container {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  .globe-container :global(canvas) {
    width: 100% !important;
    height: 100% !important;
    display: block;
  }
</style>
