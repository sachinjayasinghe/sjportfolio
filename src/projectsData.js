const projectsData = [
  {
    id: 1,
    title: "Hotel Management System (Group Project) – Restaurant POS Module",
    shortDescription: "University of Moratuwa | Second year software project | Assigned by 99x",
    fullDescription: "Hotel Management System (HMS) is a full-stack software solution developed as a second-year group project to automate hotel operations. It integrates reception, restaurant, kitchen, and owner management into a single platform, enabling efficient reservations, order processing, billing, inventory control, and real-time operational insights. I was responsible for developing the Restaurant Module, which includes the POS system, Inventory Management, Billing, Invoices, Dashboard, and Analytics sections.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubLink: "https://github.com/yourusername/ecommerce-project",
    
    images: [
      "https://via.placeholder.com/800x500/00ff88/ffffff?text=E-Commerce+Home",
      "https://via.placeholder.com/800x500/ff0080/ffffff?text=Product+Page",
      "https://via.placeholder.com/800x500/00ff88/ffffff?text=Shopping+Cart",
      "https://via.placeholder.com/800x500/ff0080/ffffff?text=Checkout",
      "https://via.placeholder.com/800x500/00ff88/ffffff?text=Admin+Dashboard"
    ],
    features: [
      "POS interface to manage dine-in and takeaway orders with payment options (cash, card, or guest billing).",
      "Integrating order flow between the restaurant and kitchen departments.",
      "Category and subcategory management for food items.",
      "Inventory tracking with stock alerts.",
      "Dashboard for viewing completed and pending orders.",
      "Dashboard with revenue analytics and sales."
      
    ]
  },
  {
    id: 2,
    title: "BeeWise – Smart Beehive Monitoring System (Group Project)",
    shortDescription: "University of Moratuwa | First-year Microcontroller-based project.",
    fullDescription: "BeeWise is an IoT-based smart beehive monitoring system that provides real-time data on hive temperature, humidity, weight, and air quality. It automates feeding during nectar shortages and includes a web dashboard for remote monitoring, helping beekeepers improve productivity while supporting sustainable and healthy bee colonies. I implemented the automated sugar feeding system using a mini water pump and designed the full circuit in EasyEDA, enabling reliable hardware connections and automatic feeding during low nectar conditions.",
    tags: ["IoT", "ESP32", "EasyEDA",],
    githubLink: "https://github.com/yourusername/task-manager",
    
    images: [
      "https://via.placeholder.com/800x500/00ff88/ffffff?text=Dashboard",
      "https://via.placeholder.com/800x500/ff0080/ffffff?text=Task+Board",
      "https://via.placeholder.com/800x500/00ff88/ffffff?text=Drag+and+Drop",
      "https://via.placeholder.com/800x500/ff0080/ffffff?text=Team+View",
      "https://via.placeholder.com/800x500/00ff88/ffffff?text=Notifications"
    ],
    features: [
      "Designed the complete hardware circuit using EasyEDA for sensor integration and system reliability",
      
      "Implemented the automated sugar feeding mechanism using a mini water pump controlled by the ESP32",
      
    ]
  },
  {
    id: 3,
    title: "Role-Based Task Management System (Individual Project)",
    shortDescription: "Task management system with role-based authentication where admins assign tasks and users update their status.",
    fullDescription: "Full-stack role-based task management system built with MERN stack. Features JWT authentication with separate admin and user dashboards. Admins can create, assign, edit, and delete tasks while managing users. Users can view assigned tasks and update their status. Clean, responsive UI with purple-themed design and real-time updates.",
    tags: ["React", "Node.js", "MongoDB", "Express", ],
    githubLink: "https://github.com/yourusername/social-dashboard",
    liveLink: "https://your-social-dashboard-demo.com",
    images: [
      "https://via.placeholder.com/800x500/00ff88/ffffff?text=Dashboard+Overview",
      "https://via.placeholder.com/800x500/ff0080/ffffff?text=Analytics+Charts",
      "https://via.placeholder.com/800x500/00ff88/ffffff?text=Engagement+Metrics",
      "https://via.placeholder.com/800x500/ff0080/ffffff?text=Growth+Trends",
      "https://via.placeholder.com/800x500/00ff88/ffffff?text=Export+Reports"
    ],
    features: [
      "JWT-based authentication with role-based access control (Admin/User).",
      "Create, assign, edit, and delete tasks with user assignment.",
      "Filter tasks by user and status with pagination.",
      "User management with validation.",
      "Dashboard with analytics.",
      "Responsive UI with Tailwind CSS and toast notifications."
    ]
  }
];

export default projectsData;