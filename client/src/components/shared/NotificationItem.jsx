/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
} from "@mui/material";
import { memo } from "react";

const NotificationItem = ({ sender, _id, handler }) => {
  return (
    <ListItem className="flex flex-col items-end justify-end rounded-md cursor-pointer hover:bg-gray-300">
      <Stack direction={"row"} >
        <ListItemAvatar>
          <Avatar src={sender.avatar} />
        </ListItemAvatar>
        <ListItemText>{sender.name} has sent you a friend request</ListItemText>
      </Stack>
      <Stack direction={"row"}  spacing={2} paddingTop={.4} paddingLeft={22}>
        <button
          onClick={() => handler(_id, true)}
          className="px-2 py-1 text-white bg-green-500 rounded-md"
        >
          Accept
        </button>
        <button
          onClick={() => handler(_id, false)}
          className="px-2 py-1 text-white bg-red-500 rounded-md"
        >
          Reject
        </button>
      </Stack>
    </ListItem>
  );
};
const MemoizedNotificationItem = memo(NotificationItem);

export default MemoizedNotificationItem;
