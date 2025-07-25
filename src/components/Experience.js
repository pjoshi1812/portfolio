import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'PHP Developer Intern',
      company: 'Salesqueen Software Solutions',
      period: 'Jun 2024 - Sep 2024',
      location: 'Pune',
      responsibilities: [
        'Completed a PHP backend development internship and earned a certificate.',
        'Designed and developed backend systems for various projects using the PHP CodeIgniter framework.',
        'Worked on CRUD functionality to manage data efficiently.',
        'Gained expertise in AJAX, jQuery, and data validation.'
      ],
      certificate: 'https://www.linkedin.com/in/prajakta-joshi-1a5002285/overlay/1726149824707/single-media-viewer/?profileId=ACoAAEU73o0BTpJhGC7ncUaX--rHA7Jl_J3QeDM'
    },
    {
      title: 'Website Development Internship',
      company: 'Virtual Vigilantes',
      period: 'Nov 2022 - Dec 2022',
      location: 'Pune',
      responsibilities: [
        'Completed a project-based internship for one month.',
        'Designed and developed two websites based on assigned tasks.',
        'Successfully completed the internship and received a certification.'
      ],
      certificate: 'https://www.linkedin.com/in/prajakta-joshi-1a5002285/overlay/1726148262485/single-media-viewer/?profileId=ACoAAEU73o0BTpJhGC7ncUaX--rHA7Jl_J3QeDM'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="bg-primary p-6 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-textPrimary">{exp.title}</h3>
                  <p className="text-secondary">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-textSecondary">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-textSecondary">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
              {exp.certificate && (
                <div className="mt-4">
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 