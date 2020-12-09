import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationaItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/my-burger">Burger Builder</NavigationItem>
      <NavigationItem link="/Orders">Orders</NavigationItem>
    </ul>
  );
};

export default navigationaItems;
