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
    imageUrl: '/parkingpulse/project3.jpeg',
    images: [
      { src: '/parkingpulse/pp1.png', alt: 'Live camera view' },
      { src: '/parkingpulse/pp2.png', alt: 'Vehicle ReID system' }
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
    id: 'project2',
    title: 'Lumi',
    description: 'A mental health companion app for reflection and mood tracking.',
    imageUrl: '/lumi/lumi3.png',
    images: [
      { src: '/lumi/lumi1.png', alt: 'Lumi avatar mad' },
      { src: '/lumi/lumi2.png', alt: 'Lumi avatar nuetral' },
      { src: '/lumi/lumi3.png', alt: 'Lumi avatar happy' },
      { src: '/lumi/lumi4.png', alt: 'Lumi avatar sad' }
    ],
    overview: `Lumi is a mental health companion app where users can interact through talking or typing,
and the character's mood changes in response. It encourages reflection on emotions and helps track wellbeing over time.`,
    features: [
      'Interactive mood-tracking companion',
      'Text-based reflection on user input',
      'Simple visualization of character mood'
    ],
    roadmap: [
      'Expanded character interactions and responses',
      'Mood analytics and history tracking',
      'AI-driven suggestions for self-care activities',
      'Mobile push notifications for daily check-ins',
      'Integration with mental health resources'
    ],
    notes: [
      'Currently building the core interaction system',
      'Working on securely storing user mood data',
      'Planning UI improvements and better feedback animations'
    ]
  },
  {
    id: 'project3',
    title: 'PLM',
    description: 'Product Lifecycle Management platform to streamline workflows.',
    imageUrl: '/plm/project2.png',
    images: [
      { src: '/plm/ui.png', alt: 'PLM user interface' },
      { src: '/plm/ui2.png', alt: 'PLM workflow' }
    ],
    overview: `PLM is a platform designed to streamline product development workflows,
tracking each stage from concept to production. It provides teams with a centralized place to manage tasks, documents, and approvals.`,
    features: [
      'Centralized workflow management',
      'Task and document tracking',
      'Approval and review system',
      'Customizable dashboards'
    ],
    roadmap: [
      'Integrate analytics for project efficiency',
      'Add role-based access controls',
      'Implement notifications and reminders',
      'Mobile-friendly interface',
      'Enhanced collaboration tools'
    ],
    notes: [
      'Core backend architecture is complete',
      'UI design for dashboards in progress',
      'API integrations planned for ERP systems'
    ]
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
