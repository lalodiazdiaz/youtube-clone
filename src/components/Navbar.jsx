import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const styles = {
  text: {
    display: "flex",
    color: "white",
    fontSize: "25px",
    margin: 0,
    fontWeight: "bold",
    fontFamily: "cursive",
    "@media (min-width: 600px)": {
      color: "blue",
    },
  },
};

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
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        sx={{ display: { xs: "none", md: "flex" } }}
        color={"white"}
        variant="h4"
        m={0}
        fontWeight={"bold"}
        fontFamily={"fantasy"}
      >
        You<span style={{ color: "red" }}>Clone</span>
      </Typography>
    </Link>

    <SearchBar />
  </Stack>
);

export default Navbar;
