/* eslint-disable no-unused-vars */
import {
  Button,
  Dialog,
  DialogTitle,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const users = [
    {
      _id: 1,
      name: "John",
      email: "user1@email.com",
      avatar: "https://randomuser.me/api",
    },
  ];

  const [members, setMembers] = useState(users);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) => {
      if (prev.includes(id)) {
        return prev.filter((member) => member !== id);
      }
      return [...prev, id];
    });
    // console.log("Select member");
  };

  console.log(selectedMembers);

  const submitHandler = () => {
    console.log("Submit");
  };

  const closeGroupDialog = () => {
    console.log("Close");
  }

  const groupName= useInputValidation()

  return (
    <Dialog
      open
      sx={{
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(0,0,30,0.4)",
      }}
    >
      <Stack padding={"2rem"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>New Group</DialogTitle>
        <TextField value={groupName.value} onChange={groupName.changeHandler} label="Group name" />
        <Typography variant="h6" textAlign={"center"} marginTop={2}>
          Select Members
        </Typography>
        <List>
          {members?.map((user) => (
            <UserItem user={user} key={user?._id} handler={selectMemberHandler} isAdded={selectedMembers?.includes(user?._id)} />
          ))}
        </List>
        <Stack
          direction={"row"}
          justifyContent={"flex-end"}
          spacing={2}
          paddingTop={2}
        >
          <Button variant="contained" onClick={submitHandler}>Create</Button>
          <Button variant="contained" color="error">Cancel</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};
export default NewGroup;
