// src/lib/projects.ts
export type ProjectImage = {
  src: string;
  alt?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;       // Short description (used in cards)
  imageUrl: string;          // Cover image (used in cards)
  images: ProjectImage[];    // Gallery images (used on project page)
  overview?: string;         // Detailed overview / story
  features?: string[];       // Current features
  roadmap?: string[];        // Planned features / roadmap
  notes?: string[];          // Development notes / progression plan
  tech?: string[];           // Tech stack tags
  repoUrl?: string;          // GitHub repo link
  liveUrl?: string;          // Live demo link
};

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'ParkingPulse',
    description: 'AI-powered parking lot security and vehicle tracking system.',
    imageUrl: '/parkingpulse/pp1.png',
    images: [
      { src: '/parkingpulse/admin-home.png', alt: 'Admin desktop app home screen' },
      { src: '/parkingpulse/pp2.png', alt: 'Vehicle ReID system' },
      { src: '/parkingpulse/logged-vehicles.png', alt: 'Logged vehicle history' },
      { src: '/parkingpulse/settings.png', alt: 'Admin settings — ReID threshold and log limits' },
      { src: '/parkingpulse/inference-log.png', alt: 'YOLOv8 inference and ReID matching logs' },
      { src: '/parkingpulse/firestore-console.png', alt: 'Firebase Firestore vehicle data' },
      { src: '/parkingpulse/vehicle-log-email.png', alt: 'Automated vehicle log email summary' }
    ],
    overview: `ParkingPulse is a real-time AI vehicle tracking platform built with Python, OpenCV, and YOLOv8
for intelligent object detection and analytics. It ingests live camera feeds, tracks vehicles across
multiple cameras, and surfaces the results through an admin dashboard backed by Firebase.`,
    features: [
      'Real-time vehicle detection and tracking via YOLOv8 and OpenCV',
      'RESTful APIs for real-time data ingestion, processing, and retrieval',
      'Firebase-backed authentication and cloud data storage',
      'Latency reductions through frame skipping and model tuning',
      'Admin dashboard with history and notifications'
    ],
    roadmap: [
      'Mobile app for remote monitoring',
      'Multi-zone camera support with dynamic switching',
      'Enhanced ReID accuracy with additional embeddings',
      'Integration with payment and reservation systems',
      'Automated incident alerts'
    ],
    notes: [
      'Optimized ReID performance for slower systems',
      'Implemented dynamic camera zone selection',
      'Preparing for standalone executable deployment'
    ],
    tech: ['Python', 'OpenCV', 'YOLOv8', 'Firebase', 'REST APIs'],
    repoUrl: 'https://github.com/loadingError117/ParkingPulse'
  },
  {
    id: 'project4',
    title: 'Nom Square',
    description: 'A restaurant menu and ordering system with a customer ordering flow and admin back office.',
    imageUrl: '/nomsquare/item-detail.png',
    images: [
      { src: '/nomsquare/cart.png', alt: 'Cart with subtotal, tax, and total' },
      { src: '/nomsquare/menu-admin.png', alt: 'Admin menu item management' },
      { src: '/nomsquare/employee-list.png', alt: 'Employee list with role-based accounts' }
    ],
    overview: `Nom Square is a restaurant ordering system covering both sides of the experience: a
customer-facing menu with itemized add-ons and a running cart, and an admin back office for managing
menu items and employee accounts. Menu data is stored in Firebase Firestore.`,
    features: [
      'Customer menu browsing with item detail modals and add-ons',
      'Cart with live subtotal, tax, and total calculation',
      'Admin menu editor for creating, editing, and deleting items',
      'Role-based employee account management',
      'Firebase Firestore-backed data storage'
    ],
    roadmap: [
      'Online payment integration',
      'Order history and receipts for customers',
      'Real-time order status for kitchen staff',
      'Analytics dashboard for sales and popular items'
    ],
    tech: ['JavaScript', 'Vite', 'Firebase Firestore'],
    repoUrl: 'https://github.com/colormak3r/nom-square'
  }
];
