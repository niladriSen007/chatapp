import { Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-white">
      <img
        src={"/logor.png"}
        loading="lazy"
        alt="chat_logo"
        className="rounded-full cursor-pointer w-96 h-96"
      />
      <Typography variant="h4" className="">
        Select friends to chat
      </Typography>
    </div>
  );
};
export default AppLayout(Home);
