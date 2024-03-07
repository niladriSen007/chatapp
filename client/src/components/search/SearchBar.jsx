/* eslint-disable no-unused-vars */
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";

import { useInputValidation } from "6pp";
import UserItem from "../shared/UserItem";
import { useState } from "react";

const SearchBar = () => {
  const search = useInputValidation();

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
      email: "user1@email.com",
      avatar: "https://randomuser.me/api",
    },
  ]);

  const addFriendHandler = (id) => {
    console.log("Add friend");
  };

  const [isAddFriendHandlerLoading, setIsAddFriendHandlerLoading] =
    useState(false);

  return (
    <Dialog
      open
      sx={{
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(0,0,30,0.4)",
      }}
    >
      <Stack padding={"2rem"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find Friends</DialogTitle>
        <TextField
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <span role="img" aria-label="search">
                  🔍
                </span>
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users?.map((user) => (
            <UserItem
              user={user}
              key={user.id}
              handler={addFriendHandler}
              handlerIsLoading={isAddFriendHandlerLoading}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};
export default SearchBar;
