import { AttachFile, SendRounded } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { InputBox } from "../components/styles/styledComponents";

const Chat = () => {
  const containerRef = useRef();

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        margin={"1rem"}
        height={"88%"}
        sx={{
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      ></Stack>
      <form style={{ height: "6%" }}>
        <Stack direction={"row"} spacing={2} sx={{
          border:"2px solid lime",
          margin:"1rem",
          borderRadius:"3rem",
          padding:"8px"
        }}>
          <IconButton>
            <AttachFile sx={{
              color:"lime"
            }} />
          </IconButton>
         <InputBox placeholder="Type messages here..."/>
         <IconButton type="submit" >
            <SendRounded sx={{
              color:"lime"
            }} />
         </IconButton>
        </Stack>
      </form>
    </>
  );
};
export default AppLayout(Chat);
