import {
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import PageComponent from "../../components/pageComponent";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const Assignments = () => {
  const details = {
    title: "Linear motion assignment",
    date: "Due: 1st March 2023",
    body: "20/25 Students submitted",
  };

  const { title, date, body } = details;
  return (
    <PageComponent>
      <Typography variant="h4" color="#182825">
        Assignments
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={4} direction="row">
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          label="Search classes"
          variant="filled"
          sx={{ width: "350px" }}
        />

        <Button variant="outlined" startIcon={<AddCircleOutlineOutlinedIcon />}>
          create a new Assignment
        </Button>
      </Stack>

      <Stack
        sx={{
          borderRadius: "12px",
          bgcolor: "white",
          boxShadow: "0px 10px 20px 10px rgba(0, 0, 0, 0.1)",
          p: 2,
          alignItems: "center",
          width: "784px",
          height: "128px",
          top: "197px",
          left: "0px",
        }}
        spacing={2}
        direction="row"
      >
        <Box sx={{ height: "100%", width: "4px", bgcolor: "#0D4C6F" }} />
        <Stack sx={{ rowGap: "5px" }}>
          <Typography
            sx={{ fontWeight: 700, color: "#016FB9" }}
            className="text-[#016FB9] font-bold"
          >
            {title}
          </Typography>
          <Typography variant="body2" color={"#444444"}>
            {date}
          </Typography>
          <Typography variant="body2" color={"#444444"}>
            {body}
          </Typography>
        </Stack>
      </Stack>
    </PageComponent>
  );
};

export default Assignments;
