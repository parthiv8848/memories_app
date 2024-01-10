import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import memories from "../../Images/memories.png";
import useStyles from "./styles";

const Navbar = () => {
  const user = null;
  const classe = useStyles();
  const logout = () => {};

  return (
    <AppBar className={classe.appBar} position="static" color="inherit">
      <div className={classe.brandContainer}>
        <Typography className={classe.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classe.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>

      <Toolbar className={classe.toolbar}>
        {user ? (
          <div className={classe.profile}>
            <Avatar
              className={classe.purple}
              alt={user.result.name}
              src={user.result.image}
            >
             
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classe.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              className={classe.logout}
              variant="contained"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained">
           
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
