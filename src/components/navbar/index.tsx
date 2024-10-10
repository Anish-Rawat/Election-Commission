import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/SignIn");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#D7CAFF" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "24px",
            color: "black",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 40,
              width: 40,
              mr: 2,
            }}
            alt="Election Commission Logo"
            src="https://seeklogo.com/images/H/haryana-state-election-commission-logo-23F48A8A23-seeklogo.com.png"
          />
          Election Commission
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          endIcon={<LogoutIcon />}
          sx={{
            backgroundColor: "#fff",
            color: "black",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "16px",
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
