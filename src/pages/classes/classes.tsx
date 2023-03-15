import ClassCard from "./components/classCard";
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import PageComponent from "../../components/pageComponent";
const Classes = () => {
  return (
    <PageComponent>
      <Typography variant="h4" color="#182825">
        Classes
      </Typography>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        label="Search classes"
        sx={{ width: "350px" }}
      />
      <Stack sx={{ width: "100%" }} spacing={4} direction="row">
        <ClassCard />
        <ClassCard />
      </Stack>
    </PageComponent>
  );
};

export default Classes;
