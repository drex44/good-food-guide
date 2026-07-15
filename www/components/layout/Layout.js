import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Footer from "./Footer";
import NavigationBar from "../navigation/NavigationBar";
import AboutIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FeedbackIcon from "@mui/icons-material/Feedback";

const Layout = ({
  children,
  title = "Good Food Guide",
  description = "A guide to which foods help with which diseases and symptoms."
}) => {
  const navigationLinks = [
    { title: "home", href: "/", icon: HomeIcon },
    { title: "Browse Foods", href: "/foodDetails", icon: RestaurantIcon },
    {
      title: "Give Feedback",
      href: "/suggestions",
      icon: FeedbackIcon
    },
    { title: "About", href: "/about", icon: AboutIcon }
  ];

  return (
    <React.Fragment>
      <WebsiteHead title={title} description={description} />
      <NavigationBar links={navigationLinks} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          minHeight: "calc(100vh - 114px)"
        }}
      >
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  );
};

const WebsiteHead = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={description} />
  </Head>
);

export default Layout;
