import React from "react";

function AboutUs() {
  return (
  <div className="bg-gray-50 dark:bg-black min-h-screen py-16 px-6">

      <div className="max-w-5xl mx-auto"> 
                
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About This Platform
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A modern space where technology news meets community-driven blogs.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 md:p-12">

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
             What this platform is ?
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            This project is a full-stack blog and news platform built using React and Appwrite.
            It combines real-time tech news from external APIs with a community blog system where
            users can create, edit, and manage their own posts.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why it exists
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            The goal is to build a single platform where users can stay updated with global tech
            trends while also sharing their own ideas, knowledge, and experiences in one place.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

            {[
              "React",
              "Tailwind CSS",
              "Appwrite",
              "News API",
              "React Router",
              "Redux",
              "Vite",
              "JavaScript",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-gray-100 dark:bg-zinc-800 text-center py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300"
              >
                {tech}
              </div>
            ))}

          </div>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
            What you can do here
          </h2>

          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
            <li>Read latest tech news from global sources</li>
            <li>Create and publish your own blogs</li>
            <li>Edit and manage your posts anytime</li>
            <li>Explore community-written content</li>
          </ul>

        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            Built with passion to showcase full-stack development skills
          </p>
        </div>

      </div>
    </div>
  );
  
}


export default AboutUs;