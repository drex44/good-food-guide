import React, { Component } from "react";
import Link from "next/link";

import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
        <Typography variant="subtitle2">
          Good Food Guide - An Open Source Project
        </Typography>
        <Link href="/terms">
          <a>Terms</a>
        </Link>
        <style jsx>{`
          #footer-container {
            position: absolute;
            left: 0;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f0f0f0;
          }
        `}</style>
      </div>
    );
  }
}

export default Footer;
