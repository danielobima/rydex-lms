import { CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import baseUrl from "../baseUrl";

const googleLogin = (creds: CredentialResponse) =>
  new Promise(async (resolve, reject) => {
    {
      try {
        let response = await axios.post(baseUrl + "/login", creds, {
          withCredentials: true,
        });

        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    }
  });

export default googleLogin;
