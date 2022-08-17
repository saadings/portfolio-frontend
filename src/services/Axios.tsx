import axios from "axios";

const BASE_URL = "https://saad-portfolio-backend.herokuapp.com";

const Axios = axios.create({
  baseURL: BASE_URL,
});

export default Axios;
