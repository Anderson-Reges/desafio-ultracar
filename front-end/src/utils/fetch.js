import axios from "axios";

const api = (method, endpoint ,body) => axios.create({
  baseURL: `http://localhost:3001/${endpoint}`,
})
  .request({ method, data: body })
  .then(({ status, data }) => ({ status, data }));

export default api;