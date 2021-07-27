/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="/landing-page" className={classes.block}>
                FVast
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/aboutus" className={classes.block}>
                About us
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/terms" className={classes.block}>
                Terms
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/privacy" className={classes.block}>
                Privacy Policy
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <Link to="#" className={aClasses} target="_blank">
            Code Breakers
          </Link>{" "}
          Developers
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
