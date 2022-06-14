import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://dummyjson.com/products/";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

class ApiService {
 getdata(URL) {
    return ( axiosClient.get(URL)
    .then(res => res)
    .catch(error => console.log(error))
    )
  }
}

export default new ApiService();
