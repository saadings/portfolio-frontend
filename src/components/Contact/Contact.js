import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className={"padding-contact"}>
                <div className={"row"}>
                    <div className={"col-12 d-flex justify-content-center mb-5"}>
                        <h1 className={"text-white select-skills"}>
                            Contact
                        </h1>
                    </div>
                </div>
                <div className={"row d-flex justify-content-center "}>
                    <div className={"col-lg-4 col-md-12 col-12 col-auto mb-4 mb-lg-0 "}>
                        <p className={"text-light text-opacity-75 select-skills text-center text-lg-start"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, eius enim est
                            excepturi laboriosam minus placeat provident quae qui, quia quisquam quo reiciendis, rem
                            ullam voluptas. Culpa dolore est nemo.
                        </p>

                        <p className={"text-light text-opacity-75 select-skills text-center text-lg-start"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, eius enim est
                            excepturi laboriosam placeat provident quae qui, quia quisquam quo.
                        </p>
                    </div>

                    <div className={"col-lg-1 d-flex justify-content-center "}>
                        <div className={"vr bg-white d-none d-lg-block opacity-50 line-width"}/>
                    </div>

                    <div className={"col-lg-4 col-md-12 col-12 col-auto "}>
                        <input type={"text"} className={"input-group form-control rounded-3 input-background select-proj ps-3 "}
                               placeholder={"Name"}/>
                        <input type={"text"} className={"input-group form-control rounded-3 input-background select-proj ps-3 mt-3"}
                               placeholder={"Email"}/>

                        <div className={"input-group mt-3 rounded-3"}>
                            <textarea className={"form-control input-background select-proj text-dark message-size"} aria-label="With textarea" placeholder={"Message"}/>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;