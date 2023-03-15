import { Avatar, Box, Stack, Typography } from "@mui/material";
import PageComponent from "../../components/pageComponent";
import stringToColor from "../../utils/stringToColor";
import ChatBox from "./components/chatBox";
import ChatCard from "./components/chatCard";

const MessagesPage = () => {
  return (
    <PageComponent>
      <Stack direction={"row"} spacing={4} sx={{ height: "100%" }}>
        <Stack spacing={3}>
          <Typography variant="h5">Chats</Typography>
          <Stack>
            <ChatCard
              avatar={
                <Avatar
                  sx={{
                    bgcolor: stringToColor("X"),
                    width: "40px",
                    height: "40px",
                  }}
                >
                  X
                </Avatar>
              }
              date="23/02"
              displayName="Xin Yue"
              lastMessage="Okay no problem"
              selected={true}
            />
          </Stack>
        </Stack>
        <Box sx={{ height: "100%", bgcolor: "black", width: "1px" }} />

        <Stack sx={{ width: "100%", height: "100%" }}>
          <ChatBox />
        </Stack>
      </Stack>
    </PageComponent>
  );
};
export default MessagesPage;
