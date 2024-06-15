import React from 'react'
import Skills from './Skills'

function AboutMe() {
    return (
        <>

            <div className="flex justify-center bg-black">
                <hr className="border-blue-500 w-3/4 border-2" />
            </div>

            <div className="py-10 h-screen bg-black">
                <div className="max-w-6xl mx-auto px-4 text-white">
                    <h2 className="text-3xl font-extrabold mb-3 text-center cursor-pointer">
                        <span className='text-blue-400'>About Me</span>
                    </h2>
                    <h3 className="text-2xl font-bold font-sans">Vishakh CS</h3>
                    <h5 className="text-lg font-medium mb-2 text-yellow-300">Full Stack Developer</h5>
                    <p className="text-lg">Passionate and driven full stack developer with a strong foundation in MERN Stack and NextJS. Dedicated to creating dynamic and user-centric web applications. Eager to contribute my expertise in both frontend and backend frameworks, modern UI/UX design, and responsive development to a forward-thinking team,
                        while continuously learning and growing in the ever-evolving world of web development.</p>

                </div>
                <div className='p-10'>
                     <Skills />
                </div>
               
            </div>
        </>
    )
}

export default AboutMe