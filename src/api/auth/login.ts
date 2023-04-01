import { CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import { authUrl } from "../apiUrls";

const googleTeacherLogin = (creds: CredentialResponse) =>
  new Promise(async (resolve, reject) => {
    {
      try {
        console.log(creds);
        let response = await axios.post(authUrl + "/teacher/login", creds, {
          withCredentials: true,
        });

        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    }
  });

export default googleTeacherLogin;
