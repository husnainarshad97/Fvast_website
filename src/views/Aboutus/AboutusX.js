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
          <h2 className={classes.title}>Your safety drives us </h2>
          <h4 className={classes.description} style={{ textAlign: "justify" }}>
            Whether you’re in the back seat or behind the wheel, your safety is
            essential. We are committed to doing our part, and technology is at
            the heart of our approach. We partner with safety advocates and
            develop new technologies and systems to help improve safety and help
            make it easier for everyone to get around. Whether you’re in the
            back seat or behind the wheel, your safety is essential. We are
            committed to doing our part, and technology is at the heart of our
            approach. We partner with safety advocates and develop new
            technologies and systems to help improve safety and help make it
            easier for everyone to get around. Whether you’re in the back seat
            or behind the wheel, your safety is essential. We are committed to
            doing our part, and technology is at the heart of our approach. We
            partner with safety advocates and develop new technologies and
            systems to help improve safety and help make it easier for everyone
            to get around.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
