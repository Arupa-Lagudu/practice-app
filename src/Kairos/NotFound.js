import * as React from "react";
import Box from "@mui/material/Box";
import InnerHeader from "./InnerHeader";

export default function NotFound() {
  return (
    <Box sx={{ width: "100%", height: "50%" }}>
      <InnerHeader name={"Not Found"} />
    </Box>
  );
}
