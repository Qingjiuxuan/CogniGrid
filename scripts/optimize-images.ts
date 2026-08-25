import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve(process.cwd(), 'src/assets/images');

async function optimize() {
  console.log('Generating optimized sizes...');

  // Brand Logo variants
  const logoPath = path.join(imagesDir, 'cognigrid_brand_logo_1787616403683.jpg');
  if (fs.existsSync(logoPath)) {
    await sharp(logoPath)
      .resize(128, 128, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(path.join(imagesDir, 'logo_128.webp'));

    await sharp(logoPath)
      .resize(256, 256, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(path.join(imagesDir, 'logo_256.webp'));

    await sharp(logoPath)
      .resize(512, 512, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(path.join(imagesDir, 'logo_512.webp'));
  }

  // Executive Photos (optimized 400x500 portrait)
  const execs = [
    'exec_ethan_ceo_1787616046363',
    'exec_lucas_coo_1787616062294',
    'exec_julian_cto_1787616075055',
    'exec_arthur_cfo_1787616090941',
    'exec_stella_cmo_1787616105563',
    'exec_miles_cgo_1787616120147',
    'exec_iris_cbdo_1787616135363'
  ];

  for (const exec of execs) {
    const orig = path.join(imagesDir, `${exec}.jpg`);
    if (fs.existsSync(orig)) {
      // High-DPI portrait (480x600)
      await sharp(orig)
        .resize(480, 600, { fit: 'cover', position: 'top' })
        .webp({ quality: 85, effort: 6 })
        .toFile(path.join(imagesDir, `${exec}_card.webp`));

      // Thumbnail for modals / previews (160x200)
      await sharp(orig)
        .resize(160, 200, { fit: 'cover', position: 'top' })
        .webp({ quality: 80 })
        .toFile(path.join(imagesDir, `${exec}_thumb.webp`));
    }
  }

  console.log('All image variants generated successfully!');
}

optimize().catch(console.error);
