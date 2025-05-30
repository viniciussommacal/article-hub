export function getPath(path) {
  if (!path) {
    return '';
  }

  return new URL(path.replace('@/', '/src/'), import.meta.url).href;
}
