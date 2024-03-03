/* eslint-disable no-unused-vars */

import { Box, Stack, Typography } from "@mui/material";
import { LinkComponent } from "../../../styles/styledComponents";
import { memo } from "react";

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
  handleDeleteChatOpen,
}) => {
  return (
    <LinkComponent to={`/chat/${_id}`} onContextMenu={e=>handleDeleteChatOpen(e,_id,groupChat)}>
      <div
        className={`flex items-center p-2 ${
          !sameSender ? "bg-slate-950 shadow-lg border-lime-400 border-b-2 text-white" : "bg-lime-400 text-black  border-gray-400 border-b-4 "
        } rounded-md relative`}
      >
        
        <Stack>
          <Typography
            variant="h6"
            component="h6"
            className="text-lg font-semibold"
          >
            {name}
          </Typography>
          {newMessageAlert && (
            <Typography
              variant="body1"
              component="p"
              className="p-2 text-xs font-semibold text-black rounded-md bg-lime-400"
            >
              {newMessageAlert?.count} New messages
            </Typography>
          )}
        </Stack>

            {
              isOnline && (
                <Box sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  bgcolor: "limegreen",
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  transform: "translateY(-50%)",
                }} />
              )
            }
      </div>
    </LinkComponent>
  );
};
export default memo(ChatItem);
