import { Box, Stack, Typography } from "@mui/material";
type Props = {
  title: string;
  body: string;
};
const Announcement: React.FC<Props> = ({ title, body }) => {
  return (
    <Stack
      sx={{
        borderRadius: "12px",
        bgcolor: "white",
        boxShadow: "0px 10px 20px 10px rgba(0, 0, 0, 0.1)",
        p: 2,
      }}
      spacing={2}
      direction="row"
    >
      <Box sx={{ height: "100%", width: "4px", bgcolor: "#0D4C6F" }} />
      <Stack>
        <Typography
          sx={{ fontWeight: 700, color: "#016FB9" }}
          className="text-[#016FB9] font-bold"
        >
          {title}
        </Typography>
        <Typography variant="body2" color={"#444444"}>
          {body}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Announcement;
