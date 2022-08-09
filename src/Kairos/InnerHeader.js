import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function InnerHeader({name}) {
    return (
<Box>
<Typography variant="h6"component="div">
{name}
</Typography>

</Box>
    );
}