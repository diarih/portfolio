import { Routes, Route  } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import LandingPage from "../pages/LandingPage";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function Routers() {

    return(
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/aboutme" element={<AboutMe />} />
        </Routes>
    )
}