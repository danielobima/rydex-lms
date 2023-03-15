import { Stack, Typography } from "@mui/material";
import { FC } from "react";

interface PropsInterface {
  message: string;
  date: string;
}

interface Props1 extends PropsInterface {
  /**Whether the user is the one who sent this message */
  isSent: true;
  displayName?: string;
}

interface Props2 extends PropsInterface {
  isSent: false;
  displayName: string;
}
const MessageBox: FC<Props1 | Props2> = ({
  date,
  isSent,
  message,
  displayName,
}) => {
  return (
    <Stack
      spacing={1}
      sx={{
        borderRadius: "12px",
        px: 2,
        py: 1,
        width: "fit-content",
        ...(isSent
          ? {
              bgcolor: "#E9F7FB",
              alignSelf: "end",
            }
          : { bgcolor: "#22AED1", alignSelf: "start" }),
      }}
    >
      <Stack
        sx={{
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
        direction="row"
        spacing={1}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: isSent ? "#016FB9" : "white",
          }}
        >
          {isSent ? "You" : <>{displayName}</>}
        </Typography>
        <Typography
          sx={{
            color: isSent ? "#016FB9" : "white",
          }}
          variant="body2"
        >
          {date}
        </Typography>
      </Stack>
      <Typography
        sx={{
          color: isSent ? "black" : "white",
        }}
        variant="body2"
      >
        {message}
      </Typography>
    </Stack>
  );
};

export default MessageBox;
