import DashboardIconCard from "./componennts/dashboardIconCard";
import { ReactComponent as Classroom } from "../../assets/icons/classroom-color.svg";
import { ReactComponent as Envelope } from "../../assets/icons/envelope-color.svg";
import { ReactComponent as TestPassed } from "../../assets/icons/planner.svg";
import { ReactComponent as Task } from "../../assets/icons/task.svg";
import Announcement from "./componennts/announcement";
import { Box, Stack, Typography } from "@mui/material";
import PageComponent from "../../components/pageComponent";
const Index = () => {
  const modules: AppModule[] = [
    {
      name: "Classes",
      href: "/classes",
      id: "classes",
    },
    {
      name: "Messages",
      href: "/messages",
      id: "messages",
    },
    {
    name: "Assignments",
      href: "/assignments",
      id: "Assignments",
    },
    {
    name: "Mark book",
      href: "/markbook",
      id: "markbook",
    },
  ];

  const announcements = [
    {
      title: "Announcement",
      body: "This is a sample message. The platform will include a medium of communication to aid in sending and receiving of official communication within the school.",
    },
  ];

  const icons: { [id: string]: React.ReactNode } = {
    classes: <Classroom width={64} height={64} />,
    messages: <Envelope width={64} height={64} />,
    markbook: <TestPassed width={64} height={64} />,
    Assignments: <Task width={64} height={64} />
  };

  return (
    <PageComponent>
      <Typography variant="h4" sx={{ color: "#182825" }}>
        Dashboard
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={4} direction="row">
        <Stack sx={{ width: "50%", maxWidth: "512px" }} spacing={2}>
          <Typography sx={{ fontWeight: 700, color: "#0D4C6F" }}>
            Quick access
          </Typography>
          <Stack direction="row" sx={{ flexWrap: "wrap", width: "100%" }}>
            {modules.map((mod) => (
              <Box sx={{ width: "33.33%", mb: 2 }} key={mod.id}>
                <DashboardIconCard
                  href={mod.href}
                  icon={icons[mod.id]}
                  text={mod.name}
                />
              </Box>
            ))}
          </Stack>
        </Stack>
        <Stack sx={{ width: "50%", maxWidth: "576px" }} spacing={2}>
          <Typography sx={{ fontWeight: 700, color: "#0D4C6F" }}>
            Announcements
          </Typography>
          {announcements.map((val, index) => (
            <Announcement {...val} key={"announcement-" + index} />
          ))}
        </Stack>
      </Stack>
    </PageComponent>
  );
};

export default Index;
