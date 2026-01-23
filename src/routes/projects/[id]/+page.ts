import type { PageLoad } from './$types';
import { projects } from '$lib/projects';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    throw error(404, 'Project not found');
  }

  return {
    project
  };
};
