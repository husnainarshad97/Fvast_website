import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
//copied from other file
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

// core components
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

// import team1 from "assets/img/faces/avatar.jpg";
// import team2 from "assets/img/faces/dp.jpg";
// import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRoundedCircle,
  //   classes.imgFluid
  // );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Rides and beyond</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/* <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem> */}

              <CardBody>
                <p
                  className={classes.description}
                  style={{ textAlign: "justify" }}
                >
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site. You can write here details about
                  one of your team members. You can give more details about what
                  they do. Feel free to add some <a href="#pablo">links</a> for
                  people to be able to follow them outside the site. You can
                  write here details about one of your team members.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <CardBody>
                <p
                  className={classes.description}
                  style={{ textAlign: "justify" }}
                >
                  In addition to giving riders a way to get from point A to
                  point B, we are working to bring the future closer with
                  self-driving technology and urban air transport, helping
                  people order food quickly and affordably, removing barriers to
                  healthcare, creating new freight-booking solutions, and
                  helping companies provide a seamless employee travel
                  experience.
                  <br />
                  Whether you’re in the back seat or behind the wheel, your
                  safety is essential.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <CardBody>
                <p
                  className={classes.description}
                  style={{ textAlign: "justify" }}
                >
                  In addition to giving riders a way to get from point A to
                  point B, we are working to bring the future closer with
                  self-driving technology and urban air transport, helping
                  people order food quickly and affordably, removing barriers to
                  healthcare, creating new freight-booking solutions, and
                  helping companies provide a seamless employee travel
                  experience.
                  <br />
                  Whether you’re in the back seat or behind the wheel, your
                  safety is essential.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
