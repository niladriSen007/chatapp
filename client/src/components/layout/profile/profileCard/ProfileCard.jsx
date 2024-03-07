/* eslint-disable no-unused-vars */

import { Stack, Typography } from "@mui/material";

/* eslint-disable react/prop-types */
const ProfileCard = ({ heading = "", Icon = "", text = "" }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      textAlign={"center"}
      justifyContent={"flex-start"}
      spacing={1}
      sx={{
        padding: "0.5rem",
        color: "white",
      }}
    >
      <Stack justifyContent={"center"} textAlign={"center"} alignItems={"center"}>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          {Icon && Icon}

          <Typography variant={"h6"}>{heading}</Typography>
        </Stack>
        <Typography variant={"caption"}>{text}</Typography>
      </Stack>
    </Stack>
  );
};
export default ProfileCard;
