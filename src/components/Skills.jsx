import React from 'react';
import tailwindcss from '/tailwindcss.svg';
import python from '/python.svg';
import html from '/html.svg';
import css from '/css.svg';
import react from '/react.svg';
import javascript from '/javascript.svg';
//import imgprofile from '/imgprofile.png';

const skillsData = [
    { id: 1, image: tailwindcss, title: 'Tailwind CSS', description: '' },
    { id: 2, image: python, title: 'Python', description: '' },
    { id: 3, image: html, title: 'HTML', description: '' },
    { id: 4, image: css, title: 'CSS', description: '' },
    { id: 5, image: react, title: 'React', description: '' },
    { id: 6, image: javascript, title: 'JavaScript', description: '' },

];

const SkillBox = ({ image, title, description }) => (
    <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-blue-00 transition-all duration-300'>
        <figure className='flex justify-center mb-4'>
            <img src={image} alt={title} className='h-16 w-16 sm:w-20 sm:h-20' />

        </figure>
        <header>
            <h3 className='text-lg sm:text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
        </header>
        <p className='text-gray-400 text-sm sm:text-base'>{description}</p>

    </article>
)

function Skills() {
    return (
        <section
            id="skills"
            className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
        >

            <div className='absolute z-0 w-72 h-36 sm:w96 sm:h-44 bg-[#64FFDA] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 
transform -translate-x-1/2'></div>


            <div data-aos='fade-up' data-aos-delay='500' className="relative z-20 text-center space-y-6 sm:space-y-10"></div>
            <header className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">
                    My experience <br /> and <span className="text-[#64FFDA]">Skills</span>
                </h1>
                <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
                    As a Computer Science student, I am always wanting to perfect and expand my skills. Here are some of the technologies I have learnt and am currently learning.
                </p>
            </header>

            <section data-aos='fade-up' data-aos-delays='500'
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4">
                {skillsData.map((skill) => (
                    <SkillBox
                        key={skill.id} image={skill.image}
                        title={skill.title}
                        description={skill.description}
                    />
                ))}
            </section>


        </section >
    )
}

export default Skills;