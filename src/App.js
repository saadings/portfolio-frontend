import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App container-fluid">
            <div className={"row"}>
                <div className={"bg-dark"} id={"home"}>
                    <Navbar/>
                    <Body/>
                </div>

            </div>
            <div className={"row"} id={"skills"}>
                <Skills/>
            </div>
            <div className={"row bg-dark"} id={"projects"}>
                <Projects/>
            </div>
            <div className={"row"} id={"about"}>
                <About/>
            </div>
            <div className={"row bg-dark"} id={"contact"}>
                <Contact/>
            </div>

            <div className={"row bg-dark"}>
                <Footer/>
            </div>

        </div>
    );
}

export default App;
