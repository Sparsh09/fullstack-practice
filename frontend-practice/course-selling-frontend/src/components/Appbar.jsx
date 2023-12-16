import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
function Appbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant={"h6"}>Coursera</Typography>
      <div style={{ display: "flex" }}>
        <Link to={"/signup"}>
          <Button variant="contained" style={{ marginRight: 10 }}>
            Sign Up
          </Button>
        </Link>
        <Link to="/signin">
          <Button variant="contained">Sign In</Button>
        </Link>
      </div>
    </div>
  );
}

export default Appbar;
