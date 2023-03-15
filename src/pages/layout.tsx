import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import SideNav from "../components/sideNav";

const Layout = () => {
  return (
    <Stack sx={{ bgcolor: "#F1F1F1", height: "100vh" }}>
      <NavBar />
      <Stack direction={"row"}>
        <SideNav />
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default Layout;
