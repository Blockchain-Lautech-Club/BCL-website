import AlbumGallery from '@/components/gallery/album-gallery';
import { getAlbumImages } from '@/lib/cloudinary';
import { notFound } from 'next/navigation';

interface AlbumPageProps {
  params: {
    album: string;
  };
}

// Always server-render on demand (never pre-built statically)
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: AlbumPageProps) {
  const resolvedParams = await params;
  const albumName = decodeURIComponent(resolvedParams.album);
  return {
    title: `${albumName} | Gallery | Blockchain Club LAUTECH`,
  };
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const resolvedParams = await params;
  const albumName = decodeURIComponent(resolvedParams.album);
  const folderPath = `gallery/${albumName}`;

  const cloudinaryImages = await getAlbumImages(folderPath);

  if (cloudinaryImages.length === 0) {
    notFound();
  }

  // Extract just the URLs for the existing AlbumGallery component
  const imageUrls = cloudinaryImages.map((img) => img.url);

  return <AlbumGallery albumName={albumName} images={imageUrls} />;
}
