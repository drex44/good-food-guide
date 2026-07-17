import React, { useEffect, useState } from "react";
import Link from "next/link";

import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

const Breadcrumb = () => {
  const [sickName, setSickName] = useState("");

  useEffect(() => {
    setSickName(getQueryStringValue("disease"));
  }, []);

  if (!sickName) return null;

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",

        "& p": {
          display: "inline-block"
        },

        "& a": {
          margin: 0,
          height: 18
        },

        "& .homeIcon": {
          fontSize: 18,
          color: "primary.main",

          "&:hover": {
            color: "#751d84"
          }
        },

        "& .slash": {
          margin: "0 10px"
        },

        "& .breadcrumbTitle": {
          textTransform: "capitalize"
        }
      }}
    >
      <Link href="/">
        <Tooltip title="Home" placement="left">
          <Icon className="homeIcon">home</Icon>
        </Tooltip>
      </Link>
      <BreadcrumbSlash />
      <BreadcrumbTitle>disease</BreadcrumbTitle>
      <BreadcrumbSlash />
      <BreadcrumbTitle>{sickName}</BreadcrumbTitle>
    </Box>
  );
};

function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}

const BreadcrumbTitle = ({ children }) => (
  <Typography className="breadcrumbTitle">{children}</Typography>
);

const BreadcrumbSlash = () => <Typography className="slash">/</Typography>;

export default Breadcrumb;
