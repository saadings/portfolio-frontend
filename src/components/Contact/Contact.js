import './Contact.css'
import {useState, useEffect} from "react";
import axios from "axios";
import validator from "validator";

const Contact = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [ValidEmail, setValidEmail] = useState(false);
    const [FirstRender, setFR] = useState(false);
    const [Message, setMessage] = useState("");
    const [Body, setBody] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const URL = "http://localhost:3000/contact";
                const {data} = await axios.get(URL);
                setBody(data.body);

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

    const HandleName = (event) => {
        setName(event.target.value);
    }

    const HandleEmail = (event) => {
        setFR(true);
        setEmail(event.target.value);
        validator.isEmail(Email) ? setValidEmail(true) : setValidEmail(false)
    }

    const HandleMessage = (event) => {
        setMessage(event.target.value);
    }

    const HandleSubmit = async (event) => {

        try {
            const URL = "http://localhost:3000/contact";

            const Data = {
                name: Name,
                email: Email,
                message: Message
            }

            const {data} = await axios.post(URL, Data);
            console.log(data);

        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                this.setError(error.response.data.message);
            }
        }
        event.preventDefault();
    }

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
                            {Body}
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
                        <form className={"needs-validation"} onSubmit={HandleSubmit}>
                            <input type={"text"}
                                   className={"input-group form-control rounded-3 input-background select-proj ps-3 "}
                                   placeholder={"Name"} onChange={HandleName} required/>
                            <input type={"text"}
                                   className={"input-group form-control rounded-3 input-background select-proj ps-3 mt-3"}
                                   placeholder={"Email"} onChange={HandleEmail} required/>

                            {FirstRender && (!ValidEmail && <p className={"text-danger pt-2"}>
                                Enter a Valid Email.
                            </p>)}

                            <div className={"input-group mt-3 rounded-3"}>
                                <textarea className={"form-control input-background select-proj text-dark message-size"}
                                          aria-label="With textarea" placeholder={"Message"} onChange={HandleMessage}
                                          required/>
                            </div>

                            {ValidEmail &&
                                <button type={"submit"} className={"form-control btn btn-warning select-proj mt-3"}>
                                    Send
                                </button>}
                        </form>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;