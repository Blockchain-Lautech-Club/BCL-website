import { v2 as cloudinary } from 'cloudinary';

// Support both CLOUDINARY_URL (e.g. cloudinary://key:secret@cloud) and individual env vars
if (process.env.CLOUDINARY_URL) {
  // parse CLOUDINARY_URL: cloudinary://api_key:api_secret@cloud_name
  const url = new URL(process.env.CLOUDINARY_URL.replace('cloudinary://', 'http://'));
  cloudinary.config({
    cloud_name: url.hostname,
    api_key: url.username,
    api_secret: url.password,
  });
} else {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

export interface CloudinaryAlbum {
  name: string;
  path: string;
}

export interface CloudinaryImage {
  public_id: string;
  url: string;
  width: number;
  height: number;
}

/**
 * Get all subfolders inside the "gallery" root folder.
 */
export async function getAlbums(): Promise<CloudinaryAlbum[]> {
  try {
    const result = await cloudinary.api.sub_folders('gallery');
    return result.folders.map((folder: { name: string; path: string }) => ({
      name: folder.name,
      path: folder.path,
    }));
  } catch (error) {
    console.error('Error fetching Cloudinary albums:', error);
    return [];
  }
}

/**
 * Get the first image in a folder (for cover image).
 */
export async function getAlbumCover(folderPath: string): Promise<string | null> {
  try {
    const result = await cloudinary.search
      .expression(`folder:"${folderPath}/*"`)
      .sort_by('public_id', 'asc')
      .max_results(1)
      .execute();

    if (result.resources.length > 0) {
      return result.resources[0].secure_url;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching cover for ${folderPath}:`, error);
    return null;
  }
}

/**
 * Get all images in a folder (recursively).
 */
export async function getAlbumImages(folderPath: string): Promise<CloudinaryImage[]> {
  try {
    const images: CloudinaryImage[] = [];
    let nextCursor: string | undefined;

    do {
      const result = await cloudinary.search
        .expression(`folder:"${folderPath}/*"`)
        .sort_by('public_id', 'asc')
        .max_results(100)
        .next_cursor(nextCursor || '')
        .execute();

      for (const resource of result.resources) {
        images.push({
          public_id: resource.public_id,
          url: resource.secure_url,
          width: resource.width,
          height: resource.height,
        });
      }

      nextCursor = result.next_cursor;
    } while (nextCursor);

    return images;
  } catch (error) {
    console.error(`Error fetching images for ${folderPath}:`, error);
    return [];
  }
}

/**
 * Count images in a folder (recursively).
 */
export async function countAlbumImages(folderPath: string): Promise<number> {
  try {
    const result = await cloudinary.search
      .expression(`folder:"${folderPath}/*"`)
      .max_results(0)
      .execute();
    return result.total_count;
  } catch (error) {
    console.error(`Error counting images for ${folderPath}:`, error);
    return 0;
  }
}
