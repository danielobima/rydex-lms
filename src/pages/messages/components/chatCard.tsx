import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  avatar: React.ReactNode;
  displayName: string;
  lastMessage: string;
  selected: boolean;
  date: string;
};
const ChatCard: FC<Props> = ({
  avatar,
  date,
  displayName,
  lastMessage,
  selected,
}) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        borderRadius: "12px",
        bgcolor: "white",
        justifyContent: "space-between",
        boxShadow: "0px 10px 20px 10px rgba(0, 0, 0, 0.1)",
        p: 2,
        alignItems: "center",
        width: "256px",
      }}
      spacing={2}
    >
      <Stack direction={"row"} spacing={1} sx={{ alignItems: "center" }}>
        {avatar}
        <Stack>
          <Typography sx={{ fontWeight: 700, color: "#016FB9" }}>
            {displayName}
          </Typography>
          <Typography sx={{ color: "#aaa" }} variant="body2">
            {lastMessage}
          </Typography>
        </Stack>
      </Stack>
      {selected ? (
        <Box sx={{ height: "24px", width: "2px", bgcolor: "#0D4C6F" }} />
      ) : (
        <Typography sx={{ color: "#aaa" }} variant="body2">
          {date}
        </Typography>
      )}
    </Stack>
  );
};
export default ChatCard;
