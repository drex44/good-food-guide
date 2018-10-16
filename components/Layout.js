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

const Layout = props => (
  <div>
    <PageHead />
    <NavigationBar filterList={props.filterList} />
    <div id="content">{props.children}</div>
    <Footer />

    <style jsx global>
      {`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        a {
          margin: 10px;
          color: #0003ff;
        }
      `}
    </style>
  </div>
);

export default Layout;
