import React, { Component } from "react";
import Link from "next/link";

import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
        <Typography variant="subtitle2" style={{color: '#ffffff'}}>
          Good Food Guide - An Open Source Project
        </Typography>
        <Link href="/terms" >
          <a style={{color: '#ffffff', textDecoration: 'none', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>Terms</a>
        </Link>
        <style jsx>{`
          #footer-container {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #9c27b0;
          }
        `}</style>
      </div>
    );
  }
}

export default Footer;
