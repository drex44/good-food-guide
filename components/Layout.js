import Head from "next/head";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const PageHead = () => (
  <Head>
    <title>Good Food Guide</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

const Layout = props => {
  return (
    <div id="layout">
      <PageHead />
      <center>
        <NavigationBar filterList={props.filterList} />
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
};

export default Layout;
