import React from 'react';
import Image from 'next/image';

const Projects = () => {
    const projects = [
        { id: 1, image: '/Screenshot 2024-05-17 223520.png', title: 'Generative', description: "Generative is a collaborative workspace platform designed to facilitate seamless collaboration, document creation, and content publishing. Powered by Next.js, React, and Node.js Express, it offers robust features for teams to work together effectively and efficiently." },
        { id: 2, image: '/Screenshot 2024-05-17 224241.png', title: 'Fit-tone', description: "Developed and maintained Fit-Tone, a comprehensive fitness tracker application enabling users to monitor their fitness progress and achieve their health objectives effectively." },
        { id: 3, image: '/Screenshot 2024-05-17 224104.png', title: 'ClassicSoul', description: "ClassicSoul is an e-commerce website designed to offer a seamless shopping experience for users interested in modern fashion and accessories. The platform provides a wide range of products and features to meet the needs of fashion enthusiasts." },
        { id: 4, image: '/Screenshot 2024-05-18 093306.png', title: 'Netflix-Clone', description: "Netflix-Clone is a streaming platform that has the functionalities of Netflix, allowing users to browse, and manage their favorite movies and TV shows. Built with React and Firebase, it provides an engaging and user-friendly interface for a seamless streaming experience." },
        { id: 5, image: '', title: 'Anniyan', description: "Anniyan is a platform for real-time chat with people online. Built with Next.js, it provides an engaging and user-friendly interface for a seamless streaming experience." }
    ];

    return (
        <div>
            <div className="flex justify-center bg-black">
                <hr className="border-blue-500 w-3/4 border-2" />
            </div>
            <div className="py-16 bg-black">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white mb-8">
                        My Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:font-bold"
                            >
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <div className="relative h-48">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition duration-300 transform hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-4 transition duration-300 hover:text-bold">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 transition duration-300 hover:font-extrabold">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 transition duration-300 hover:text-bold ">{project.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
