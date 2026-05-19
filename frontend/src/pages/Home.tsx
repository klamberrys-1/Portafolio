import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import ProjectsGrid from "../components/ProjectsGrid";
import Skills from "../components/Skills";

const Home: React.FC = () => {
    return (
        <main className="max-w-6xl mx-auto px-6 py-16 text-gray-100">
            <Hero />
            <Experience />
            <ProjectsGrid />
            <Skills />
        </main>
    );
};

export default Home;