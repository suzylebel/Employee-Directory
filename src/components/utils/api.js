import axios from "axios";
const APIKEY = "https://randomuser.me/api/?results=100";



function APIUSER() {
  return axios.get(APIKEY);
}

export default APIUSER;