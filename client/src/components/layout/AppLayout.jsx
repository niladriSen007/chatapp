
import Title from "../shared/Title";
import Header from "./Header";
import { Grid } from "@mui/material";
import ChatList from "./chatList/ChatList";
import { chats } from "../../utils/sample";
import { useParams } from "react-router-dom";
import Profile from "./profile/Profile";

const AppLayout = (WrappedComponent) => {
  return function AppLayout(props) {

    const {chatId} = useParams()
    

    return (
      <div style={{backgroundColor:"lime"}}>
        <Title />
        <Header />
        <Grid container  className="bg-black min-h-[calc(100vh-4rem)]">
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
            <ChatList chats={chats} chatId={chatId} 
            handleDeleteChat={(e, id, groupChat) => {
              e.preventDefault();
              console.log(id, groupChat);
            }
            }
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} minHeight={"100%"} sx={{
            borderLeft:"3px solid lime",
            borderRight:"3px solid lime"
          }}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid item md={4} lg={3} className="bg-zinc-900"  sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              
            }}>
            <Profile />
          </Grid>
        </Grid>
      </div>
    );
  };
};
export default AppLayout;
