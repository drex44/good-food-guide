import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles, Grid } from "@material-ui/core";
import Layout from "../components/layout/Layout";
import {
  StyledPageTitle,
  StyledParagraph,
  StyledParagraphTitle
} from "../components/layout/Commons";

const styles = theme => ({
  root: {
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px"
    },
    [theme.breakpoints.up("md")]: {
      padding: "20px 0px"
    },
    [theme.breakpoints.up("lg")]: {
      padding: "20px 0px"
    }
  }
});

class Terms extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <Grid item lg={6} md={8} xs={10} className={classes.root}>
          <StyledPageTitle>Terms and Conditions ("Terms")</StyledPageTitle>
          <br />
          <StyledParagraph>Last updated: October 09, 2018</StyledParagraph>
          <StyledParagraph>
            Please read these Terms and Conditions ("Terms", "Terms and
            Conditions") carefully before using the
            https://good-food-guide.now.sh website (the "Service") operated by
            Good Food Guide ("us", "we", or "our").
          </StyledParagraph>
          <StyledParagraph>
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users and others who access or use the Service.
          </StyledParagraph>
          <StyledParagraph>
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms then you may not
            access the Service.
          </StyledParagraph>
          <br />
          <StyledParagraphTitle>Disclaimers</StyledParagraphTitle>
          <StyledParagraph>
            All the information on this website - https://good-food-guide.now.sh
            - is published in good faith and for general information purpose
            only. Good Food Guide does not make any warranties about the
            completeness, reliability and accuracy of this information. Any
            action you take upon the information you find on this website (Good
            Food Guide), is strictly at your own risk. Good Food Guide will not
            be liable for any losses and/or damages in connection with the use
            of our website.
          </StyledParagraph>
          <StyledParagraph>
            From our website, you can visit other websites by following
            hyperlinks to such external sites. While we strive to provide only
            quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on
            these sites. Site owners and content may change without notice and
            may occur before we have the opportunity to remove a link which may
            have gone 'bad'.
          </StyledParagraph>
          <StyledParagraph>
            Please be also aware that when you leave our website, other sites
            may have different privacy policies and terms which are beyond our
            control. Please be sure to check the Privacy Policies of these sites
            as well as their "Terms of Service" before engaging in any business
            or uploading any information.
          </StyledParagraph>
          <br />
          <StyledParagraphTitle>Accounts</StyledParagraphTitle>
          <StyledParagraph>
            When you create an account with us, you must provide us information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms, which may result in immediate
            termination of your account on our Service.
          </StyledParagraph>
          <StyledParagraph>
            You are responsible for safeguarding the password that you use to
            access the Service and for any activities or actions under your
            password, whether your password is with our Service or a third-party
            service.
          </StyledParagraph>
          <StyledParagraph>
            You agree not to disclose your password to any third party. You must
            notify us immediately upon becoming aware of any breach of security
            or unauthorized use of your account.
          </StyledParagraph>
          <br />
          <StyledParagraphTitle>Termination</StyledParagraphTitle>
          <StyledParagraph>
            We may terminate or suspend access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </StyledParagraph>
          <StyledParagraph>
            All provisions of the Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity
            and limitations of liability.
          </StyledParagraph>
          <StyledParagraph>
            We may terminate or suspend your account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms.
          </StyledParagraph>
          <StyledParagraph>
            Upon termination, your right to use the Service will immediately
            cease. If you wish to terminate your account, you may simply
            discontinue using the Service.
          </StyledParagraph>
          <StyledParagraph>
            All provisions of the Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity
            and limitations of liability.
          </StyledParagraph>
          <br />
          <StyledParagraphTitle>Updates</StyledParagraphTitle>
          <StyledParagraph>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 15 days notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </StyledParagraph>
          <StyledParagraph>
            By continuing to access or use our Service after those revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, please stop using the Service.
          </StyledParagraph>
          <br />
          <StyledParagraphTitle>Contact Us</StyledParagraphTitle>
          <StyledParagraph>
            If you have any questions about these Terms, please contact us (Go
            to our github repo and raise an issue!). Thank You.!
          </StyledParagraph>
        </Grid>
      </Layout>
    );
  }
}

Terms.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Terms);
