import Link from "next/link";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import Footer from "../components/Footer";

const PageHead = () => (
  <Head>
    <title>Good Food Guide</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

export const PageLink = props => (
  <Link href={`/${props.link}`}>
    <Button style={{ margin: "5px" }} variant="outlined" color="primary">
      {props.title}
    </Button>
  </Link>
);

const Navigation = () => (
  <div>
    <PageLink link="" title="Home" />
    <PageLink link="about" title="About" />
  </div>
);

const Header = () => (
  <div>
    <Link href="/">
      <a style={{ margin: "0px" }}>
        <h1>Good Food Guide</h1>
      </a>
    </Link>
    <h3>A guide to know which foods are good when you have certain disease!</h3>
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
      <Navigation />
    </center>
    <div id="content">{props.children}</div>
    <Footer />
    <style jsx>{`
      #layout,
      #content {
        margin: 20px;
        padding: 20px;
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
