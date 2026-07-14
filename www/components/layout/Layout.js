import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Footer from "./Footer";
import NavigationBar from "../navigation/NavigationBar";
import AboutIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FeedbackIcon from "@mui/icons-material/Feedback";

const Layout = ({ children }) => {
  const navigationLinks = [
    { title: "home", href: "/", icon: HomeIcon },
    {
      title: "Give Feedback",
      href: "/suggestions",
      icon: FeedbackIcon
    },
    { title: "Food Details", href: "/foodDetails", icon: ReceiptIcon },
    { title: "About", href: "/about", icon: AboutIcon }
  ];

  return (
    <React.Fragment>
      <WebsiteHead />
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

const WebsiteHead = () => (
  <Head>
    <title>Good Food Guide</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

export default Layout;
