import './Projects.css'
import {useState, useEffect} from "react";
import Axios from '../../services/Axios';

const ProjectCards = (props) => {
    return (
        <div className={"col-lg-4 col-md-4 col-sm-8 cards-color rounded-3 cursor-skills px-5 py-5 padding-proj"}>

            <div className={"d-flex justify-content-start font-size-project line-height-skills"}>
                <a>

                    <strong className={"select-proj"}> {props.element.title} </strong>

                </a>
            </div>

            <div className={"d-flex justify-content-start"}>
                <a>
                    {props.element.category}
                </a>
            </div>

            <div className={"d-flex justify-content-start mt-3"}>
                <p className={"text-start line-height-skills select-proj"}>
                    {props.element.bodyText}
                </p>

            </div>

        </div>
    );
}

const Projects = () => {

    const [Projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const URL = "/projects";
                const {data} = await Axios.get(URL);
                setProjects(data);
            } catch (error) {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    this.setError(error.response.data.message);
                }
            }
        })();
    }, [])

    return (
        <>
            <div className={"padding-body-proj"}>

                <div className={"row"}>
                    <div className={"col-12 d-flex justify-content-center"}>
                        <h1 className={"text-white select-skills"}>
                            Projects
                        </h1>
                    </div>
                </div>

                <div className={"row mt-5 d-flex justify-content-center"}>

                    {Projects.map(ProjE => (<ProjectCards element={ProjE}/>))}

                </div>

            </div>
        </>
    );
}

export default Projects;