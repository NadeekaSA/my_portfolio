/**
 * Get asset URL with cache-busting version parameter
 * @param path - Asset path (e.g., '/profile.png')
 * @returns Asset URL with version query parameter
 */
export function getAssetUrl(path: string): string {
  // In production, use build ID for versioning
  if (process.env.NODE_ENV === 'production') {
    const buildId = process.env.NEXT_PUBLIC_BUILD_ID || Date.now().toString();
    return `${path}?v=${buildId}`;
  }
  
  // In development, use timestamp to prevent caching
  return `${path}?t=${Date.now()}`;
}
