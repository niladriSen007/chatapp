/* eslint-disable react/prop-types */
import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { primaryBlue } from "../constants/colors";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Notifications as NotificationIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
// import SearchBar from "../search/SearchBar";
const SearchBarDialog = lazy(() => import("../search/SearchBar"));
const NotificationDialog = lazy(() => import("../notofication/Notifications"));
const GroupDialog = lazy(() => import("../groups/NewGroup"));

const Header = () => {
  const navigateTo = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const navigateToGroup = () => {
    navigateTo("/groups");
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSearchDialog = () => {
    setIsSearchBar(!isSearchBar);
  };

  const createNewGroup = () => {
    setIsNewGroup(!isNewGroup);
  };

  const openNotification = () => {
    setIsNotification(!isNotification);
  };

  const logoutHandler = () => {
    localStorage.clear();
    navigateTo("/login");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "black",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <img src={"/logo.jpg"} loading="lazy" alt="chat_logo" className="rounded-full w-14 h-14" />
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobileMenu}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButtonComp
                title={"Search"}
                childrenProp={<SearchIcon />}
                onClickFunc={openSearchDialog}
              />
              <IconButtonComp
                title={"Notofications"}
                childrenProp={<NotificationIcon />}
                onClickFunc={openNotification}
              />
              <IconButtonComp
                title={"Create New Group"}
                childrenProp={<AddIcon />}
                onClickFunc={createNewGroup}
              />
              <IconButtonComp
                title={"Mange Groups"}
                childrenProp={<GroupIcon />}
                onClickFunc={navigateToGroup}
              />
              <IconButtonComp
                title={"Logout"}
                childrenProp={<LogoutIcon />}
                onClickFunc={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearchBar && (
        <Suspense fallback={<Backdrop open />}>
          <SearchBarDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <GroupDialog />
        </Suspense>
      )}
    </>
  );
};
export default Header;

const IconButtonComp = ({ title, onClickFunc, childrenProp }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClickFunc}>
        {childrenProp}
      </IconButton>
    </Tooltip>
  );
};
