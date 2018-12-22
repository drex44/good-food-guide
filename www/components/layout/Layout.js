import PropTypes from "prop-types";
import Head from "next/head";
import Footer from "./Footer";
import NavigationBar from "../navigation/NavigationBar";
import { withStyles } from "@material-ui/core/styles";
import AboutIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import FeedbackIcon from "@material-ui/icons/Feedback";

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
      <div className={classes.content}>{props.children}</div>
      <Footer />
    </React.Fragment>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

const WebsiteHead = () => (
  <Head>
    <title>Good Food Guide</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

export default withStyles(styles)(Layout);
