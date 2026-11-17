// All portfolio content lives here so sections stay purely presentational.

export const PROFILE = {
    name: 'Mohamed Sherif Kamel',
    short: 'MSK',
    role: 'Full-Stack .NET Developer',
    email: 'mohamedsherif21101@gmail.com',
    phone: '01007240656',
    phoneIntl: '+201007240656',
    location: 'Qusiya, Assiut, Egypt',
    github: 'https://github.com/Azamsherif',
    linkedin: 'https://linkedin.com/in/mohamed-sherif-kamel',
    whatsapp: 'https://wa.me/201007240656',
    roles: [
        'Full-Stack .NET Developer',
        'ASP.NET Core & Web API',
        'SQL Server Database Design',
        'Clean Architecture & SOLID',
    ],
    freelance: [
        { name: 'Khamsat', href: 'https://khamsat.com/user/mohame2110' },
        { name: 'Mostaql', href: 'https://mostaql.com/u/Mohamed21sherif' },
        { name: 'Upwork', href: 'https://www.upwork.com/freelancers/~01f19741b8cdf17a15' },
    ],
}

// Single brand accent used across the UI and the 3D scene.
export const ACCENT = '#4f6ef7'

// The guided path through the page. Order = scroll order.
// `accent` drives the UI accent colour and the 3D scene colour for that chapter.
export const CHAPTERS = [
    { id: 'hero', label: 'Intro', accent: ACCENT, hint: 'Who I am and what I build — in ten seconds.' },
    { id: 'about', label: 'About', accent: ACCENT, hint: 'My background, my approach, and the principles I code by.' },
    { id: 'skills', label: 'Skills', accent: ACCENT, hint: 'The stack I work with, from SQL Server to the browser.' },
    { id: 'experience', label: 'Experience', accent: ACCENT, hint: 'Real client work: database architecture delivered on Khamsat.' },
    { id: 'projects', label: 'Projects', accent: ACCENT, hint: 'Four builds — open any one for the details.' },
    { id: 'education', label: 'Education', accent: ACCENT, hint: 'Degree, intensive DEPI training, and certifications.' },
    { id: 'contact', label: 'Contact', accent: ACCENT, hint: 'Email, phone, or WhatsApp — I reply quickly.' },
]

export const PILLARS = [
    { icon: 'Server', title: 'Backend Engineering', text: 'ASP.NET Core (MVC & Web API), EF Core & SQL Server' },
    { icon: 'Code2', title: 'Software Craftsmanship', text: 'Clean Code, SOLID principles & scalable architecture' },
    { icon: 'GitBranch', title: 'Full SDLC & Quality', text: 'Documentation, testing & Git version control' },
    { icon: 'Container', title: 'Modern Stack & DevOps', text: 'Modern front-end & Docker containerization' },
]

export const LANGUAGES = [
    { name: 'Arabic', level: 'Native', value: 100 },
    { name: 'English', level: 'B1', value: 60 },
]

export const TECH_SKILLS = [
    {
        icon: 'Server',
        title: 'Backend',
        tag: 'Server-side & APIs',
        items: [
            '.NET 10/6, ASP.NET Core (MVC & Web API)',
            'Entity Framework Core (EF Core), LINQ',
            'RESTful APIs, Swagger/OpenAPI',
            'Identity Framework, JWT Authentication',
            'Dependency Injection, Async/Await',
        ],
    },
    {
        icon: 'Database',
        title: 'Databases',
        tag: 'Modeling & storage',
        items: [
            'Microsoft SQL Server',
            'SQL (Stored Procedures, Functions, Joins)',
            'Schema Design, Normalization, Migrations',
        ],
    },
    {
        icon: 'Code',
        title: 'Frontend',
        tag: 'Client-side & UI',
        items: [
            'HTML5, CSS3, JavaScript (ES6+)',
            'Bootstrap 5, Responsive Web Design',
            'Flexbox, CSS Grid, Media Queries',
            'DOM Manipulation, Events, AJAX/Fetch API',
        ],
    },
    {
        icon: 'GitBranch',
        title: 'Tools & Practices',
        tag: 'Architecture & workflow',
        items: [
            'Git, GitHub',
            'Docker (Containerization)',
            'Agile, Scrum, Software Documentation',
            'SOLID, OOP, Clean Architecture, Design Patterns',
        ],
    },
]


export const PERSONAL_SKILLS = [
    { icon: 'Lightbulb', title: 'Problem-Solving', text: 'Breaking down complex problems into manageable solutions.' },
    { icon: 'Users', title: 'Collaboration', text: 'Effective teamwork and clear communication.' },
    { icon: 'Zap', title: 'Fast Learner', text: 'Quickly adapting to new technologies and environments.' },
    { icon: 'Palette', title: 'Creative', text: 'Bringing creative solutions to technical challenges.' },
]

export const EXPERIENCE = {
    role: 'Database Design & Architecture',
    type: 'Freelance engineering role',
    company: 'Khamsat',
    summary:
        'Delivering scalable database architectures and high-performance data solutions for a real-world freelance platform.',
    steps: [
        { icon: 'GitMerge', title: 'ERD Modeling', text: 'Architected a comprehensive Entity Relationship Diagram (ERD) to map complex freelance platform workflows.' },
        { icon: 'Database', title: 'Schema Implementation', text: 'Developed and optimized a relational database schema using SQL Server based on the ERD.' },
        { icon: 'ShieldCheck', title: 'Data Integrity', text: 'Applied normalization (1NF, 2NF, 3NF) and constraints to ensure data consistency.' },
        { icon: 'Gauge', title: 'Performance Tuning', text: 'Wrote efficient T-SQL queries and stored procedures for high-volume data operations.' },
    ],
    tags: ['SQL Server', 'ERD Modeling', 'T-SQL', 'Normalization (1NF–3NF)', 'Stored Procedures', 'Relational Schema'],
}

export const PROJECTS = [
    {
        id: 'hypermarket',
        title: 'Hyper Market E-Commerce Platform',
        category: 'Full-Stack .NET',
        description:
            'Full-featured enterprise e-commerce platform for supermarket operations, streamlining product catalogs, cart workflows, Stripe payments, and order fulfillment.',
        repo: 'https://github.com/Azamsherif/Hyper_Market',
        demo: '',
        technologies: ['ASP.NET Core (.NET 8)', 'Entity Framework Core', 'SQL Server', 'Stripe API', 'Bootstrap', 'JavaScript', 'Razor Views', 'xUnit'],
        highlights: [
            'Comprehensive Admin Dashboard: Intuitive management for products, categories, coupons, and orders with visual timeline and audit logging.',
            'Secure Payment Integration: Stripe Checkout with automated webhook verification and idempotency handling for safe transactions.',
            'Robust & Scalable Architecture: Clean MVC architecture and SOLID principles with background task queues (IHostedService) for async email/SMS notifications.',
            'Data Integrity & Security: Protected inventory via optimistic concurrency (RowVersion), rate limiting on sensitive endpoints, and EF Core optimization.',
            'Tested & Responsive UI: Responsive storefront and admin interfaces built with Razor Views, Bootstrap, and JavaScript, backed by xUnit test suites.',
        ],
    },
    {
        id: 'lms',
        title: 'Learning Management System',
        category: 'Full-Stack .NET',
        description:
            'Enterprise-grade e-learning platform streamlining course management, instructor assignments, student enrollments, and academic progress tracking.',
        repo: 'https://github.com/JinxX404/Learning_Management_System_LMS',
        demo: '',
        technologies: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Bootstrap', 'JavaScript', 'Razor Views'],
        highlights: [
            'Robust admin dashboard with role-based access control (RBAC) and student progress tracking.',
            'Applied Clean MVC Architecture and SOLID principles for high scalability and maintainability.',
            'Optimized high-volume database access using EF Core and LINQ compiled queries.',
            'Responsive, user-centric interfaces using Razor Views, Bootstrap, and JavaScript.',
        ],
    },
    {
        id: 'roasted-co',
        title: 'Roasted & Co. — Artisan Coffee Platform',
        category: 'Frontend & UI/UX',
        description:
            'Luxury, responsive web platform for a specialty coffee roastery and bakery, featuring custom 60fps animations, instant menu search, and interactive booking.',
        repo: 'https://github.com/Azamsherif/Caffee-Sute',
        demo: '',
        technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'IntersectionObserver', 'Responsive Design', 'SVG Graphics', 'UI/UX Motion'],
        highlights: [
            'Multi-page luxury cafe platform with bespoke visual identity and glassmorphic navigation.',
            'Hardware-accelerated scroll animations using native IntersectionObserver with distinct physics.',
            'Instantaneous category filtering and real-time live search without page reload overhead.',
            'Handcrafted scalable SVG illustrations with interactive hover states and mouse-tilt micro-interactions.',
            'Zero external runtime dependencies for maximum loading speed and ultra-fluid 60fps rendering.',
        ],
    },
    {
        id: 'almadina-press',
        title: 'Almadina Printing Press',
        category: 'Full-Stack MERN',
        description:
            'Full-stack commercial web application for a printing press business providing comprehensive business showcase, product catalogs, and administrative management.',
        repo: 'https://github.com/Azamsherif/Al-Madina-Press-frontend',
        demo: '',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Framer Motion', 'REST API'],
        highlights: [
            'Dynamic product portfolio display with interactive image galleries and item details.',
            'Comprehensive admin dashboard for full-lifecycle content and product management (CRUD).',
            'High-performance image upload system with server-side storage and file optimization.',
            'Custom inquiry form seamlessly integrated with backend message management pipeline.',
            'RESTful API architecture built with Express.js and MongoDB Mongoose models.',
        ],
    },
]

export const EDUCATION = [
    {
        degree: 'Full-Stack .NET Development — 6-month Program',
        institution: 'Digital Egypt Pioneers Initiative (DEPI), Ministry of Communications — Assiut Branch',
        period: '06/2025 – 12/2025',
        location: 'Assiut, Egypt',
        kind: 'Intensive technical program',
    },
    {
        degree: 'Bachelor of Computer Science',
        institution: 'Arab Open University (AOU)',
        period: '2019 – 2023',
        location: 'Cairo, Egypt',
        kind: 'Academic degree',
    },
]

export const CERTIFICATIONS = [
    { title: 'Full-Stack .NET Development', org: 'Digital Egypt Pioneers Initiative (DEPI)', period: '2025' },
    { title: 'Computer Essentials', org: 'Edraak', period: '2024' },
    { title: 'ICDL', org: 'Edraak', period: '2023 – 2024' },
    { title: 'Introduction to Databases', org: 'Information Technology Institute (ITI)', period: '2022' },
    { title: 'Python Programming Basics', org: 'Udacity', period: '2021' },
]
