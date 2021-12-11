import { Routes, Route  } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import LandingPage from "../pages/LandingPage";
import Projects from "../pages/Projects";
import Tools from "../pages/Tools";

export default function Routers() {

    return(
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/tools" element={<Tools />} />
            <Route exact path="/aboutme" element={<AboutMe />} />
        </Routes>
    )
}