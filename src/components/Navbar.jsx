import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      backgroundColor: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
    >
      <img src={logo} alt="logo" height={45} />
      <p
        style={{
          color: "white",
          fontSize: "35px",
          margin: 0,
          fontWeight: "bold",
          fontFamily: "cursive",
        }}
      >
        You<span style={{ color: "red" }}>Clone</span>
      </p>
    </Link>

    <SearchBar />
  </Stack>
);

export default Navbar;
