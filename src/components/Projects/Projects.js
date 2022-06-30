import './Projects.css'

const ProjectCards = (props) => {

    return (
        <div className={"col-lg-4 col-md-4 col-sm-8 cards-color rounded-3 cursor-skills px-5 py-5 padding-proj"}>

            <div className={"d-flex justify-content-start font-size-project line-height-skills"}>
                <a>

                    <strong className={"select-proj"}> {props.element.Title} </strong>

                </a>
            </div>

            <div className={"d-flex justify-content-start"}>
                <a>
                    {props.element.Field}
                </a>
            </div>

            <div className={"d-flex justify-content-start mt-3"}>
                <p className={"text-start line-height-skills select-proj"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus repellendus
                    sequi vitae! Eos laboriosam minima quae quos. Beatae dicta dolorem enim, et, fugiat
                    labore laboriosam libero, officiis perferendis placeat sit?
                </p>

            </div>

        </div>
    );
}

const Projects = () => {

    const ProjectList = [
        {"Title": "Face Detection", "Field": "Deep Learning"},
        {"Title": "Object Classification", "Field": "Machine Learning"},
        {"Title": "Data Mining", "Field": "Scrapy"},
        {"Title": "Hotel Management", "Field": "MERN"},
    ]

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

                    {ProjectList.map(ProjE => (<ProjectCards element={ProjE}/>))}

                </div>

            </div>
        </>
    );
}

export default Projects;