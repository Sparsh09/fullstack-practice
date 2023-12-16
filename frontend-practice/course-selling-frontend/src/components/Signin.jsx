import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

function Signin() {
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
          />
          <br />

          <TextField
            fullWidth
            id={"password"}
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <Button
            variant="contained"
            onClick={() => {
              const username = document.getElementById("username").value;
              const password = document.getElementById("password").value;
              fetch("http://localhost:3000/admin/signin", {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: {
                  "Content-type": "application/json",
                },
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
