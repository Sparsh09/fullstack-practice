import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Appbar() {
  const [userEmail, setUserEmail] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.username) {
          setUserEmail(data.username);
        }
      });
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant={"h6"}>Coursera</Typography>
      <div style={{ display: "flex" }}>
        {userEmail ? <UserLoggedIn email={userEmail} /> : <UserLoggedOut />}
      </div>
    </div>
  );
}

function UserLoggedIn(props) {
  const userEmail = props.email;
  return (
    <>
      <div>
        <Typography variant={"subtitle1"}>{userEmail}</Typography>
      </div>
      <Link to={"/signin"}>
        <Button
          variant="contained"
          style={{ marginRight: 10 }}
          onClick={() => {
            localStorage.setItem("token", null);
          }}
        >
          Log out
        </Button>
      </Link>
    </>
  );
}

function UserLoggedOut() {
  return (
    <>
      <Link to={"/signup"}>
        <Button variant="contained" style={{ marginRight: 10 }}>
          Sign Up
        </Button>
      </Link>
      <Link to="/signin">
        <Button variant="contained">Sign In</Button>
      </Link>
    </>
  );
}

export default Appbar;
