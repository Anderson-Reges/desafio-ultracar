import axios from "axios";

const api = (method, endpoint ,body) => axios.create({
  baseURL: `./mocks/${endpoint}.json`,
})
  .request({ method, data: body })
  .then(({ status, data }) => ({ status, data }));

export default api;