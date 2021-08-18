import projects from '../.vitepress/projects';

export function removeExtension(path) {
  return path.replace(/(index)?(\.(md|html))?$/, '') || '/';
}

export function postForPath(path) {
  path = removeExtension(path);

  return projects.filter(p => p.url === path)[0];
}

export const format = (string, size) => {
  if (typeof string === 'string' && string.length >= size) {
    return `${string.slice(0, size)}...`;
  }

  return string;
}