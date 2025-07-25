import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Chatting Application Website - BridgeTalk",
      description: "A real-time messaging platform built with React and Firebase, supporting user authentication, message synchronization, emoji integration, and an intuitive UI for seamless communication.",
      technologies: ["ReactJS", "Firebase"],
      features: [
        "Real-time messaging",
        "User authentication",
        "Emoji integration",
        "Intuitive and responsive UI"
      ],
      link: "#" // Replace with actual live link if available
    },
    {
      title: "Jewellery Ecommerce Website: SurvarnaRup",
      description: "A full-stack e-commerce platform for jewellery. Features include user authentication (JWT), role-based access (Admin/Client), product management, cart functionality, and PayPal payment integration.",
      technologies: ["ReactJS", "Tailwind CSS", "Redux", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "PayPal API", "imgBB"],
      features: [
        "JWT-based user authentication & role-based access",
        "Admin: Manage products, categories, and users",
        "Client: Browse, add to cart, and purchase jewellery",
        "PayPal payment integration & secure transactions"
      ],
      link: "https://ecommerce-lilac-eta-50.vercel.app/"
     
    },
    {
      title: "Jewellery Ecommerce Website: SurvarnaRup",
      description: "A full-stack e-commerce platform for jewellery. Features include user authentication (JWT), role-based access (Admin/Client), product management, cart functionality, and PayPal payment integration.",
      technologies: ["ReactJS", "Tailwind CSS", "Redux", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "PayPal API", "imgBB"],
      features: [
        "JWT-based user authentication & role-based access",
        "Admin: Manage products, categories, and users",
        "Client: Browse, add to cart, and purchase jewellery",
        "PayPal payment integration & secure transactions"
      ],
      link: "https://ecommerce-lilac-eta-50.vercel.app/"
     
    },
    {
      title: 'PG Rental System',
      description: 'Created a web platform for property owners to list PG rooms and for tenants to express interest.',
      technologies: ['HTML', 'CSS', 'Python', 'Django', 'SQLite'],
      features: [
        'Property listing and management',
        'Tenant interest tracking',
        'User authentication',
        'Responsive design'
      ],
      github: 'https://github.com/pjoshi1812/NestNavi'
    },
    {
      title: 'Electronic Device Billing System',
      description: 'Developed a billing system with functionalities to add, update, and delete product and customer details.',
      technologies: ['Java', 'Swing', 'MySQL', 'NetBeans IDE'],
      features: [
        'Product management',
        'Customer management',
        'Billing generation',
        'Database integration'
      ],
      github: 'https://github.com/pjoshi1812/BillingSystemJava'
    },
    {
      title: 'Infinity Finance - Bank Loan Management System',
      description: 'Designed an interactive system providing details on various loan types, including an EMI calculator.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Chart.js'],
      features: [
        'Loan type information',
        'EMI calculator',
        'Interactive charts',
        'User-friendly interface'
      ],
      github: 'https://github.com/pjoshi1812/Infinity-Finance'
    },
    {
      title: 'Green Culture Plant Nursery Website',
      description: 'Developed a front-end website showcasing various plant types and workshop details.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Plant catalog',
        'Workshop information',
        'Dynamic content display',
        'Responsive design'
      ],
      github: 'https://github.com/pjoshi1812/GreenCulture'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Academic Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-tertiary p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-textPrimary mb-2">{project.title}</h3>
              <p className="text-textSecondary mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-secondary font-medium mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-secondary font-medium mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-textSecondary">
                  {project.features && project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex gap-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    View Live Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 