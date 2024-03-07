import { Avatar, Stack } from "@mui/material";
import ProfileCard from "./profileCard/ProfileCard";
import { Face, GitHub, VerifiedUser } from "@mui/icons-material";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          border: "4px solid limegreen",
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/370985?v=4"
          alt="profile"
        />
        </Avatar>
        <ProfileCard {...{heading:"Bio",text:"Hi I am the best developer",Icon:<Face />}} />
        <ProfileCard {...{heading:"Username",text:"@cristianoNil_07",Icon:<VerifiedUser />}} />
        <ProfileCard {...{heading:"Github",text:"Niladri Sen",Icon:<GitHub />}} />
    </Stack>
  );
};
export default Profile;
