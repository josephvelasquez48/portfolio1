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
};

export const projects: Project[] = [
  {
    id: 'project1',
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
    id: 'project2',
    title: 'PLM',
    description: 'Product Lifecycle Management platform to streamline workflows.',
    imageUrl: '/plm/project2.png',
    images: [
      { src: '/plm/ui.png', alt: 'PLM user interface' },
      { src: '/plm/workflow.png', alt: 'PLM workflow' }
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
    id: 'project3',
    title: 'ParkingPulse',
    description: 'AI-powered parking lot security and vehicle tracking system.',
    imageUrl: '/parkingpulse/project3.jpeg',
    images: [
      { src: '/parkingpulse/camera.png', alt: 'Live camera view' },
      { src: '/parkingpulse/reid.png', alt: 'Vehicle ReID system' },
      { src: '/parkingpulse/dashboard.png', alt: 'Admin dashboard' }
    ],
    overview: `ParkingPulse leverages AI to monitor parking lots in real-time, 
detecting and tracking vehicles for security, analytics, and management purposes.`,
    features: [
      'Real-time vehicle detection via camera feeds',
      'Vehicle ReID and tracking across multiple cameras',
      'Admin dashboard with history and notifications',
      'Email summaries for parking activity'
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
    ]
  }
];
