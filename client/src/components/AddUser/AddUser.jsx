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
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const AddUser = ({BackRoutes}) => {
  const [Role, setRole] = useState("");
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const {user} = useAuth();
    console.log(BackRoutes);
  const AddUser = async (e)=>{
    e.preventDefault();
    try {
        const formdata = {Email,Role,Name};
        await toast.promise(
            axios.post('api/v1/user',formdata),
            {
                loading: `Adding User...`,
                success: (data) => {
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
        )
    } catch (error) {
        
    }
  }
  return (
    <Container>
      <Section>
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
          <TextFeild>
            <FormControl variant="filled" sx={{ m: 1, width: "25ch" }}>
              <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
              <Select
                className="MuiInputLabel-root"
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                label="Role"
                value={Role}
                onChange={(e) => setRole(e.target.value)}
              >
                {user.Role === "Staff" ? null : <MenuItem value={"Staff"}>Staff</MenuItem>}
                <MenuItem value={"User"}>User</MenuItem>
              </Select>
            </FormControl>
          </TextFeild>
          <Button variant="contained" color="success" onClick={AddUser}>
            Add
          </Button>
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

export default AddUser;
