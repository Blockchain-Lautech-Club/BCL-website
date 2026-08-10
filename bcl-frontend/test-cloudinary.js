const cloudinary = require('cloudinary').v2;
const fs = require('fs');

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

console.log("Cloud Name:", env.CLOUDINARY_CLOUD_NAME);
console.log("API Key:", env.CLOUDINARY_API_KEY ? "Set" : "Not Set");
console.log("API Secret:", env.CLOUDINARY_API_SECRET ? "Set" : "Not Set");

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

async function test() {
  try {
    const result = await cloudinary.api.sub_folders('gallery');
    console.log("SUCCESS! Found folders:", result.folders.length);
    console.log(result.folders.map(f => f.name));
  } catch (err) {
    console.error("ERROR Fetching Cloudinary API:", err.message || err);
  }
}

test();
