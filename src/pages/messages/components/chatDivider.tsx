import { Divider, Stack, Typography } from "@mui/material";

const ChatDivider = () => {
  return (
    <Stack
      spacing={1}
      sx={{ width: "100%", alignItems: "center" }}
      direction="row"
    >
      <Divider sx={{ flexGrow: 1 }} />
      <Typography variant="body2" color="#aaa">
        Today
      </Typography>
      <Divider sx={{ flexGrow: 1 }} />
    </Stack>
  );
};
export default ChatDivider;
