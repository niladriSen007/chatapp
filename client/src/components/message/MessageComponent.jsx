/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { memo } from "react";

const MessageComponent = ({ message, user }) => {
  const { sender, content, _id, attachments, createdAt, chat } = message;

  return (
    <div
      className={`relative text-white bg-gradient-to-b from-lime-500 to-green-700 p-3 text-base rounded-md my-4 z-50 ${
        sender?._id !== user?._id ? "self-start" : "self-end"
      }`}
    >
      <p className="font-semibold text-gray-800 ">
        {sender?._id !== user?._id ? sender?.name : "You"}
      </p>

      <Typography className="font-semibold text-white">{content}</Typography>
    </div>
  );
};
const MemoizedMessageComponent = memo(MessageComponent);

export default MemoizedMessageComponent;
