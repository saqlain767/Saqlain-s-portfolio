import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import Header from "./Component/header/Header";
import "./App.css"
import Home from "./Component/home/Home";
import About from "./Component/about/About";
import Skills from "./Component/skills/Skills";
import Services from "./Component/services/Services";
import Qualification from "./Component/qualification/Qualification";
import Work from "./Component/work/Work";
import Testimonials from "./Component/testimonials/Testimonials";
import Contact from "./Component/contact/Contact";
import Footer from "./Component/footer/Footer";
import Scrollup from "./Component/scrollup/Scrollup";


// import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
    
        <Header />
        <main className='main'>
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Work />
            <Testimonials/>
            <Contact />
           
        </main>
        <Footer />
        <Scrollup />
        
    </StrictMode>
);