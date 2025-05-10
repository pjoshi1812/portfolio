import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'PG Rental System',
      description: 'Created a web platform for property owners to list PG rooms and for tenants to express interest.',
      technologies: ['HTML', 'CSS', 'Python', 'Django', 'SQLite'],
      features: [
        'Property listing and management',
        'Tenant interest tracking',
        'User authentication',
        'Responsive design'
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Academic Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 