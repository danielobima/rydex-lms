import axios from "axios";
import baseUrl from "../baseUrl";

export type UserDetails = {
  user_id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  user_type?: string;
  picture?: string;
};

type response = {
  loggedIn: boolean;
  user: UserDetails;
};
const checkAuth = () =>
  new Promise<response>(async (resolve, reject) => {
    try {
      let response = await axios.get<response>(`${baseUrl}/checkToken`, {
        withCredentials: true,
      });
      console.log(response.data);
      resolve(response.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export default checkAuth;
