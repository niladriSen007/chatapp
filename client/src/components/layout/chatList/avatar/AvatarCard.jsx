/* eslint-disable no-unused-vars */

import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";

/* eslint-disable react/prop-types */
const AvatarCard = ({ avatar = [], max = 3 }) => {
  return (
    <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
      <AvatarGroup max={max} >
        <Box width={"5.5rem"} height={"3rem"}>
          {avatar.map((image, index) => (
            <Avatar
              
              sx={{
                width: "2rem",
                height: "2rem",
                position: "absolute",
                left: {
                  xs: `${index + 0.5}rem`,
                  sm: `${index+.5}rem`,
                },
                top: {
                  xs: `${index + 0.5}rem`,
                  sm: `${.8}rem`,
                },
              }}
              key={index}
              src={image}
              alt={`Avatar ${index}`}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};
export default AvatarCard;
