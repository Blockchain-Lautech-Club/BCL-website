const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'zz3ptcjd',
  api_key: '647392191184964',
  api_secret: '78C8SoKZCtWi0pHDTawc7JXgf44',
});

const galleryDir = path.join(__dirname, 'public', 'gallery');
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|webp|gif)$/i;
const CONCURRENCY = 10; // Upload 10 images at a time

// Recursively collect all image files
function collectFiles(dirPath, relativePrefix = '') {
  const results = [];
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    if (item.startsWith('.')) continue;
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const subPrefix = relativePrefix ? `${relativePrefix}/${item}` : item;
      results.push(...collectFiles(fullPath, subPrefix));
    } else if (IMAGE_EXTENSIONS.test(item)) {
      // Skip files over 10MB
      if (stat.size > 10 * 1024 * 1024) {
        console.log(`⚠️  Skipping (>10MB): ${fullPath}`);
        continue;
      }
      results.push({
        filePath: fullPath,
        folder: relativePrefix ? `gallery/${relativePrefix}` : 'gallery',
        fileName: item,
      });
    }
  }
  return results;
}

// Upload a single file, returns true if successful/already exists
async function uploadOne(file) {
  try {
    await cloudinary.uploader.upload(file.filePath, {
      folder: file.folder,
      public_id: path.parse(file.fileName).name,
      resource_type: 'image',
      overwrite: false,
      unique_filename: false,
      use_filename: true,
    });
    return { success: true };
  } catch (err) {
    const msg = err.message || JSON.stringify(err);
    if (msg.includes('already exists') || err.http_code === 409) {
      return { success: true, skipped: true };
    }
    return { success: false, error: msg, file: file.filePath };
  }
}

// Process files in batches of CONCURRENCY
async function uploadAll() {
  const files = collectFiles(galleryDir);
  console.log(`Found ${files.length} images to upload (${CONCURRENCY} parallel).`);

  let uploaded = 0;
  let skipped = 0;
  let failed = 0;
  const errors = [];

  for (let i = 0; i < files.length; i += CONCURRENCY) {
    const batch = files.slice(i, i + CONCURRENCY);
    const results = await Promise.all(batch.map(uploadOne));

    for (const r of results) {
      if (r.success) {
        uploaded++;
        if (r.skipped) skipped++;
      } else {
        failed++;
        errors.push({ file: r.file, error: r.error });
      }
    }

    const total = uploaded + failed;
    console.log(`✅ Progress: ${total}/${files.length} (${uploaded} ok, ${skipped} already existed, ${failed} failed)`);
  }

  console.log(`\n🎉 Upload complete!`);
  console.log(`   ✅ Uploaded/existed: ${uploaded} (${skipped} were already on Cloudinary)`);
  console.log(`   ❌ Failed: ${failed}`);
  if (errors.length > 0) {
    console.log('\nFailed files:');
    for (const e of errors) {
      console.log(`   ${e.file}: ${e.error}`);
    }
  }
}

uploadAll();
