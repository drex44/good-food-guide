import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  withStyles,
  Button
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "./Search";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  desktopSection: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  mobileSection: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

const WebsiteHeader = props => {
  return (
    <Link href="/">
      <Button color="inherit">
        <Typography variant="h6" color="inherit">
          {props.children}
        </Typography>
      </Button>
    </Link>
  );
};

WebsiteHeader.propTypes = {
  children: PropTypes.object.isRequired
};

const DesktopMenuItem = props => {
  const Icon = props.icon;
  return (
    <Link href={props.href}>
      <Button color="inherit">
        <Icon />
        <Typography color="inherit" style={{ marginLeft: "7px" }}>
          {props.children}
        </Typography>
      </Button>
    </Link>
  );
};

DesktopMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const MobileMenuItem = props => {
  const Icon = props.icon;
  return (
    <Link href={props.href}>
      <MenuItem>
        <IconButton color="inherit">
          <Icon />
        </IconButton>
        {props.children}
      </MenuItem>
    </Link>
  );
};

MobileMenuItem.propTypes = {
  href: PropTypes.string.isRequired
};

class NavigationBar extends React.Component {
  state = {
    mobileMoreAnchorEl: null
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const MobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        {this.props.links.map(link => (
          <MobileMenuItem href={link.href} icon={link.icon}>
            {link.title}
          </MobileMenuItem>
        ))}
      </Menu>
    );

    const DesktopMenu = (
      <React.Fragment>
        {this.props.links.map(link => (
          <DesktopMenuItem href={link.href} icon={link.icon}>
            {link.title}
          </DesktopMenuItem>
        ))}
      </React.Fragment>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <WebsiteHeader>
              <div className={classes.desktopSection}>Good Food Guide</div>
              <div className={classes.mobileSection}>GFG</div>
            </WebsiteHeader>
            <div className={classes.search}>
              <Search />
            </div>
            <div className={classes.grow} />
            <div className={classes.desktopSection}>{DesktopMenu}</div>
            <div className={classes.mobileSection}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              {MobileMenu}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired
};

export default withStyles(styles)(NavigationBar);
