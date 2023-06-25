import TextField from "@mui/material/TextField";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as l from "./LoginElements";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const [change, setChange] = useState(true);
  const handleChange = () => {
    if (!change) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  const {user,RegisterUser,logingUser,loading,isAuthenticated} = useAuth();
  console.log(useAuth());
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const formData = { Name, Email, Password, ConfirmPassword };
  const SignupSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.promise(
        RegisterUser(formData),
        {
          loading: "Registering.....",
          success: (data) => `User Registered Successfully`,
          error: (err) => {
            console.log(err.response);
            if (!err?.response?.data?.message) {
              return "Something went wrong! Try again";
            }
            return `${err.response.data.message}`;
          },
        },
        {
          style: {
            borderRadius: "10px",
            background: "#46458C",
            color: "#fff",
            fontSize: "1rem",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    try {
      toast.promise(
        logingUser({ Email, Password }),
        {
          loading: "Logging in .....",
          success: (data) => `Logged in successfully`,
          error: (err) => {
            if (!err?.response?.data?.message) {
              return "Something went wrong! Try again";
            }
            return `${err?.response?.data?.message}`;
          },
        },
        {
          style: {
            borderRadius: "10px",
            background: "#46458C",
            color: "#fff",
            fontSize: "1rem",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!loading && user && isAuthenticated) {
      switch (user.Role) {
        case "Admin":
          navigate("/AdminDashBoard");
          break;
        case "Staff":
          navigate("/StaffDashBoard");
          break;
        case "User":
          navigate("/UserDashBoard");
          break;
        default:
          navigate("/login");
          break;
      }
    }
  }, [isAuthenticated, user]);

  return (
    <l.Container>
      <l.Section>
        {
            change ? 
            <l.FormSection>
          <l.Heading>Login</l.Heading>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <l.TextFeild>
              <TextField
                label="Email"
                id="filled-size-small"
                variant="filled"
                size="small"
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </l.TextFeild>
            <l.TextFeild>
              <FormControl sx={{ m: 1, width: "40ch" }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={Password}
                onChange={(e)=>setPassword(e.target.value)}
                />
              </FormControl>
            </l.TextFeild>
          </Box>
          <Button variant="contained" color="success" onClick={loginSubmit}>
            Login
          </Button>
          <l.Option>
                  <p>
                    Dosen't have an account ?{" "}
                    <l.LinkToSignUpAndLogIn onClick={handleChange}>
                      Sign Up
                    </l.LinkToSignUpAndLogIn>
                  </p>
                </l.Option>
        </l.FormSection>
        :
        <l.FormSection>
          <l.Heading>Create an account</l.Heading>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <l.TextFeild>
              <TextField
                label="Name"
                id="filled-size-small"
                variant="filled"
                size="small"
                value={Name}
                onChange={(e)=>setName(e.target.value)}
              />
            </l.TextFeild>
            <l.TextFeild>
              <TextField
                label="Email"
                id="filled-size-small"
                variant="filled"
                size="small"
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </l.TextFeild>
            <l.TextFeild>
              <FormControl sx={{ m: 1, width: "40ch" }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={Password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </FormControl>
            </l.TextFeild>
            <l.TextFeild>
              <FormControl sx={{ m: 1, width: "40ch" }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Confrim Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type={showConfirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={ConfirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                />
              </FormControl>
            </l.TextFeild>
          </Box>
          <Button variant="contained" color="success" onClick={SignupSubmit}>
            Register
          </Button>
          <l.Option>
                  <p>
                    Already have an account ?{" "}
                    <l.LinkToSignUpAndLogIn onClick={handleChange}>
                      Sign In
                    </l.LinkToSignUpAndLogIn>
                  </p>
                </l.Option>
        </l.FormSection>
        }
      </l.Section>
    </l.Container>
  );
};

export default Login;
