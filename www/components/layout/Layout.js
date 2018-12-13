import Head from "next/head";
import Footer from "./Footer";
import NavigationBar from "../navigation/NavigationBar";
import { withStyles } from "@material-ui/core/styles";

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
  return (
    <div>
      <WebsiteHead />
      <NavigationBar />
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
