/**
 * Resolves public asset URLs taking Vite's base path into account.
 * This guarantees assets load correctly regardless of whether the app
 * is hosted at domain root (/) or in a subdirectory (e.g. GitHub Pages /NEXE-GROUP-AB/).
 */
export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
