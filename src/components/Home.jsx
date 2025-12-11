import React from 'react';

function Home() {
    return (
        <aside className="relative overflow-hidden  rounded-lg sm:mx-16 mx-2 sm:py-8">
            <div className="relative z-10 max-w-screen-xl pt-10 sm:py-24 mx-auto sm:px-6">
                <div className="max-w-xl sm:mt-1 mt-20 space-y-8 text-center sm:text-right sm:ml-auto pt-48 sm:pt-0">
                    <h2 className="text-6xl pt-5 font-bold sm:text-7xl">
                        Akash Chaursiya 
                        <span className="hidden sm:block p-2 text-4xl sm:text-4xl">Frontend Developer (Fresher)</span>
                    </h2>
                    <a
                        className="inline-flex items-center px-6 py-3 font-medium bg-transparent border border-[#C0A062] text-[#C0A062] ml-4 rounded-lg transition duration-200 hover:bg-[#C0A062] hover:text-white hover:border-[#C0A062]"
                        href="https://drive.google.com/file/d/1ZZ1OO3RYK-Rv6LeVxRZlgHqsFNxY2NBj/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        
                        &nbsp; Download Resume
                    </a>
                </div>
            </div>
            

            <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                <img className="w-96 object-cover m-12 sm:m-14" src="/assets/bg1.png" alt="background" />
            </div>
        </aside>
    );
}

export default Home;
