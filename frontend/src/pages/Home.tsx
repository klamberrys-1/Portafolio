import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import ProjectsGrid from "../components/ProjectsGrid";
import Skills from "../components/Skills";

const Home: React.FC = () => {
    return (
        <main className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-24">
            <Hero />
            <Experience />
            <ProjectsGrid />
            <Skills />
        </main>
    );
};

export default Home;
