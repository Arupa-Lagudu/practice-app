import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import CardContent from '@mui/material/CardContent';
import DataCard from './DataCard';
import {Typography } from '@mui/material';
import { StyledPaperwithHover } from './Styles/Styled.Paper';

export default function Comparative() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Typography 
  variant='body1'
  component='h6'
  color='primary'
  marginTop={2}>
    Comparative
  </Typography>
      <Grid container spacing={1.5}>
      {['DB', 'File-DB', 'File-DB' ].map((cat, index) => (
        <Grid item md={4}>
        <StyledPaperwithHover variant='outlined'>
    <CardContent >
      <Box 
      sx={{display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row' }}>
        {[<StorageRoundedIcon color='primary'/>, <InsertDriveFileRoundedIcon color='primary'/>,
        <InsertDriveFileRoundedIcon color='primary'/>].at(index)}
        <Typography variant="body1" component="h6" marginLeft={1} marginTop={0.3}>
          <b>{cat}</b>
        </Typography>
     </Box>
      <DataCard />
    </CardContent>
  </StyledPaperwithHover>
  </Grid>
))}
      </Grid>
    </Box>
  );
}
