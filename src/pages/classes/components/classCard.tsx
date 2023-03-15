import { Box, LinearProgress, Stack, Typography } from "@mui/material";

const ClassCard = () => {
  return (
    <Stack
      component={"a"}
      href="/classes/className"
      sx={{
        width: "50%",
        height: "176px",
        borderRadius: "12px",
        bgcolor: "white",
        boxShadow: "0px 10px 20px 10px rgba(0, 0, 0, 0.1)",
        textDecoration: "none",
      }}
      direction="row"
      spacing={2}
    >
      <Box
        component="img"
        sx={{
          height: "100%",
          objectFit: "cover",
          width: "25%",
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
        }}
        src="https://picsum.photos/seed/picsum/500/500"
      />
      <Stack sx={{ height: "100%", justifyContent: "center" }} spacing={1}>
        <Typography
          sx={{
            color: "#016FB9",
            fontWeight: 700,
          }}
        >
          Form 3 physics
        </Typography>
        <Stack>
          <Typography variant="body2" color={"black"}>
            Next lesson: Linear motion
          </Typography>
          <Typography variant="body2" sx={{ color: "#0D4C6F" }}>
            2:00pm 22nd March 2023
          </Typography>
        </Stack>
        <Stack>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{ borderRadius: 5 }}
          />
          <Typography variant="body2" color="#7E7E7E">
            Lesson 10/20
          </Typography>
        </Stack>
        <Typography variant="body2" color={"#182825"}>
          13 students
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ClassCard;
