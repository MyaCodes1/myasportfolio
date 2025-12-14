import React from "react";
import Navbar from "./Navbar";
import email from '/email.svg';
import linkedin from '/linkedin.svg';
import github from '/github.svg';
import Mya from '/Mya.pdf';



function Intro() {
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center bg-[#0a192f]'>


            <Navbar />
            <main id="home" className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md: pb-24 md:pt-32 
            pt-24 mt-14 md:mt-0 z-10">


                <section className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"

                    data-aos='fade-up'
                    data-aos-delay='300'
                >
                    <div className="absolute -z-10 w-[500px] h-[500px] sm:w-[580px] sm:h-[580px] bg-[#112240] rounded-full blur-[120px] opacity-25 -top-16 -left-20"></div>


                    <header>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl text-white font-semibold mb-2 sm:mb-3">
                            Mya Dhaliwal
                        </h1>


                    </header>


                    <p className="text-base sm:text-lg md:text-lg text-slate-300 mb-6 font-medium">

                        Final year
                        Bsc Computer Science student
                    </p>
                    <div className="flex items-center space-x-4 mb-6">

                        <a href="https://www.linkedin.com/in/mya-dhaliwal-2679b7312/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="w-11 h-11"></img>
                        </a>

                        <a href="mailto:myakdhaliwal@email.com">

                            <img src={email} alt="Email" className="w-11 h-11"></img>
                        </a>


                        <a href="https://github.com/MyaCodes1" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" className="w-11 h-11"></img>
                        </a>

                    </div>
                    <a href={Mya} download>
                        <button className="inline-flex items-center justify-center text-white border-2 border-white py-2 px-6 rounded-full text-lg hover:bg-[#F9EBF6] hover:text-black hover:shadow-[0_0_40px_#64FFDA] transition">
                            Download My CV
                        </button>
                    </a>


                </section>




            </main>
        </div >
    );
}
export default Intro;