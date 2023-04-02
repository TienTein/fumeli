import axios from "axios";

const useAuth = () => {
  const signin = async ({ username, password }) => {
    try {
      const params = new URLSearchParams();
      params.append("Username", username);
      params.append("Password", password);
      params.append("grant_type", password);
      const res = axios.post(
        "https://api-demowebsite.cdktcnqn.edu.vn/api/oauth/token",
        params
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const signout = async () => {};

  return { signin, signout };
};

export default useAuth;
