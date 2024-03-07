/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { Add as AddIcon, Delete } from "@mui/icons-material";
import { memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading,isAdded = false }) => {
  const { name, _id, avatar, email } = user;

  return (
    <ListItem key={_id} className="my-2 rounded-md cursor-pointer hover:bg-gray-300">
      <ListItemAvatar>
        <Avatar src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={email} />
      <ListItemSecondaryAction>
        <IconButton sx={{bgColor :isAdded ? "bg-red-500":"bg-green-500"}} edge="end" onClick={()=>handler(_id)} aria-label="add" disabled={handlerIsLoading}>
         { isAdded ? <Delete sx={{bgcolor: "error.main",color:"white",borderRadius:"50px"}} /> :  <AddIcon sx={{bgcolor: "primary.main",color:"white",borderRadius:"50px"}} />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
const MemoizedUserItem = memo(UserItem);
export default MemoizedUserItem;
