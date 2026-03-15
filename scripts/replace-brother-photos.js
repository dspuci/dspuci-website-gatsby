/**
 * Replace brother photos in public/images/brothers/current_data/
 *
 * 1. Copy the 5 new PNGs into scripts/new_brother_photos/ and name them:
 *    asmitha_chunchu.png, ananya_iyengar.png, kyle_chen.png,
 *    lohit_potnuru.png, lauren_nguyen.png
 * 2. Run: node scripts/replace-brother-photos.js
 *
 * Converts PNG → JPG and writes to public/images/brothers/current_data/
 */

const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const SOURCE_DIR = path.join(__dirname, "new_brother_photos");
const DEST_DIR = path.join(__dirname, "..", "public", "images", "brothers", "current_data");

const NAMES = [
  "asmitha_chunchu",
  "ananya_iyengar",
  "kyle_chen",
  "lohit_potnuru",
  "lauren_nguyen",
];

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error("Missing folder: scripts/new_brother_photos/");
    process.exit(1);
  }

  for (const name of NAMES) {
    const pngPath = path.join(SOURCE_DIR, `${name}.png`);
    const jpgPath = path.join(DEST_DIR, `${name}.jpg`);

    if (!fs.existsSync(pngPath)) {
      console.warn("Skip (not found):", pngPath);
      continue;
    }

    try {
      await sharp(pngPath)
        .jpeg({ quality: 90 })
        .toFile(jpgPath);
      console.log("OK:", name + ".jpg");
    } catch (err) {
      console.error("Error", name, err.message);
    }
  }
}

main();
