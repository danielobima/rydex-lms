import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./context/authContext";
import AppRoutes from "./routes";

//signInCallBack
function App() {
  let theme = createTheme({
    typography: {
      fontFamily: "Inter",
    },
  });

  theme = responsiveFontSizes(theme);
  return (
    <GoogleOAuthProvider clientId="250655552158-4kf9cp5poe7ha9h6g88pna6ra1bt80p1.apps.googleusercontent.com">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

//https://tanpure-anjali.medium.com/pwa-web-push-notifications-overview-implementation-6539cd9530ed

export default App;
