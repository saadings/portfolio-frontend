import './Skills.css'
import {useState, useEffect} from "react";
import Axios from '../../services/Axios';

const SkillCards = (props) => {
    return (
        props.element.title === "Light Weight" ?
            <div
                className={"col-7 col-sm-6 col-lg-2 col-md-4 cards-color rounded-3 cursor-skills pt-3 pb-3 me-sm-2 mb-sm-5 me-md-4 mb-md-4 me-lg-0 mb-5"}>
                <div className={"row d-flex justify-content-center "}>

                    <img src={props.element.icon} alt={"Controller"} className={"img-size-skills select-proj"}/>

                </div>
                <div className={"d-flex justify-content-center"}>

                    <a>
                        <b>
                            <strong className={"select-proj"}> {props.element.title} </strong>
                        </b>
                    </a>

                </div>
                <div className={"d-flex justify-content-center mt-2"}>

                    <p className={"text-center line-height-skills select-proj"}>
                        {props.element.body}
                    </p>

                </div>
            </div>
            :
            <div
                className={"col-7 col-sm-6 col-lg-2 col-md-4 cards-color rounded-3 cursor-skills pt-3 pb-3 me-sm-2 mb-sm-5 me-md-4 mb-md-4 me-lg-4 mb-5"}>
                <div className={"row d-flex justify-content-center "}>

                    <img src={props.element.icon} alt={"Controller"} className={"img-size-skills select-proj"}/>

                </div>
                <div className={"d-flex justify-content-center"}>

                    <a>
                        <b>
                            <strong className={"select-proj"}> {props.element.title} </strong>
                        </b>
                    </a>

                </div>
                <div className={"d-flex justify-content-center mt-2"}>

                    <p className={"text-center line-height-skills select-proj"}>
                        {props.element.body}
                    </p>

                </div>
            </div>
    );
}

const Skills = () => {
    const [Skills, setSkills] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const URL = "/skills"
                const {data} = await Axios.get(URL);
                console.log(data)
                setSkills(data);
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
            <div className={"background-skills padding-skills"}>
                <div className={"row"}>
                    <div className={"col-12 d-flex justify-content-center"}>
                        <h1 className={"text-white select-skills"}>
                            What I Do
                        </h1>
                    </div>
                </div>

                <div className={"row d-flex justify-content-center mt-5"}>

                    {Skills.map(SkillE => (<SkillCards element={SkillE}/>))}

                </div>

            </div>
        </>
    );
}

export default Skills;