import React, { Component } from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";

class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
      <Typography variant="subtitle2" style={{color: '#ffffff'}}>
          Good Food Guide - An Open Source Project
          <Link href="/terms" >
          <a style={{color: '#ffffff', textDecoration: 'none', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>Terms</a>
        </Link>
        </Typography>
      <Typography variant="subtitle2" style={{color: '#ffffff'}}>
          Crafted &lt;&#47;&gt; with love &hearts; 
          <Link href="/contributors" >
          <a style={{color: '#ffffff', textDecoration: 'none', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>by amazing people!</a>
        </Link>
          
      </Typography>
        <style jsx>{`
          #footer-container {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #9c27b0;
            flex-direction: column;
          }
        `}</style>
      </div>
    );
  }
}

export default Footer;