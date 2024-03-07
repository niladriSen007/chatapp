/* eslint-disable no-unused-vars */

import { Stack } from "@mui/material";
import ChatItem from "./chatItem/ChatItem";

/* eslint-disable react/prop-types */
const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"} >
      {chats.map((chat, index) => {
        const { avatar, _id, name, groupChat, members } = chat;

        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        const isOnline = members.some((member) => onlineUsers.includes(member));

        return (
          <ChatItem
            key={chat}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            _id={_id}
            name={name}
            groupChat={groupChat}
            sameSender={chatId === _id}
            index={index}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};
export default ChatList;
