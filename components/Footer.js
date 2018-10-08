import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";

class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
        <Typography variant="subtitle2">Good Food Guide - An Open Source Project</Typography>
        <style jsx>{`
            #footer-container{
                position: absolute;
                bottom: 0;
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