import { useState } from "react";
import Header from "../layout/Header.js";
import Photos from '../sections/Photos.js';
import Hero from "../sections/Hero.js";
import HeroFooter from "../layout/HeroFooter.js";
import Projects from "../sections/Projects.js";
import Skills from "../sections/Skills.js";
import Footer from "../layout/Footer.js";

const Home = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className="w-full text-base-content">
            <div id="home"></div>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex flex-col h-[calc(100vh-45px)] md:h-[calc(100vh-63px)] lg:h-[calc(100vh-67px)] mx-auto items-center justify-center">
                <Hero darkMode={darkMode}/>
                <HeroFooter />
            </div>
            {darkMode ? (
                <>
                    <Projects />
                    <Skills />
                </>
            ) : (
                <div id="photos" className="w-full p-20 flex justify-center items-center">
                    <div className="w-full max-w-7xl">
                        <Photos />
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Home;