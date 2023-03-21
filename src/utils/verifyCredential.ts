import { OAuth2Client, TokenPayload } from "google-auth-library";
const client = new OAuth2Client(
  "250655552158-4kf9cp5poe7ha9h6g88pna6ra1bt80p1.apps.googleusercontent.com"
);

const verifyCredential = (token: string) =>
  new Promise<TokenPayload>(async (resolve, reject) => {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience:
          "250655552158-4kf9cp5poe7ha9h6g88pna6ra1bt80p1.apps.googleusercontent.com", // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();

      if (payload) {
        resolve(payload);
      } else {
        reject("no payload");
      }
    } catch (err) {
      reject(err);
    }
  });

export default verifyCredential;
