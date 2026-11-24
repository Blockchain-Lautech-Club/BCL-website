/**
 * Gallery Sync Script
 * 
 * Run this after uploading new photos to Cloudinary:
 *   cd bcl-frontend && node sync-gallery.js
 * 
 * Uses ~25 API calls (out of 500/hour limit). Safe to run anytime.
 */
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Load env
const envFile = fs.readFileSync('.env.local', 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    let val = match[2].trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    env[match[1].trim()] = val;
  }
});

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

function optimizeUrl(url, width) {
  if (!url) return '';
  return url.replace('/upload/', `/upload/w_${width},q_auto:best,f_auto/`);
}

async function fetchAllImages(folderPath) {
  const images = [];
  let nextCursor = undefined;
  do {
    const res = await cloudinary.search
      .expression(`folder:"${folderPath}" OR folder:"${folderPath}/*"`)
      .sort_by('public_id', 'asc')
      .max_results(500)
      .next_cursor(nextCursor || '')
      .execute();
    for (const r of (res.resources || [])) {
      images.push({
        public_id: r.public_id,
        url: optimizeUrl(r.secure_url, 2000),
        width: r.width,
        height: r.height,
      });
    }
    nextCursor = res.next_cursor;
  } while (nextCursor);
  return images;
}

async function run() {
  const catalogPath = './lib/gallery-catalog.json';
  const imagesPath = './lib/gallery-images.json';
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  const imagesStore = JSON.parse(fs.readFileSync(imagesPath, 'utf8'));

  let totalCalls = 0;

  // 1. Check for any NEW folders on Cloudinary
  const result = await cloudinary.api.sub_folders('gallery');
  totalCalls++;
  const cloudFolders = result.folders.map(f => ({ name: f.name, path: f.path }));
  
  const existingNames = new Set(catalog.map(a => a.name));
  const newFolders = cloudFolders.filter(f => !existingNames.has(f.name));
  if (newFolders.length > 0) {
    console.log(`Found ${newFolders.length} NEW album(s):`);
    newFolders.forEach(f => {
      console.log(`  + ${f.name}`);
      catalog.push({ name: f.name, path: f.path, coverImage: '', count: 0 });
    });
  }

  // 2. Sync every album
  for (const album of catalog) {
    // Check for subfolders
    let subResult;
    try {
      subResult = await cloudinary.api.sub_folders(album.path);
      totalCalls++;
    } catch (e) {
      subResult = { folders: [] };
    }

    if (subResult.folders && subResult.folders.length > 0) {
      // Album has subfolders (tracks)
      album.subfolders = album.subfolders || [];
      const existingSubs = new Set(album.subfolders.map(s => s.name));
      
      for (const sf of subResult.folders) {
        if (!existingSubs.has(sf.name)) {
          album.subfolders.push({ name: sf.name, path: sf.path, count: 0, coverImage: '' });
        }
      }

      let totalPhotos = 0;
      for (const sf of album.subfolders) {
        console.log(`Syncing ${album.name} / ${sf.name}...`);
        const imgs = await fetchAllImages(sf.path);
        totalCalls++;
        if (imgs.length > 0) {
          sf.count = imgs.length;
          sf.coverImage = imgs[0].url.replace(/w_\d+,q_auto:best,f_auto/, 'w_800,q_auto:best,f_auto');
          imagesStore[sf.path] = imgs;
          totalPhotos += imgs.length;
        }
        console.log(`  -> ${imgs.length} photos`);
      }
      album.count = totalPhotos;
      if (album.subfolders[0] && album.subfolders[0].coverImage) {
        album.coverImage = album.subfolders[0].coverImage;
      }
    } else {
      // Simple album (no subfolders)
      console.log(`Syncing ${album.name}...`);
      const imgs = await fetchAllImages(album.path);
      totalCalls++;
      if (imgs.length > 0) {
        album.count = imgs.length;
        album.coverImage = imgs[0].url.replace(/w_\d+,q_auto:best,f_auto/, 'w_800,q_auto:best,f_auto');
        imagesStore[album.path] = imgs;
      }
      console.log(`  -> ${imgs.length} photos`);
    }
  }

  fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), 'utf8');
  fs.writeFileSync(imagesPath, JSON.stringify(imagesStore, null, 2), 'utf8');
  
  console.log(`\n✅ Sync complete!`);
  console.log(`   API calls used: ~${totalCalls} (out of 500/hour)`);
  console.log(`   Albums: ${catalog.length}`);
  console.log(`   Run: git add . && git commit -m "sync gallery" && git push origin main`);
}

run().catch(err => console.error('Error:', err.message || err));
