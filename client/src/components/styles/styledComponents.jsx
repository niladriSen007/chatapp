import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const VisuallyHidden = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: 1,
    whiteSpace: "nowrap",
})

export const LinkComponent = styled(Link)`
  text-decoration: none;
  color: limegreen;
  padding: 1rem;
  &:hover {
    background-color: "red";
  }
`;


export const InputBox = styled("input")`
  border: none;
  width: 88%;
  paddingLeft: 1rem;
  paddingRightt: 1rem;
  background-color: black;
  font-size: 1.05rem;
  color: white;
  &:focus {
    outline: none;
  }
`;
