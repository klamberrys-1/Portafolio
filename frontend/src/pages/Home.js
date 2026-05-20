import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import ProjectsGrid from "../components/ProjectsGrid";
import Skills from "../components/Skills";
const Home = () => {
    return (_jsxs("main", { className: "max-w-6xl mx-auto px-6 py-16 text-gray-100", children: [_jsx(Hero, {}), _jsx(Experience, {}), _jsx(ProjectsGrid, {}), _jsx(Skills, {})] }));
};
export default Home;
