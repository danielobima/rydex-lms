import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import PageComponent from "../../components/pageComponent";

const LoginPage = () => {
  const width = "300px";

  const login = async (creds: CredentialResponse) => {
    try {
      let response = await axios.post("http://localhost:8080/login", creds);

      console.log(response.data);
      alert("success");
    } catch (err) {
      console.log(err);
      alert("something went wrong");
    }
  };
  return (
    <PageComponent
      sx={{
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f1f1f1",
      }}
    >
      <Stack
        sx={{
          borderRadius: "14px",
          boxShadow: "0px 10px 20px 10px rgba(0, 0, 0, 0.1)",
          p: 4,
          bgcolor: "white",
        }}
        spacing={3}
      >
        <Typography>Logo</Typography>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Montserrat", fontWeight: 600, color: "#182825" }}
        >
          Sign in to rydex lms
        </Typography>
        <GoogleLogin
          size="large"
          width={width}
          onSuccess={(response) => {
            login(response);
          }}
          onError={() => console.log("err")}
        />
        <Divider />
        <Stack spacing={2}>
          <TextField size="small" label="Email" type="email" sx={{ width }} />
          <TextField
            size="small"
            label="Password"
            type="password"
            sx={{ width }}
          />
        </Stack>
        <Button variant="contained">Sign in</Button>
      </Stack>
    </PageComponent>
  );
};
export default LoginPage;