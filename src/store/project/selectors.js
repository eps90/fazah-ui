export const getProject = (store, projectId) => store.projects.items.filter(project => project.id === projectId)[0] || null;
