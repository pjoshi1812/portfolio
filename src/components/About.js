import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-textSecondary">
                I am currently pursuing my Master of Computer Application (MCA) at MES Institute of Management and Career Courses, with an expected graduation in 2026. I completed my Bachelor of Business Administrator in Computer Application (BBA-CA) from Garware College Of Commerce, Pune, with an impressive CGPA of 9.25 and SGPA of 9.70 (87.5%).
              </p>
              <p className="text-textSecondary">
                My academic journey has equipped me with a strong foundation in both business administration and computer applications, making me a well-rounded professional in the field of technology.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-primary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-textPrimary mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-secondary font-medium">Master of Computer Application (MCA)</h4>
                    <p className="text-textSecondary">MES Institute of Management and Career Courses</p>
                    <p className="text-textSecondary">Expected Graduation: 2026</p>
                  </div>
                  <div>
                    <h4 className="text-secondary font-medium">Bachelor of Business Administrator in Computer Application (BBA-CA)</h4>
                    <p className="text-textSecondary">Garware College Of Commerce, Pune</p>
                    <p className="text-textSecondary">CGPA: 9.25 | SGPA: 9.70 | Percentage: 87.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 