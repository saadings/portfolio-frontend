import './Skills.css'
import controller from '../../imgs/controller.svg'
import bitcoin from '../../imgs/currency-bitcoin.svg'
import bulb from '../../imgs/lightbulb.svg'
import coding from '../../imgs/code-slash.svg'
import baloon from '../../imgs/balloon-fill.svg'

const SkillCards = (props) => {
    return (
        props.element.Title === "Light Weight" ?
            <div className={"col-7 col-sm-6 col-lg-2 col-md-4 cards-color rounded-3 cursor-skills pt-3 pb-3 me-sm-2 mb-sm-5 me-md-4 mb-md-4 me-lg-0 mb-5"}>
                <div className={"row d-flex justify-content-center "}>

                    <img src={props.element.Icon} alt={"Controller"} className={"img-size-skills select-proj"}/>

                </div>
                <div className={"d-flex justify-content-center"}>

                    <a>
                        <b>
                            <strong className={"select-proj"}> {props.element.Title} </strong>
                        </b>
                    </a>

                </div>
                <div className={"d-flex justify-content-center mt-2"}>

                    <p className={"text-center line-height-skills select-proj"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus repellendus
                        sequi vitae! Eos laboriosam minima quae quos. Beatae dicta dolorem enim, et, fugiat
                        labore laboriosam libero, officiis perferendis placeat sit?
                    </p>

                </div>
            </div>
            :
            <div className={"col-7 col-sm-6 col-lg-2 col-md-4 cards-color rounded-3 cursor-skills pt-3 pb-3 me-sm-2 mb-sm-5 me-md-4 mb-md-4 me-lg-4 mb-5"}>
                <div className={"row d-flex justify-content-center "}>

                    <img src={props.element.Icon} alt={"Controller"} className={"img-size-skills select-proj"}/>

                </div>
                <div className={"d-flex justify-content-center"}>

                    <a>
                        <b>
                            <strong className={"select-proj"}> {props.element.Title} </strong>
                        </b>
                    </a>

                </div>
                <div className={"d-flex justify-content-center mt-2"}>

                    <p className={"text-center line-height-skills select-proj"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus repellendus
                        sequi vitae! Eos laboriosam minima quae quos. Beatae dicta dolorem enim, et, fugiat
                        labore laboriosam libero, officiis perferendis placeat sit?
                    </p>

                </div>
            </div>
    );
}

const Skills = () => {

    const SkillList = [
        {"Title": "Game Development", "Icon": controller},
        {"Title": "Crypto Currency", "Icon": bitcoin},
        {"Title": "Data Analysis", "Icon": bulb},
        {"Title": "Coding", "Icon": coding},
        {"Title": "Light Weight", "Icon": baloon}
    ]

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

                    {SkillList.map(SkillE => (<SkillCards element={SkillE}/>))}

                </div>

            </div>
        </>
    );
}

export default Skills;