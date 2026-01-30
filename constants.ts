import { ServiceItem, ProjectItem, BlogPost, NavLink } from './types';

export const COMPANY_NAME = "Loya General Construction";
export const COMPANY_PHONE = "(619) 480-9951";
export const COMPANY_EMAIL = "loyagceo@gmail.com";
export const LICENSE_NUMBER = "CSLB #1143886 - General B";
export const LICENSE_EXPIRY = "09/30/2027";
export const CITY_MAIN = "San Diego";
export const CITIES_SERVED = [
  "San Diego",
  "Chula Vista",
  "La Mesa",
  "El Cajon",
  "National City",
  "Santee",
  "Del Mar",
  "Poway",
  "Escondido",
  "Oceanside",
  "Carlsbad"
];

export const NAV_LINKS: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Portfolio" },
  { path: "/areas", label: "Areas" },
  { path: "/contact", label: "Contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "remodeling",
    title: "Full Home Remodeling",
    description: "Transform your living space with our comprehensive residential remodeling services.",
    iconName: "Home",
    details: ["Open concept layouts", "Structural changes", "Flooring & Finishes", "Lighting plans"]
  },
  {
    id: "kitchens",
    title: "Kitchen Renovations",
    description: "Modern, functional kitchen designs tailored to your culinary lifestyle.",
    iconName: "ChefHat",
    details: ["Custom cabinetry", "Quartz & Granite countertops", "Island installation", "Backsplash design"]
  },
  {
    id: "adus",
    title: "ADU Construction",
    description: "Maximize property value with Accessory Dwelling Units and guest houses.",
    iconName: "Warehouse",
    details: ["Attached & Detached ADUs", "Garage conversions", "Permitting handling", "Utility connections"]
  },
  {
    id: "baths",
    title: "Bathroom Remodels",
    description: "Spa-like retreats built with precision waterproofing and luxury fixtures.",
    iconName: "Droplets",
    details: ["Walk-in showers", "Vanity upgrades", "Tile installation", "Plumbing reconfiguration"]
  },
  {
    id: "framing",
    title: "Framing & Drywall",
    description: "Solid structural foundations and flawless finish work.",
    iconName: "Hammer",
    details: ["Structural framing", "Drywall installation", "Texture matching", "Acoustic insulation"]
  },
  {
    id: "hardscape",
    title: "Concrete & Hardscape",
    description: "Exterior transformations that enhance curb appeal and usability.",
    iconName: "Shovel",
    details: ["Driveways", "Patios", "Retaining walls", "Walkways"]
  }
];

// Cloudinary optimized image URLs
const CDN = 'https://res.cloudinary.com/dwquql5lk/image/upload';
const OPT = 'f_auto,q_auto,w_800,h_600,c_fill'; // Card size optimized

export const PROJECTS: ProjectItem[] = [
  {
    id: "adu-backyard",
    title: "Backyard ADU Build",
    category: "ADU Construction",
    location: "San Diego, CA",
    description: "Complete ground-up ADU construction featuring modern OSB sheathing, energy-efficient windows, and full electrical/plumbing rough-in.",
    imageUrl: `${CDN}/${OPT}/dji_fly_20250629_134718_249_1751230115561_photo_optimized_e3sher.jpg`
  },
  {
    id: "bathroom-marble",
    title: "Modern Marble Bathroom",
    category: "Bathroom Remodel",
    location: "Chula Vista, CA",
    description: "Full bathroom renovation with marble-look porcelain tile, frameless glass shower enclosure, and luxury vinyl plank flooring.",
    imageUrl: `${CDN}/${OPT}/IMG_1425_ks9zdb.jpg`
  },
  {
    id: "adu-stucco",
    title: "Detached Guest House",
    category: "ADU Construction",
    location: "La Mesa, CA",
    description: "600 sq ft detached ADU with smooth stucco exterior, modern windows, and covered entry. Includes full kitchen and bathroom.",
    imageUrl: `${CDN}/${OPT}/B2DECA51-3377-4F52-AB0F-9FA0896519F7_altedj.jpg`
  },
  {
    id: "room-addition",
    title: "Master Suite Addition",
    category: "Room Addition",
    location: "El Cajon, CA",
    description: "Custom room addition with engineered beam framing, new foundation tie-in, and seamless integration with existing structure.",
    imageUrl: `${CDN}/${OPT}/IMG_3896_xxnma7.jpg`
  },
  {
    id: "new-construction",
    title: "New Home Framing",
    category: "New Construction",
    location: "San Diego County",
    description: "Large-scale residential framing project featuring TallWall sheathing system for superior structural integrity and energy efficiency.",
    imageUrl: `${CDN}/${OPT}/96646549-E6BF-49A1-BA57-A6DC77E24815_e76ijg.jpg`
  },
  {
    id: "concrete-foundation",
    title: "Foundation & Concrete Work",
    category: "Concrete & Hardscape",
    location: "National City, CA",
    description: "Reinforced concrete foundation with precision rebar placement, proper drainage integration, and code-compliant footings.",
    imageUrl: `${CDN}/${OPT}/IMG_5693_hp3dyf.jpg`
  },
  {
    id: "home-renovation",
    title: "Whole Home Renovation",
    category: "Full Remodel",
    location: "Santee, CA",
    description: "Complete exterior renovation including new framing, window replacement, stucco repair, and structural improvements.",
    imageUrl: `${CDN}/${OPT}/71512F3D-D9FB-4326-97FE-C8C88438282B_sc6j9h.jpg`
  },
  {
    id: "deck-fence",
    title: "Custom Wood Deck & Fence",
    category: "Hardscape",
    location: "Poway, CA",
    description: "Premium redwood deck construction with matching privacy fence, concrete footings, and weather-resistant finish.",
    imageUrl: `${CDN}/${OPT}/06CABB6C-6AB3-427E-86A9-F9B10D03E094_qwr3oc.jpg`
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "How to Plan a Kitchen Remodel in San Diego",
    excerpt: "Navigating costs, timelines, and permits for your dream kitchen in San Diego County.",
    date: "Oct 12, 2023",
    category: "Kitchens",
    imageUrl: "https://images.unsplash.com/photo-1595515106967-434d9743ee97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "5 Things to Know Before Building an ADU",
    excerpt: "California regulations have changed. Here is what you need to know before breaking ground.",
    date: "Nov 05, 2023",
    category: "ADU / Construction",
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Choosing the Right General Contractor",
    excerpt: "Why verifying the CSLB Class B license and insurance is crucial for your peace of mind.",
    date: "Dec 01, 2023",
    category: "Guides",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  }
];