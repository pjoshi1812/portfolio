import React from 'react';

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
        <div className="flex flex-col items-center">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 