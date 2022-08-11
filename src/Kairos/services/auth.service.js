import axios from "axios";
const API_URL = "https://reqres.in/api/";


class AuthService {
  login(Email, Password) {
    return axios
      .post(API_URL + "login", {
        "email": Email,
        "password": Password
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("KiTapAuth", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
  logout = () => {
    localStorage.removeItem("KiTapAuth");
    window.location.reload()
  };
  
}

export default new AuthService();
