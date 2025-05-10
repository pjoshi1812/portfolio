import React from 'react';
import profileImg from '../assets/profile.jpg';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10 w-full">
          {/* Profile Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
            <img
              src={profileImg}
              alt="Profile"
              className="w-40 h-70 object-cover  shadow-lg mb-6 md:mb-0"
            />
          </div>
          {/* Intro Text */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-secondary text-lg mb-4">Hi, my name is</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary mb-4">
              Prajakta Joshi
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textSecondary mb-8">
              MCA Student
            </h2>
            <p className="text-textSecondary max-w-2xl mx-auto md:mx-0 text-lg mb-8">
              A motivated and analytical graduate student in Bachelor of Business Administrator in Computer Application (BBA-CA) with a CGPA of 9.25. Eager to learn and apply knowledge of computer languages.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <a
                href="mailto:prajaktajoshi2003@gmail.com"
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-md hover:bg-secondary/10 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-2">
              <a href="mailto:prajaktajoshi2003@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                <EnvelopeIcon className="h-7 w-7 text-secondary hover:text-textPrimary transition-colors" />
              </a>
              <a href="https://github.com/pjoshi1812" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg className="h-7 w-7 text-secondary hover:text-textPrimary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/prajakta-joshi-1a5002285/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg className="h-7 w-7 text-secondary hover:text-textPrimary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.28h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 