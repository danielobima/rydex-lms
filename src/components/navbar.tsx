import { Notifications, Settings } from "@mui/icons-material";
import { Avatar, Box, IconButton, Stack } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ height: "64px", width: "100vw" }}>
      <Stack
        sx={{
          position: "fixed",
          zIndex: 10,
          top: 0,
          height: "64px",
          bgcolor: "#182825",
          width: "100vw",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          justifyContent: "space-between",
          px: 5,
          alignItems: "center",
        }}
        direction="row"
      >
        <Stack></Stack>
        <Stack direction={"row"} spacing={3}>
          <Avatar sx={{ width: "40px", height: "40px" }}>DO</Avatar>
          <IconButton>
            <Settings htmlColor="white" />
          </IconButton>
          <IconButton>
            <Notifications htmlColor="white" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};
export default NavBar;
