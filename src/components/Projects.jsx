import React from "react";
import CISCO from '/CISCO.png';
import ai from '/ai.png';
import bookshop from '/bookshop.png';
import portfolio from '/portfolio.png';


const ProjectCard = ({ image, title, description, link }) => {
    return (
        <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">


            <div className="relative z-10">
                <figure className="relative z-10">
                    <img src={image} alt={title} className="w-full h-48 object-cover transition-transform group-hover:scale-110 transition-transform duration-300" />
                    <a a href={link} target="_blank" rel="noopener noreferrer"
                        className="absolute h-[202px] inset-0 flex items-center justify-center  bg-opacity-50 opacity-0
group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#64ffda] transition">
                            Live preview</button>
                    </a>
                </figure>
                <div className="px-6 py-4">
                    <header>
                        <h3 className="text-white font-bold text-xl nb-2">{title}</h3>
                    </header>
                    <p className="text-gray-400 text-base">{description}</p>

                </div>

            </div>


        </article>
    )
}




function Projects() {



    const listProjects = [

        {
            image: portfolio,
            title: 'Portfolio website',
            description: 'I have designed and developed a personal portfolio using React and Tailwind CSS to showcase my projects and skills. This is in ongoing development alongside my studies, with regular updates and improvements.',
            link: "https://github.com/MyaCodes1/myasportfolio",
        },

        {
            image: CISCO,
            title: 'Network project',
            description: 'I designed a scalable network for a company across offices in two different cities. It included: CIDR addressing, RIP routing, DHCP and SSH authentication',
            link: 'https://github.com/MyaCodes1/networks-portfolio-project'
        },

        {
            image: ai,
            title: 'Ai Pneumonia diagnosis ',
            description: 'In progress: I am creating predictive model to classify pneumonia from clinical features using Python and scikit-learn, applying best-practice ML workflows. ',
            link: '',
        },

        {
            image: bookshop,
            title: 'Bookshop website',
            description: 'I designed and developed a responsive e-commerce website using HTML, CSS and JavaScript. I implemented a JavasScript based form validationand RESTful simultation to enhance interactivity.',
            link: "https://github.com/MyaCodes1/Bookshop-project",
        },

    ]
    return (
        <main id="projects" className="p-4">
            <section data-aos='fade-up' data-aos-delay='300'>
                <header className="text-center">
                    <h1 className="text-3xl sm:text-4xl text-white font-bold mb-6 ">
                        My <span className="text-[#64FFDA]">Projects</span>


                    </h1>
                    <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
                        Here is some of my work!
                    </p>
                </header>
                <section data-aos='fade-up' data-aos-delay='500' className="flex flex-wrap justify-center gap-4 mt-6">

                    {listProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
                </section>
            </section>

        </main>
    );
}


export default Projects;