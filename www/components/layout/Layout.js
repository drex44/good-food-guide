import Head from "next/head";
import Footer from "./Footer";
import NavigationBar from "../navigation/NavigationBar";
import { withStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import AboutIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";

const styles = () => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    minHeight: "calc(100vh - 114px)"
  }
});

const Layout = props => {
  const { classes } = props;
  const navigationLinks = [
    { title: "home", href: "/", icon: HomeIcon },
    { title: "Food Details", href: "/foodDetails", icon: ReceiptIcon },
    { title: "About", href: "/about", icon: AboutIcon }
  ];

  return (
    <div>
      <WebsiteHead />
      <NavigationBar links={navigationLinks} />
      <div className={classes.content}>{props.children}</div>
      <Footer />
    </div>
  );
};

const WebsiteHead = () => (
  <Head>
    <title>Good Food Guide</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

export default withStyles(styles)(Layout);
