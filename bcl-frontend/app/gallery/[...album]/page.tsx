import AlbumGallery from '@/components/gallery/album-gallery';
import { getAlbumCover, getAlbumImages, getSubfolders, countAlbumImages } from '@/lib/cloudinary';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Folder, ChevronRight } from 'lucide-react';

interface SubfolderItem {
  name: string;
  path: string;
  coverImage: string | null;
  count: number;
  href: string;
}

interface AlbumPageProps {
  params: Promise<{
    album: string[];
  }> | {
    album: string[];
  };
}

// Auto-revalidate every 60 seconds so new uploads appear quickly
export const revalidate = 60;

export async function generateMetadata({ params }: AlbumPageProps) {
  const resolvedParams = await params;
  const albumSegments = Array.isArray(resolvedParams.album)
    ? resolvedParams.album.map(decodeURIComponent)
    : [decodeURIComponent(resolvedParams.album)];
  const title = albumSegments[albumSegments.length - 1];
  return {
    title: `${title} | Gallery | Blockchain Club LAUTECH`,
  };
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const resolvedParams = await params;
  const albumSegments = Array.isArray(resolvedParams.album)
    ? resolvedParams.album.map(decodeURIComponent)
    : [decodeURIComponent(resolvedParams.album)];

  const folderPath = `gallery/${albumSegments.join('/')}`;
  const currentTitle = albumSegments[albumSegments.length - 1];

  // 1. Check if this folder has subfolders (like Confluence 2.0 tracks)
  const subfolders = await getSubfolders(folderPath);

  // If subfolders exist, render the Subfolder / Tracks directory
  if (subfolders.length > 0) {
    const subfolderData: SubfolderItem[] = await Promise.all(
      subfolders.map(async (sf) => {
        const [coverImage, count] = await Promise.all([
          getAlbumCover(sf.path),
          countAlbumImages(sf.path),
        ]);
        const href = `/gallery/${albumSegments.map(encodeURIComponent).join('/')}/${encodeURIComponent(sf.name)}`;
        return {
          name: sf.name,
          path: sf.path,
          coverImage,
          count,
          href,
        };
      })
    );

    // Sort subfolders alphabetically
    subfolderData.sort((a, b) => a.name.localeCompare(b.name));

    // Calculate parent link
    const parentHref = albumSegments.length > 1
      ? `/gallery/${albumSegments.slice(0, -1).map(encodeURIComponent).join('/')}`
      : '/gallery';
    const parentLabel = albumSegments.length > 1
      ? `Back to ${albumSegments[albumSegments.length - 2]}`
      : 'Back to All Albums';

    const totalTrackPhotos = subfolderData.reduce((acc, curr) => acc + curr.count, 0);

    return (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <main className="flex-1 px-4 sm:px-10 py-10">
          <div className="mx-auto max-w-7xl">
            {/* Navigation & Breadcrumbs */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <Link href="/gallery" className="hover:text-blue-600 transition-colors">
                Gallery
              </Link>
              {albumSegments.map((segment, index) => {
                const isLast = index === albumSegments.length - 1;
                const path = `/gallery/${albumSegments.slice(0, index + 1).map(encodeURIComponent).join('/')}`;
                return (
                  <span key={path} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    {isLast ? (
                      <span className="font-semibold text-gray-900">{segment}</span>
                    ) : (
                      <Link href={path} className="hover:text-blue-600 transition-colors">
                        {segment}
                      </Link>
                    )}
                  </span>
                );
              })}
            </div>

            <div className="mb-8">
              <Link 
                href={parentHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>{parentLabel}</span>
              </Link>
            </div>

            {/* Header */}
            <div className="mb-10 border-b border-gray-200 pb-6">
              <h1 className="text-3xl font-extrabold text-gray-900 md:text-5xl">
                {currentTitle}
              </h1>
              <p className="mt-2 text-base text-gray-600">
                {subfolders.length} Tracks / Categories &bull; {totalTrackPhotos} photos
              </p>
            </div>

            {/* Subfolders Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {subfolderData.map((folder) => (
                <Link
                  key={folder.name}
                  href={folder.href}
                  className="group relative flex h-64 flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-full w-full">
                    {folder.coverImage ? (
                      <Image
                        src={folder.coverImage}
                        alt={folder.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200">
                        <Folder className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 w-full p-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Folder className="h-4 w-4 text-blue-400" />
                      <h3 className="truncate text-lg font-bold">{folder.name}</h3>
                    </div>
                    <p className="text-sm text-gray-300">{folder.count} photos</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 2. If it has no subfolders, fetch and render images in this specific folder
  const cloudinaryImages = await getAlbumImages(folderPath);

  if (cloudinaryImages.length === 0) {
    notFound();
  }

  const imageUrls = cloudinaryImages.map((img) => img.url);

  // Back navigation setup
  const parentHref = albumSegments.length > 1
    ? `/gallery/${albumSegments.slice(0, -1).map(encodeURIComponent).join('/')}`
    : '/gallery';
  const parentLabel = albumSegments.length > 1
    ? `Back to ${albumSegments[albumSegments.length - 2]}`
    : 'Back to All Albums';

  return (
    <AlbumGallery 
      albumName={currentTitle} 
      images={imageUrls}
      backHref={parentHref}
      backLabel={parentLabel}
    />
  );
}
