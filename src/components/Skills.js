import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'PHP', 'JavaScript', 'R-Programming']
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Angular', 'MERN Stack']
    },
    {
      title: 'Frameworks',
      skills: ['PHP CodeIgniter', 'Django']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'Oracle', 'SQL Server', 'SQLite', 'Express']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Big Data', 'Cyber Security', 'Software Engineering', 'OOSE']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-tertiary p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-textPrimary mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 