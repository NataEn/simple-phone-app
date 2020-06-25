import React, { useState, useEffect } from "react";
import "./SideBar.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Login from "@material-ui/icons/OpenInBrowser";
import Chart from "@material-ui/icons/ShoppingCart";
import Lock from "@material-ui/icons/Lock";
import Help from "@material-ui/icons/Help";
import Person from "@material-ui/icons/Person";
import Tag from "@material-ui/icons/LocalOffer";
import Bar from "@material-ui/icons/Dehaze";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const SideBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false,
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Button onClick={toggleDrawer(!state)}>
          <Bar />
        </Button>
        <Divider />
        {[
          { text: "Login", icon: <Login />, url: "login" },
          { text: "My Orders", icon: <Chart />, url: "myOrders" },
          { text: "My Prices", icon: <Tag />, url: "myPrices" },
          { text: "Update Details", icon: <Person />, url: "updateDetails" },
          { text: "Change Password", icon: <Lock />, url: "changePassword" },
          { text: "FAQ", icon: <Help />, url: "faq" },
        ].map((item, index) => (
          <Link to={`/${item.url}`}>
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
            <Divider />
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          <Bar />
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default SideBar;
