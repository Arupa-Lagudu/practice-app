import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ScheduledTests from './ScheduledTests';
import { Typography } from '@mui/material';
import Connections from './Connections';
import Files from './Files';

export default function ConsFiles() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 4 }}>
      <Grid container spacing={2}>
        <Grid item md={3.8} xs={12}>
          <Typography sx={{fontSize: 18}}><b>Scheduled test sets</b></Typography>
         <ScheduledTests />
        </Grid>
        <Grid item md={4.5} xs={12}>
        <Typography sx={{fontSize: 18}}><b>Connections</b></Typography>
        <Connections />
        </Grid>
        <Grid item md={3.6} xs={12} marginLeft={1}>
        <Typography sx={{fontSize: 18}}><b>Files</b></Typography>
        <Files />
        </Grid>
      </Grid>
    </Box>
  );
}
