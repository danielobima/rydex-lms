import SideNavButton from "./sideNavButton";
import { ReactComponent as Classroom } from "../assets/icons/classroom-white.svg";
import { ReactComponent as Envelope } from "../assets/icons/envelope-white.svg";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AddTask, CheckBoxOutlined, Home, NoteAltOutlined, Task, TaskOutlined } from "@mui/icons-material";

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        width: "208px",
        height: "calc(100vh - 64px)",
      }}
    >
      <Stack
        sx={{
          position: "fixed",
          top: "64px",
          zIndex: 9,
          left: 0,
          bgcolor: "#0D4C6F",
          width: "208px",
          height: "calc(100vh - 64px)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <SideNavButton
          href="/"
          icon={<Home width={24} height={24} fill="white" />}
        >
          <Typography>Dashboard</Typography>
        </SideNavButton>
        <SideNavButton
          href="/classes"
          icon={<Classroom width={24} height={24} fill="white" />}
        >
          <Typography>Classes</Typography>
        </SideNavButton>
        <SideNavButton
          href="/assignments"
          icon={<NoteAltOutlined width={24} height={24} fill="white" />}
        >
          <Typography>Assignments</Typography>
        </SideNavButton>
        <SideNavButton
          href="/markbook"
          icon={<CheckBoxOutlined width={24} height={24} fill="white" />}
        >
          <Typography>Mark book</Typography>
        </SideNavButton>
        <SideNavButton
          href="/messages"
          icon={<Envelope width={24} height={24} fill="white" />}
        >
          <Typography>Messages</Typography>
        </SideNavButton>
      </Stack>
    </Stack>
  );
};

export default SideNav;
