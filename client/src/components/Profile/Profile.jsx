import { Button, TextField } from "@mui/material";
import { Container, Section, TextFeild } from "../Login/LoginElements";
import { useState } from "react";
import * as l from "./ProfileElements";
import { toast } from "react-hot-toast";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
const Profile = ({ BackRoutes }) => {
  const { user, loadUser } = useAuth();
  const [Name, setName] = useState(user.Name);
  const [Email, setEmail] = useState(user.Email);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const formdata = { Name, Email };
      await toast.promise(
        axios.patch("api/v1/user/own", formdata),
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
  return (
    <Container>
      <Section>
        <l.Details>
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
          <Button variant="contained" color="success" onClick={updateUser}>
            Update
          </Button>
        </l.Details>
      </Section>
      <l.ButtonSection>
        <Link to={BackRoutes.link}>
          <Button variant="contained">Back</Button>
        </Link>
      </l.ButtonSection>
    </Container>
  );
};

export default Profile;
