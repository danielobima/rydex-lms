import PageComponent from "../../../components/pageComponent";
import { ArrowBack } from "@mui/icons-material";
import {
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function lessonPlan() {

  return (
    <PageComponent>
      <Stack direction={"row"} spacing={1}>
        <Stack>
          <IconButton href="/classes/className">
            <ArrowBack />
          </IconButton>
        </Stack>
        <Stack
          direction={"column"}
          sx={{ alignItems: "start", rowGap: "10px" }}
        >
          <Typography variant="h5">Form 3 Physics</Typography>
          <Typography
            sx={{
              color: "#016FB9",
              fontWeight: 700,
              //   border: "2px solid red",
              width: "100px",
              //   marginLeft: '25px'
            }}
          >
            Lesson plan
          </Typography>
          </Stack>
      </Stack>
    </PageComponent>
  );
}
