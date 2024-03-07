/* eslint-disable no-unused-vars */

import { Box, Stack, Typography } from "@mui/material";
import { LinkComponent } from "../../../styles/styledComponents";
import { memo } from "react";
import AvatarCard from "../avatar/AvatarCard";

/* eslint-disable react/prop-types */
const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <LinkComponent
    className="rounded-md hover:bg-gray-800"
      to={`/chat/${_id}`}
      sx={{ padding: ".6rem" }}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        className={`flex items-center px-2  py-1 ${
          !sameSender
            ? "bg-slate-950 shadow-lg border-lime-500 border-b-2 text-white"
            : "bg-lime-500 text-black  border-gray-400 border-b-4 "
        } rounded-md relative`}
      >
        <AvatarCard avatar={avatar} />
        <Stack>
          <Typography
            variant="h6"
            component="h6"
            className="pt-2 text-lg font-semibold"
          >
            {name}
          </Typography>
          {newMessageAlert && (
            <Typography
              variant="body1"
              component="p"
              className={`text-xs font-semibold py-1 ${
                sameSender ? "text-black" : "  text-lime-400"
              }  rounded-md  `}
            >
              {newMessageAlert?.count} New messages
            </Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            className={`bg-green-600`}
            sx={{
              width: "11px",
              height: "11px",
              borderRadius: "50%",

              position: "absolute",
              top: "30%",
              right: "3%",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </LinkComponent>
  );
};
const MemoizedChatItem = memo(ChatItem);
export default MemoizedChatItem;
