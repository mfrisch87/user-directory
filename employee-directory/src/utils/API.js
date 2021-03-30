import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

const API = {
  getEmployees: query => {
    return axios.get(BASEURL + `?results=${query}`);
  },
};

export default API