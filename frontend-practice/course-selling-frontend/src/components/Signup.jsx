import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div
        style={{
          marginTop: 100,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Welcome to Coursera</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            width: 400,
            padding: 20,
            border: "1px solid lightBlue",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            fullWidth
            id={"username"}
            label="Username"
            variant="outlined"
            type={"text"}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />

          <TextField
            fullWidth
            id={"password"}
            label="Password"
            variant="outlined"
            type={"password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <Button
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/signup/", {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  localStorage.setItem("token", data.token);
                });
            }}
          >
            SignUp
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
