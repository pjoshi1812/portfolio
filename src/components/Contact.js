import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Email',
      value: 'prajaktajoshi2003@gmail.com',
      link: 'mailto:prajaktajoshi2003@gmail.com'
    },
    {
      title: 'Phone',
      value: '9657236189',
      link: 'tel:9657236189'
    },
    {
      title: 'Location',
      value: '1730 Sadashiv Peth, Pune 30',
      link: 'https://maps.google.com/?q=1730+Sadashiv+Peth,+Pune+30'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-textSecondary max-w-2xl mx-auto mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary p-6 rounded-lg hover:bg-opacity-80 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-textPrimary mb-2">{info.title}</h3>
                <p className="text-textSecondary">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 