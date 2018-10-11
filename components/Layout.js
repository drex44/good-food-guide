import Head from "next/head";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import {
  Typography
} from "@material-ui/core";

const PageHead = () => (
  <Head>
    <title>Good Food Guide</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

const Layout = props => (
  <div id="layout">
    <PageHead />
    <center>
      <NavigationBar />
    </center>
    <div style=
    {{
      height: '60vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center'}}>
      <Typography
        gutterBottom
        variant="h2"
        component="h2"
        color="primary"
      >
        A guide to know which foods are good
      </Typography>
      <Typography
        gutterBottom
        variant="h2"
        component="h2"
        color="primary"
      >
        when you have certain disease!
      </Typography>
      <div>
        <img src="https://i.imgur.com/jFe8S1R.png" alt="Good Foods"></img>
      </div>
      <hr style={{
        background: '#9c27b0', 
        width: '30%',
        border: 'none',
        height: '2px'}}>
      </hr>
    </div>    
    <div id="content">{props.children}</div>
    <Footer />
    <style jsx>{`
      #content {
        margin: 0 10px;
      }

      #layout {
        background-color: #f2eff6;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23d5c7ec' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
