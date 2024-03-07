/* eslint-disable no-unused-vars */
import { Dialog, DialogTitle, List, ListItem, Stack } from "@mui/material";
import NotificationItem from "../shared/NotificationItem";

const Notifications = () => {
  const notifications = [
    {
      _id: 1,
      sender: {
        // message: "John has sent you a friend request",
        date: "2021-09-01",
        avatar: "https://randomuser.me/api/portraits",
        name: "John",
      },
    },
    {
      _id: 1,
      sender: {
        // message: "John has sent you a friend request",
        date: "2021-09-01",
        avatar: "https://randomuser.me/api/portraits",
        name: "Johnny",
      },
    },
  ];

  const friendRequestHandler = (_id, acceptOrNot) => {
    console.log("Friend request");
  };

  return (
    <Dialog open>
      <Stack padding={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle textAlign={"center"}>Notifications</DialogTitle>
        <List>
          {notifications?.length > 0 ? (
            notifications?.map((notification) => (
              <NotificationItem
                key={notification._id}
                handler={friendRequestHandler}
                {...notification}
              />
            ))
          ) : (
            <ListItem>No notifications</ListItem>
          )}
        </List>
      </Stack>
    </Dialog>
  );
};
export default Notifications;
