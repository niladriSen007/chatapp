
import Title from "../shared/Title";
import Header from "./Header";
import { Grid } from "@mui/material";
import ChatList from "./chatList/ChatList";
import { chats } from "../../utils/sample";

const AppLayout = (WrappedComponent) => {
  return function AppLayout(props) {
    return (
      <div className=" bg-zinc-800">
        <Title />
        <Header />
        <Grid container  className="bg-black max-h-[calc(100vh-4rem)]">
          <Grid
          // height={"100%"}
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            className=" max-h-[calc(100vh-4rem)] overflow-y-auto  bg-zinc-900"
          >
            <ChatList chats={chats} chatId={"1"} />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid item md={4} lg={3} className="bg-zinc-900"  sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              
            }}>
            Third
          </Grid>
        </Grid>
      </div>
    );
  };
};
export default AppLayout;
