import DestCard from "../../components/DestCard";
import { ReactComponent as Students } from "../../assets/icons/students-color.svg";
import { ReactComponent as Planner } from "../../assets/icons/planner.svg";
import { ReactComponent as Task } from "../../assets/icons/task.svg";
import { IconButton, Stack, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import PageComponent from "../../components/pageComponent";
const ClassPage = () => {
  return (
    <PageComponent>
      <Stack direction={"row"} sx={{ alignItems: "center" }} spacing={1}>
        <IconButton>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">Form 3 physics</Typography>
      </Stack>
      <Stack spacing={4} direction="row">
        <DestCard
          href="/classes/classID/students"
          icon={<Students width={64} height={64} />}
          subtitle="View students in this class"
          text="Students"
        />
        <DestCard
          href="/classes/classID/plan"
          icon={<Planner width={64} height={64} />}
          subtitle="Manage syllabus completion progress"
          text="Lesson plan"
        />
        <DestCard
          href="/classes/classID/assignments"
          icon={<Task width={64} height={64} />}
          subtitle="Create and manage assignments"
          text="Assignments"
        />
      </Stack>
    </PageComponent>
  );
};

export default ClassPage;
