import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Container, Section, TextFeild } from "../Login/LoginElements";
import { ButtonSection, Details } from "../Profile/ProfileElements";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import * as l from "./ViewUserElements";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ViewUser = ({ data,BackRoutes }) => {
  const { user, loadUser } = useAuth();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleEmailChange = async (e) => {
    try {
      if (e.key == "Enter") {
        data.map((user) => {
          console.log(user.Email === searchText);
          if (user.Email === searchText) {
            setName(user.Name);
            setEmail(user.Email);
          }
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const formdata = { Name, Email };
      await toast.promise(
        axios.patch("api/v1/user", formdata),
        {
          loading: `Updating Profile Details...`,
          success: (data) => {
            console.log(data?.data?.message);
            loadUser();
            return data?.data?.message;
          },
          error: (err) => `${err.response.data.message}`,
        },
        {
          style: {
            borderRadius: "10px",
            background: "#46458C",
            color: "#fff",
            fontSize: "1rem",
            zIndex: "99999999",
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const removeUser = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        axios.delete(`/api/v1/user/${Email}`),
        {
          loading: `Removing User...`,
          success: (data) => {
            console.log(data?.data?.message);
            return data?.data?.message;
          },
          error: (err) => `${err.response.data.message}`,
        },
        {
          style: {
            borderRadius: "10px",
            background: "#46458C",
            color: "#fff",
            fontSize: "1rem",
            zIndex: "99999999",
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <Section>
        <l.SearchBar>
          <l.Bar
            type="text"
            placeholder="Enter the User email"
            onChange={handleTextChange}
            onKeyDown={handleEmailChange}
          />
        </l.SearchBar>
        <Details>
          <TextFeild>
            <TextField
              label="Email"
              id="filled-size-small"
              variant="filled"
              size="small"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </TextFeild>
          <TextFeild>
            <TextField
              label="Name"
              id="filled-size-small"
              variant="filled"
              size="small"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </TextFeild>
          <ButtonSection>
            <Button
              variant="contained"
              color="success"
              sx={{ margin: "5px" }}
              onClick={updateUser}
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ margin: "5px" }}
              onClick={removeUser}
            >
              Delete
            </Button>
          </ButtonSection>
        </Details>
      </Section>
      <ButtonSection>
        <Link to={BackRoutes.link}>
          <Button variant="contained">Back</Button>
        </Link>
      </ButtonSection>
    </Container>
  );
};
export default ViewUser;
