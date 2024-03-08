import { AttachFile, SendRounded } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { InputBox } from "../components/styles/styledComponents";
import FileMenu from "../components/dialog/FileMenu";
import MemoizedMessageComponent from "../components/message/MessageComponent";

const Chat = () => {
  const containerRef = useRef();

  const fileRef = useRef();

  const sampleMessages = [
    {
        attachments: [
            {
                public_id : "public_id",
                url : "url"
            }
        ] ,
        content : "Hi",
        _id: "id",
        sender : {
            _id : "1",
            name : "username"
        },
        chat : "chat_id",
        createdAt : "date"
    },
    {
        attachments: [
            {
                public_id : "public_id",
                url : "url"
            }
        ] ,
        content : "Hello",
        _id: "id",
        sender : {
            _id : "2",
            name : "John Cena"
        },
        chat : "chat_id",
        createdAt : "date"
    },
    {
        attachments: [
            {
                public_id : "public_id",
                url : "url"
            }
        ] ,
        content : "How are you?",
        _id: "id",
        sender : {
            _id : "2",
            name : "username"
        },
        chat : "chat_id",
        createdAt : "date"
    },
    {
        attachments: [
            {
                public_id : "public_id",
                url : "url"
            }
        ] ,
        content : "I'm fine",
        _id: "id",
        sender : {
            _id : "1",
            name : "username"
        },
        chat : "chat_id",
        createdAt : "date"
    },
    {
        attachments: [
            {
                public_id : "public_id",
                url : "url"
            }
        ] ,
        content : "What are you doing?",
        _id: "id",
        sender : {
            _id : "1",
            name : "username"
        },
        chat : "chat_id",
        createdAt : "date"
    },
    {
        attachments: [
            {
                public_id : "public_id",
                url : "url"
            }
        ] ,
        content : "Nothing much, just chilling. What about you?",
        _id: "id",
        sender : {
            _id : "2",
            name : "username"
        },
        chat : "chat_id",
        createdAt : "date"
    },
    {
        attachments: [
            {
                public_id : "public_id",
                url : "url"
            }
        ] ,
        content : "Gaming",
        _id: "id",
        sender : {
            _id : "1",
            name : "username"
        },
        chat : "chat_id",
        createdAt : "date"
    },
    {
        attachments: [
            {
                public_id : "public_id",
                url : "url"
            }
        ] ,
        content : "ohh",
        _id: "id",
        sender : {
            _id : "2",
            name : "username"
        },
        chat : "chat_id",
        createdAt : "date"
    },
    {
        attachments: [
            {
                public_id : "public_id",
                url : "url"
            }
        ] ,
        content : "Go away! I'm busy!",
        _id: "id",
        sender : {
            _id : "1",
            name : "username"
        },
        chat : "chat_id",
        createdAt : "date"
    },
    {
        attachments: [
            {
                public_id : "public_id",
                url : "url"
            }
        ] ,
        content : "okay okay! I'm going! Bye!",
        _id: "id",
        sender : {
            _id : "2",
            name : "username"
        },
        chat : "chat_id",
        createdAt : "date"
    },
]


const user = {
  _id : "1",
  name:"Niladri"
}

  return (
    <>
      <Stack direction={"row"} sx={{
        alignItems:"center",
      }} className="justify-start pl-4 text-lg font-bold text-white shadow-xl h-14 bg-zinc-900 ">
        <Typography variant="body1" sx={{fontWeight:700}}>{user.name}</Typography>
      </Stack>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        margin={"1rem"}
        height={"81%"}
        sx={{
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >

        {
          sampleMessages.map((message) => {
            return (
              <MemoizedMessageComponent key={message._id} message={message} user={user}/>
            )
          })
        }

      </Stack>
      <form style={{ height: "6%" }}>
        <Stack direction={"row"} spacing={2} sx={{
          border:"2px solid lime",
          margin:"1rem",
          borderRadius:"3rem",
          padding:"8px"
        }}>
          <IconButton ref={fileRef}>
            <AttachFile sx={{
              color:"lime",
              rotate:"-35deg"
            }} />
          </IconButton>
         <InputBox placeholder="Type messages here..."/>
         <IconButton type="submit" >
            <SendRounded sx={{
              color:"lime",
              rotate:"-35deg"
            }} />
         </IconButton>
        </Stack>
      </form>
      <FileMenu  />
    </>
  );
};
export default AppLayout(Chat);
