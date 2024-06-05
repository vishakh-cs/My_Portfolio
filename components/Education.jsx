import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: 'Brototype',
      degree: 'Full Stack Development (MERN-STACK)',
      graduationYear: '2023 - Present',
    },
    {
      id: 2,
      institution: 'Kerala University',
      degree: 'Bachelor of Science in Computer Science',
      graduationYear: '2020 - 2023',
    },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((education) => (
            <div
              key={education.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="border-l-4 border-blue-500 pl-4 mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {education.graduationYear}
                </h3>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {education.degree}
              </h2>
              <h3 className="text-lg font-medium text-gray-400 mb-4">
                {education.institution}
              </h3>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white">Completed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
