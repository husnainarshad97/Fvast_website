import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function exPage() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Simplify your payments with Fvast Pay
          </h2>
          <h4 className={classes.description} style={{ textAlign: "justify" }}>
            With every safety feature and every standard in our Community
            Guidelines, we are committed to helping to create a safe environment
            for our users.Pay for your Careem rides and Ride, order food, shop,
            pay or become a Captain. Careem is a hassle-free, one stop solution
            for your daily needs.food orders, send funds to your family, and so
            much more with Careem Pay.With every safety feature and every
            standard in our Community Guidelines, we are committed to helping to
            create a safe environment for our users.Pay for your Careem rides
            and Ride, order food, shop, pay or become a Captain. Careem is a
            hassle-free, one stop solution for your daily needs.food orders,
            send funds to your family, and so much more with Careem Pay.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
