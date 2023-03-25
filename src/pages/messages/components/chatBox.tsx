import { Button, Stack, TextField, Typography } from "@mui/material";
import ChatDivider from "./chatDivider";
import MessageBox from "./messageBox";
import SendIcon from '@mui/icons-material/Send';

const ChatBox = () => {
  return (
    <Stack
      sx={{
        borderRadius: "14px",
        bgcolor: "white",
        boxShadow: "0px 10px 20px 10px rgba(0, 0, 0, 0.1)",
        p: 2,
        width: "100%",
        height: "100%",
      }}
      spacing={4}
    >
      <Typography variant="h5" color={"#182825"}>
        Xin Yue
      </Typography>
      <Stack sx={{ justifyContent: "space-between", height: "100%" }}>
        <Stack sx={{ width: "100%" }} spacing={1}>
          <ChatDivider />
          <MessageBox
            isSent={false}
            displayName="Xin Yue"
            date="24/02/2023"
            message="Hi I have completed the task"
          />
          <MessageBox isSent={true} date="24/02/2023" message="Thanks" />
        </Stack>
        <Stack direction="row">
          <TextField label="Message" sx={{ width: "100%"}} variant="filled"/><Button variant="contained" startIcon={<SendIcon/>} sx={{ width: "20%"}}>Send</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ChatBox;
