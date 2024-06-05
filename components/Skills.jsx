import Image from 'next/image';
import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { skillsData } from '../components/Skill-Data';
import styles from "../components/SkillModule.css"
import { skillsImage } from '../app/Utils/skills-images';

function Skills() {

    const skillBoxStyle = {
        backgroundColor: '#cbd5e0', // Slate 400 color
        boxShadow: '0px 0px 12px #a0aec0', // Slightly darker shadow
        width: '100px', // Set a fixed width for the skill box
        height: '100px', // Set a fixed height for the skill box
        margin: '0 10px', // Add margin to create a gap between images
        display: 'flex', // Make sure image and text are aligned vertically
        flexDirection: 'column', // Align image and text vertically
        justifyContent: 'center', // Center align vertically
        alignItems: 'center', // Center align horizontally
        'overflow-x': 'hidden',
        
    }

    return (
        <div className={styles.skills} style={{ backgroundColor: '#010101' }}> 
            <div className={styles.skillsHeader}>
                <h2 className='flex justify-center' style={{ color: '#C5C1C1' }}><span className='font-bold text-2xl'>Skills</span></h2> 
            </div>
            <div className={styles.skillsContainer}>
                <div className={styles.skillScroll}>
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className={styles.skillBox} key={id} style={skillBoxStyle}>
                                <Image 
                                    src={skillsImage(skill)} 
                                    alt={skill} 
                                    width={50} // Set a fixed width for the image
                                    height={50} // Set a fixed height for the image
                                />
                                <h3 style={{ color: '#2d3748' }}> 
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills;
