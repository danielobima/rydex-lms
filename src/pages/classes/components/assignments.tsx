import PageComponent from "../../../components/pageComponent";
import { ArrowBack, Search } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export default function assignments() {
  const sortMe = [
    { value: "Newest", label: "Newest" },
    { value: "Recent", label: "Recent" },
    { value: "Popular", label: "Popular" },
  ];

  const details = {
    title: "Linear motion assignment",
    date: "Due: 1st March 2023",
    body: "20/25 Students submitted"
  };
  const {title, date, body} = details

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
            Assignments
          </Typography>
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineOutlinedIcon />}
          >
            create a new Assignment
          </Button>

          <Stack direction={"row"} sx={{marginBottom: '19px'}} spacing={10}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              label="Search assignments"
              sx={{ width: "303px" }}
              variant="filled"
            />

            <TextField
              id="outlined-select-currency"
              select
              variant="filled"
              sx={{ width: "220px" }}
              label="Sort by"
              defaultValue="Newest"
            >
              {sortMe.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          <Stack
            sx={{
              borderRadius: "12px",
              bgcolor: "white",
              boxShadow: "0px 10px 20px 10px rgba(0, 0, 0, 0.1)",
              p: 2,
              alignItems: 'center',              
              width: '784px',
              height: '128px',
              top: '197px',
              left: '0px'
            }}
            spacing={2}
            direction="row"
          >
            <Box sx={{ height: "100%", width: "4px", bgcolor: "#0D4C6F" }} />
            <Stack sx={{rowGap: '5px'}}>
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
        </Stack>
      </Stack>
    </PageComponent>
  );
}
