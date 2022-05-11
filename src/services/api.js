import axios from "axios";

const api = axios.create({
    baseURL: "https://my-json-server.typicode.com/leonardoklinger/json-server/"
})

export default api