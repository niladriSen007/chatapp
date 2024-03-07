export const chats = [
  {
    avatar: [
      "https://images.unsplash.com/photo-1557296387-5358ad7997bb?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Chat 1",
    _id: "1",
    groupChat: false,
    sameSender: false,
    isOnline: true,
    newMessagesAlert: {
      chatId: "1",
      count: 0,
    },
    members: ["1", "2"],
    index: 0,
    handleDeleteChat: () => {},
  },
  {
    avatar: [
      "https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg",
      "https://www.shutterstock.com/image-photo/beautiful-business-woman-portrait-isolated-260nw-31513849.jpg",
      "https://www.shutterstock.com/image-photo/beautiful-business-woman-portrait-isolated-260nw-31513849.jpg",
      "https://www.shutterstock.com/image-photo/beautiful-business-woman-portrait-isolated-260nw-31513849.jpg",

    ],
    name: "Chat 2",
    _id: "2",
    groupChat: true,
    sameSender: true,
    isOnline: false,
    newMessagesAlert: {
      chatId: "2",
      count: 0,
    },
    members: ["2", "3"],
    index: 1,
    handleDeleteChat: () => {},
  },
];
