import { v2 as cloudinary } from 'cloudinary';
import galleryCatalog from './gallery-catalog.json';
import galleryImages from './gallery-images.json';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryAlbum {
  name: string;
  path: string;
  coverImage?: string | null;
  count?: number;
}

export interface CloudinaryImage {
  public_id: string;
  url: string;
  width: number;
  height: number;
}

// 10-Minute in-memory cache to stay well within Cloudinary's 500 API calls/hour limit
interface CacheEntry<T> {
  data: T;
  timestamp: number;
}
const memoryCache = new Map<string, CacheEntry<any>>();
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

function getCached<T>(key: string): T | null {
  const entry = memoryCache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL_MS) {
    return entry.data as T;
  }
  return null;
}

function setCache<T>(key: string, data: T) {
  memoryCache.set(key, { data, timestamp: Date.now() });
}

/**
 * Helper to find album or subfolder in local catalog fallback
 */
function findInCatalog(folderPath: string) {
  const cleanPath = folderPath.replace(/^gallery\//, '');
  for (const album of galleryCatalog) {
    if (album.path === folderPath || album.name === cleanPath) {
      return album;
    }
    if (album.subfolders) {
      for (const sf of album.subfolders) {
        if (sf.path === folderPath || sf.name === cleanPath) {
          return sf;
        }
      }
    }
  }
  return null;
}

/**
 * Inject Cloudinary transformations into a secure_url for high-definition (HD) web delivery.
 * e.g. adds w_2000,q_auto:best,f_auto for maximum clarity (2K HD WebP/AVIF).
 */
function optimizeUrl(url: string, width: number): string {
  if (!url) return '';
  return url.replace('/upload/', `/upload/w_${width},q_auto:best,f_auto/`);
}

/**
 * Get all albums inside the "gallery" root folder with caching and persistent fallback.
 */
export async function getAlbums(): Promise<CloudinaryAlbum[]> {
  const cacheKey = 'albums_root';
  const cached = getCached<CloudinaryAlbum[]>(cacheKey);
  if (cached && cached.length > 0) return cached;

  // Serve all 21 verified albums from local catalog with instant cover & counts (0 API calls)
  const catalogAlbums: CloudinaryAlbum[] = galleryCatalog.map((a) => ({
    name: a.name,
    path: a.path,
    coverImage: a.coverImage,
    count: a.count,
  }));

  setCache(cacheKey, catalogAlbums);
  return catalogAlbums;
}

/**
 * Get subfolders inside any specific folder path (e.g. "gallery/confluence2.0") with persistent fallback.
 */
export async function getSubfolders(folderPath: string): Promise<CloudinaryAlbum[]> {
  const cacheKey = `subfolders_${folderPath}`;
  const cached = getCached<CloudinaryAlbum[]>(cacheKey);
  if (cached && cached.length > 0) return cached;

  // Check local catalog for verified subfolders (e.g. Confluence 2.0 11 tracks) with 0 API calls
  const item = findInCatalog(folderPath);
  if (item && 'subfolders' in item && Array.isArray((item as any).subfolders)) {
    const subfolders: CloudinaryAlbum[] = (item as any).subfolders.map((sf: any) => ({
      name: sf.name,
      path: sf.path,
      coverImage: sf.coverImage,
      count: sf.count,
    }));
    setCache(cacheKey, subfolders);
    return subfolders;
  }

  try {
    const result = await cloudinary.api.sub_folders(folderPath);
    if (result.folders && result.folders.length > 0) {
      const subfolders = result.folders.map((folder: { name: string; path: string }) => ({
        name: folder.name,
        path: folder.path,
      }));
      setCache(cacheKey, subfolders);
      return subfolders;
    }
  } catch (error: any) {
    console.warn(`Cloudinary API unavailable for ${folderPath}:`, error?.message || error);
  }

  return [];
}

/**
 * Get the first image in a folder (for cover image) with caching and persistent fallback.
 */
export async function getAlbumCover(folderPath: string): Promise<string | null> {
  const cacheKey = `cover_${folderPath}`;
  const cached = getCached<string | null>(cacheKey);
  if (cached !== null && cached !== undefined) return cached;

  // 1. Check catalog first (0 API calls, loads instantly)
  const item = findInCatalog(folderPath);
  if (item && item.coverImage) {
    setCache(cacheKey, item.coverImage);
    return item.coverImage;
  }

  // 2. Check if we have baked images for this folder
  const images = (galleryImages as Record<string, CloudinaryImage[]>)[folderPath];
  if (images && images.length > 0) {
    const cover = optimizeUrl(images[0].url.replace(/\/w_2000,[^/]+\//, '/upload/'), 800);
    setCache(cacheKey, cover);
    return cover;
  }

  try {
    const result = await cloudinary.search
      .expression(`folder:"${folderPath}" OR folder:"${folderPath}/*"`)
      .sort_by('public_id', 'asc')
      .max_results(1)
      .execute();

    if (result.resources && result.resources.length > 0) {
      const coverUrl = optimizeUrl(result.resources[0].secure_url, 800);
      setCache(cacheKey, coverUrl);
      return coverUrl;
    }
  } catch (error: any) {
    console.warn(`Cloudinary cover search unavailable for ${folderPath}`);
  }

  return null;
}

/**
 * Count images in a folder (recursively) with caching and persistent fallback.
 */
export async function countAlbumImages(folderPath: string): Promise<number> {
  const cacheKey = `count_${folderPath}`;
  const cached = getCached<number>(cacheKey);
  if (cached !== null && cached !== undefined) return cached;

  // 1. Check catalog first (0 API calls, loads instantly)
  const item = findInCatalog(folderPath);
  if (item && typeof item.count === 'number') {
    setCache(cacheKey, item.count);
    return item.count;
  }

  // 2. Check if we have baked images for this folder
  const images = (galleryImages as Record<string, CloudinaryImage[]>)[folderPath];
  if (images && images.length > 0) {
    setCache(cacheKey, images.length);
    return images.length;
  }

  try {
    const result = await cloudinary.search
      .expression(`folder:"${folderPath}" OR folder:"${folderPath}/*"`)
      .max_results(0)
      .execute();
    const count = result.total_count || 0;
    if (count > 0) {
      setCache(cacheKey, count);
      return count;
    }
  } catch (error: any) {
    console.warn(`Cloudinary count search unavailable for ${folderPath}`);
  }

  return 0;
}

/**
 * Get all images in a folder (recursively) with caching.
 */
export async function getAlbumImages(folderPath: string): Promise<CloudinaryImage[]> {
  const cacheKey = `images_${folderPath}`;
  const cached = getCached<CloudinaryImage[]>(cacheKey);
  if (cached && cached.length > 0) return cached;

  // 1. Check baked static image store first (0 API calls, loads instantly 100% of the time)
  const storedImages = (galleryImages as Record<string, CloudinaryImage[]>)[folderPath];
  if (storedImages && storedImages.length > 0) {
    setCache(cacheKey, storedImages);
    return storedImages;
  }

  try {
    const images: CloudinaryImage[] = [];
    let nextCursor: string | undefined;

    do {
      const result = await cloudinary.search
        .expression(`folder:"${folderPath}" OR folder:"${folderPath}/*"`)
        .sort_by('public_id', 'asc')
        .max_results(100)
        .next_cursor(nextCursor || '')
        .execute();

      for (const resource of result.resources || []) {
        images.push({
          public_id: resource.public_id,
          // Serve at 2000px wide (Full HD / 2K) with maximum visual clarity
          url: optimizeUrl(resource.secure_url, 2000),
          width: resource.width,
          height: resource.height,
        });
      }

      nextCursor = result.next_cursor;
    } while (nextCursor);

    if (images.length > 0) {
      setCache(cacheKey, images);
    }
    return images;
  } catch (error: any) {
    console.error(`Error fetching images for ${folderPath}:`, error?.message || error);
    const stale = memoryCache.get(cacheKey);
    return stale ? stale.data : [];
  }
}
