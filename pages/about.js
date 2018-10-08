import Layout from "../components/Layout";
import React from "react";
import { Typography } from "@material-ui/core";

class About extends React.Component {
  render() {
    return (
      <Layout>
        <Typography variant="h4">About us</Typography>
        <Typography variant="body1">
          An open source project to show what to eat when you're ill
        </Typography>
      </Layout>
    );
  }
}

About.getInitialProps = async function(context) {
  return {};
};

export default About;
