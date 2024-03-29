import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className={"padding-footer"}>
                <div className={"row d-flex justify-content-lg-center"}>
                    <div className={"col-lg-3  col-12 mb-lg-0 mb-4"}>
                        <div className={"row"}>

                            <div className={"col-12 d-flex justify-content-center justify-content-lg-start"}>
                                <h2 className={"text-color select-skills"}>
                                    Saad
                                </h2>
                            </div>

                            <div className={"col-12 d-flex justify-content-center justify-content-lg-start"}>
                                <a className={"text-light opacity-75 tag-decoration select-skills"}>
                                    MERN Developer
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={"col-lg-2  col-12 mb-lg-0 mb-4"}>
                        <div className={"row"}>

                            <div className={"col-12 d-flex justify-content-center justify-content-lg-start"}>
                                <h5 className={"text-white select-skills"}>
                                    Pages
                                </h5>
                            </div>

                            <div className={"col-12 d-flex justify-content-center justify-content-lg-start"}>
                                <a className={"text-light opacity-75 tag-decoration select-skills"} href={"#home"}>
                                    Home
                                </a>
                            </div>

                            <div className={"col-12 d-flex justify-content-center justify-content-lg-start"}>
                                <a className={"text-light opacity-75 tag-decoration select-skills"} href={"#skills"}>
                                    Skills
                                </a>
                            </div>

                            <div className={"col-12 d-flex justify-content-center justify-content-lg-start"}>
                                <a className={"text-light opacity-75 tag-decoration select-skills"} href={"#projects"}>
                                    Projects
                                </a>
                            </div>

                            <div className={"col-12 d-flex justify-content-center justify-content-lg-start"}>
                                <a className={"text-light opacity-75 tag-decoration select-skills"} href={"#about"}>
                                    About
                                </a>
                            </div>

                            <div className={"col-12 d-flex justify-content-center justify-content-lg-start"}>
                                <a className={"text-light opacity-75 tag-decoration select-skills"} href={"#contact"}>
                                    Contact
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className={"col-lg-2  col-12 mb-lg-0 mb-4"}>
                        <div className={"row"}>

                            <div className={"col-12 d-flex justify-content-center justify-content-lg-start"}>
                                <h5 className={"text-white select-skills"}>
                                    Contact
                                </h5>
                            </div>

                            <div className={"col-12 d-flex justify-content-center justify-content-lg-start"}>
                                <a className={"text-light opacity-75 tag-decoration select-skills"}>
                                    support@saad.com
                                </a>
                            </div>

                            <div className={"col-12 d-flex justify-content-center justify-content-lg-start"}>
                                <a className={"text-light opacity-75 tag-decoration select-skills"}>
                                    Lahore, Pakistan
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className={"col-lg-2  col-12 d-flex justify-content-center justify-content-lg-end"}>
                        <div className={"row"}>

                            <div className={"col-4"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFC300"
                                     className="bi bi-meta cursor-simple logo-grow" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"/>
                                </svg>
                            </div>

                            <div className={"col-4"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFC300"
                                     className="bi bi-linkedin cursor-simple logo-grow" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                </svg>
                            </div>

                            <div className={"col-4"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFC300"
                                     className="bi bi-snapchat cursor-simple logo-grow" viewBox="0 0 16 16">
                                    <path stroke={"#FFC300"} strokeWidth="0.5"
                                          d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047Zm-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082-1.519 0-2.045-.801-2.904-1.084-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338.027.007.054.01.082.011.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"row d-flex justify-content-center background-copy mt-4"}>
                    <div className={"col-lg-9 col-6 py-2"}>
                        <p className={"text-light opacity-50 padding-copy select-skills text-lg-start text-center"}>
                            Copyrights © 2022 Saad by Munaf. All Rights Reserved.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Footer;