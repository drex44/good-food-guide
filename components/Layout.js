import Link from "next/link";
import Head from "next/head";
import Typography from '@material-ui/core/Typography';
import Footer from "../components/Footer";
import SearchAppBar from "../components/Header";

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

const PageHead = () => (
  <Head>
    <title>Good Food Guide</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

const Header = () => (
  <div>
    <SearchAppBar />
    <Link href="/">
      <Typography component="h2" variant="h1" gutterBottom color="primary" style={{ fontSize: "4em" }}>
        Good Food Guide
      </Typography>
    </Link>
    <Typography style={{ fontSize: "18px" }} component="h2" variant="h3" gutterBottom>
      A guide to know which foods are good when you have certain disease!
    </Typography>
    <style jsx>{`
      h1 {
        color: #4b4949;
        font-size: 2.5em;
      }
    `}</style>
  </div>
);

const Layout = props => (
  <div id="layout">
    <PageHead />
    <center>
      <Header />
    </center>
    <div id="content">{props.children}</div>
    <Footer />
    <style jsx>{`
      #layout,
      #content {
        margin: 20px;
      }
      color: #625f5f;
    `}</style>
    <style jsx global>
      {`
        a {
          margin: 10px;
          color: #0003ff;
        }
      `}
    </style>
  </div>
);

export default Layout;
