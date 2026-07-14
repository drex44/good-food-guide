import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "./Search";

const desktopSectionSx = { display: { xs: "none", md: "flex" } };
const mobileSectionSx = { display: { xs: "flex", md: "none" } };

const WebsiteHeader = ({ children }) => (
  <Button component={Link} href="/" color="inherit">
    <Typography variant="h6" color="inherit">
      {children}
    </Typography>
  </Button>
);

WebsiteHeader.propTypes = {
  children: PropTypes.object.isRequired
};

const DesktopMenuItem = ({ icon: Icon, href, children }) => (
  <Button component={Link} href={href} color="inherit">
    <Icon />
    <Typography color="inherit" style={{ marginLeft: "7px" }}>
      {children}
    </Typography>
  </Button>
);

DesktopMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

const MobileMenuItem = ({ icon: Icon, href, children }) => (
  <MenuItem component={Link} href={href}>
    <IconButton color="inherit" component="span">
      <Icon />
    </IconButton>
    {children}
  </MenuItem>
);

MobileMenuItem.propTypes = {
  href: PropTypes.string.isRequired
};

const NavigationBar = ({ links }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const MobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {links.map((link, index) => (
        <MobileMenuItem key={index} href={link.href} icon={link.icon}>
          {link.title}
        </MobileMenuItem>
      ))}
    </Menu>
  );

  const DesktopMenu = (
    <React.Fragment>
      {links.map((link, index) => (
        <DesktopMenuItem key={index} href={link.href} icon={link.icon}>
          {link.title}
        </DesktopMenuItem>
      ))}
    </React.Fragment>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <WebsiteHeader>
            <React.Fragment>
              <Box sx={desktopSectionSx}>Good Food Guide</Box>
              <Box sx={mobileSectionSx}>GFG</Box>
            </React.Fragment>
          </WebsiteHeader>
          <Box
            sx={theme => ({
              position: "relative",
              borderRadius: theme.shape.borderRadius,
              backgroundColor: alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25)
              },
              marginRight: theme.spacing(2),
              marginLeft: 0,
              width: "100%",
              [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto"
              }
            })}
          >
            <Search />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={desktopSectionSx}>{DesktopMenu}</Box>
          <Box sx={mobileSectionSx}>
            <IconButton
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {MobileMenu}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

NavigationBar.propTypes = {
  links: PropTypes.array.isRequired
};

export default NavigationBar;
