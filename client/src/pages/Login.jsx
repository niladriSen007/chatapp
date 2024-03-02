import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CameraIcon from "@mui/icons-material/Camera";
import { VisuallyHidden } from "../components/styles/styledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernamevalidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  }

  const name = useInputValidation()
  const bio = useInputValidation()
  const username = useInputValidation("",usernamevalidator)
  const password = useInputValidation("")

  const avatar = useFileHandler("single")

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(username.value,password.value)
  }

  const handleSignup = (e) => {
    e.preventDefault()
    console.log(name.value,bio.value,username.value,password.value,avatar.file)
  }

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-700 to-slate-950">
      <Container component={"main"} maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      
      }}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form className="w-full " onSubmit={handleLogin}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                  sx={{}}
                />
                {
                  username.error && <Typography color="error" variant="caption">{username.error}</Typography>
                }
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {
                  password.error && <Typography color="error" variant="caption">{password.error}</Typography>
                }
                <Button variant="contained" color="primary" type="submit" fullWidth sx={{mt:"1rem"}} >
                  Login
                </Button>

                <Typography textAlign={"center"} m={".5rem"}>Or</Typography>

                <Button
                  variant="contained"
                  color="warning"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Sign up instead
                </Button>
              </form>
            </>
          ) : (
            <>
            <Typography variant="h5">Sign up</Typography>
            <form className="w-full " onSubmit={handleSignup}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"} sx={{
                alignItems: "center",
                justifyContent: "center",
                // margin:"20px 0"
              }}>
                <Avatar sx={{ width: "6rem", height: "6rem",objectFit:"contain",margin:"4px 0" }} src={avatar.preview} />
                {
                  avatar.error && <Typography color="error" display={"block"} variant="caption">{avatar.error}</Typography>
                }
                <IconButton
                  component="label"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 32,
                  color:"white",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  ":hover":{
                    backgroundColor: "rgba(0,0,0,0.7)",
                  },
                  padding: "4px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}>
                  <>
                    <CameraIcon />
                    <VisuallyHidden type="file" accept="image/*" id="icon-button-file" onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
                sx={{}}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
                sx={{}}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
                sx={{}}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button variant="contained" color="primary" type="submit" fullWidth sx={{mt:"1rem"}} >
                Sign up
              </Button>

              <Typography textAlign={"center"} m={".5rem"}>Or</Typography>

              <Button
                variant="contained"
                color="warning"
                fullWidth
                onClick={toggleLogin}
              >
                Log in instead
              </Button>
            </form>
          </>
          )}
        </Paper>
      </Container>
    </div>
  );
};
export default Login;
