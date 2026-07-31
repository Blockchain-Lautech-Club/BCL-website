import Link from 'next/link';
import Image from 'next/image';
import { getAlbums, getAlbumCover, countAlbumImages } from '@/lib/cloudinary';

interface Album {
  name: string;
  coverImage: string | null;
  count: number;
}

export const metadata = {
  title: "Gallery | Blockchain Club LAUTECH",
  description: "Explore photos from our events, workshops, and hackathons.",
};

// Revalidate every hour so new uploads appear without redeploying
export const revalidate = 3600;

export default async function GalleryPage() {
  const cloudinaryAlbums = await getAlbums();
  
  // Fetch cover images and counts in parallel
  const albums: Album[] = await Promise.all(
    cloudinaryAlbums.map(async (album) => {
      const [coverImage, count] = await Promise.all([
        getAlbumCover(album.path),
        countAlbumImages(album.path),
      ]);
      return {
        name: album.name,
        coverImage,
        count,
      };
    })
  );

  // Filter out empty albums and sort
  const validAlbums = albums.filter((a) => a.count > 0);
  validAlbums.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1 px-4 sm:px-10 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Event <span className="text-blue-600">Gallery</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Relive the best moments from our conferences, workshops, and community meetups.
            </p>
          </div>

          {validAlbums.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No albums found. Check back soon for new photos!
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {validAlbums.map((album) => (
                <Link
                  key={album.name}
                  href={`/gallery/${encodeURIComponent(album.name)}`}
                  className="group relative flex h-64 flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-full w-full">
                    {album.coverImage ? (
                      <Image
                        src={album.coverImage}
                        alt={album.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200">
                        <span className="text-gray-400 text-4xl">📷</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 w-full p-5 text-white">
                    <h3 className="mb-1 truncate text-lg font-bold">{album.name}</h3>
                    <p className="text-sm text-gray-300">{album.count} photos</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
