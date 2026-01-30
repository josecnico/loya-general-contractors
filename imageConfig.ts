// Cloudinary Image Configuration
// Cloud Name: dwquql5lk

const CLOUDINARY_BASE = 'https://res.cloudinary.com/dwquql5lk/image/upload';

// Optimization presets
const OPTIMIZE = 'f_auto,q_auto'; // Auto format (WebP) + auto quality
const HERO = 'f_auto,q_auto,w_1920,h_1080,c_fill'; // Large hero images
const CARD = 'f_auto,q_auto,w_800,h_600,c_fill'; // Card/thumbnail images
const SQUARE = 'f_auto,q_auto,w_600,h_600,c_fill'; // Square gallery images
const PORTRAIT = 'f_auto,q_auto,w_400,h_500,c_fill'; // Portrait images

// Image public IDs from Cloudinary
const IMAGES = {
  // ADU / Aerial shots
  aduAerialRoof: 'dji_fly_20250629_134718_249_1751230115561_photo_optimized_e3sher',
  aduFoundationAerial: 'dji_fly_20250702_132208_274_1751487796591_photo_optimized_rgn6sr',
  homeAdditionAerial: 'dji_fly_20250702_132444_278_1751487950232_photo_optimized_srcqgz',
  aduConcreteSlab: 'IMG_5409_ncex35',

  // ADU Exteriors
  aduStuccoExterior: 'B2DECA51-3377-4F52-AB0F-9FA0896519F7_altedj',
  aduInteriorWindows: 'DC545685-561A-44C3-A18E-5BB9F572F3EE_rzbrt1',

  // Bathroom
  bathroomRemodel: 'IMG_1425_ks9zdb',

  // Framing
  exteriorFraming: 'IMG_0377_fmk5ql',
  windowInstallation: 'IMG_0725_zac81a',
  interiorFraming: 'IMG_5530_xmcb8j',
  framingWindowInstall: 'IMG_5532_jpla6x',
  roomAdditionFraming: 'IMG_3896_xxnma7',
  newConstructionTallwall: '96646549-E6BF-49A1-BA57-A6DC77E24815_e76ijg',
  newConstructionFraming: 'IMG_3074_gd9l3p',

  // Concrete & Hardscape
  concreteFoundation: 'IMG_5693_hp3dyf',
  woodDeckFence: '06CABB6C-6AB3-427E-86A9-F9B10D03E094_qwr3oc',

  // Renovation
  homeRenovationExterior: '71512F3D-D9FB-4326-97FE-C8C88438282B_sc6j9h',

  // Team/Work
  contractorAtWork: 'IMG_5926_tr2ilo',
};

// Helper function to build Cloudinary URLs
export const cloudinaryUrl = (imageKey: keyof typeof IMAGES, preset: string = OPTIMIZE): string => {
  const publicId = IMAGES[imageKey];
  return `${CLOUDINARY_BASE}/${preset}/${publicId}.jpg`;
};

// Pre-built URLs for common use cases
export const images = {
  // Hero images (large, optimized)
  hero: {
    main: `${CLOUDINARY_BASE}/${HERO}/${IMAGES.aduAerialRoof}.jpg`,
    about: `${CLOUDINARY_BASE}/${HERO}/${IMAGES.newConstructionFraming}.jpg`,
    services: `${CLOUDINARY_BASE}/${HERO}/${IMAGES.aduStuccoExterior}.jpg`,
  },

  // Portfolio/Project cards
  portfolio: {
    aduAerial: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.aduAerialRoof}.jpg`,
    bathroom: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.bathroomRemodel}.jpg`,
    aduStucco: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.aduStuccoExterior}.jpg`,
    roomAddition: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.roomAdditionFraming}.jpg`,
    newConstruction: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.newConstructionTallwall}.jpg`,
    concrete: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.concreteFoundation}.jpg`,
    renovation: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.homeRenovationExterior}.jpg`,
    deck: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.woodDeckFence}.jpg`,
  },

  // Service page images
  services: {
    remodeling: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.homeRenovationExterior}.jpg`,
    kitchens: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.interiorFraming}.jpg`,
    adus: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.aduStuccoExterior}.jpg`,
    baths: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.bathroomRemodel}.jpg`,
    framing: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.roomAdditionFraming}.jpg`,
    hardscape: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.concreteFoundation}.jpg`,
  },

  // Gallery grid (square thumbnails)
  gallery: {
    aduFoundation: `${CLOUDINARY_BASE}/${SQUARE}/${IMAGES.aduFoundationAerial}.jpg`,
    exteriorFraming: `${CLOUDINARY_BASE}/${SQUARE}/${IMAGES.exteriorFraming}.jpg`,
    windowInstall: `${CLOUDINARY_BASE}/${SQUARE}/${IMAGES.windowInstallation}.jpg`,
    aduInterior: `${CLOUDINARY_BASE}/${SQUARE}/${IMAGES.aduInteriorWindows}.jpg`,
    interiorFraming: `${CLOUDINARY_BASE}/${SQUARE}/${IMAGES.interiorFraming}.jpg`,
    framingWindow: `${CLOUDINARY_BASE}/${SQUARE}/${IMAGES.framingWindowInstall}.jpg`,
    homeAddition: `${CLOUDINARY_BASE}/${SQUARE}/${IMAGES.homeAdditionAerial}.jpg`,
    concreteSlab: `${CLOUDINARY_BASE}/${SQUARE}/${IMAGES.aduConcreteSlab}.jpg`,
  },

  // About page
  about: {
    team: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.contractorAtWork}.jpg`,
    construction: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.newConstructionFraming}.jpg`,
    aduExterior: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.aduStuccoExterior}.jpg`,
    bathroom: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.bathroomRemodel}.jpg`,
    roomAddition: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.roomAdditionFraming}.jpg`,
  },

  // Areas page
  areas: {
    aerial: `${CLOUDINARY_BASE}/${CARD}/${IMAGES.homeAdditionAerial}.jpg`,
  },

  // Owner/portrait
  owner: `${CLOUDINARY_BASE}/${PORTRAIT}/${IMAGES.contractorAtWork}.jpg`,
};

export default images;
