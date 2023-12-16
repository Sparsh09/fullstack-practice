import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState } from "react";

function Signin() {
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
        <Typography variant="h6">Welcome back. Sign In below</Typography>
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
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />

          <TextField
            fullWidth
            id={"password"}
            label="Password"
            variant="outlined"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/login", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                  username: username,
                  password: password,
                },
              })
                .then((res) => res.json())
                .then((data) => {
                  localStorage.setItem("token", data.token);
                  alert(data.message);
                });
            }}
          >
            Sign In
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
