import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import CardContent from '@mui/material/CardContent';
import DataCard from './DataCard';
import {Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
//   padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 10,
  "&:hover": {
    border: "2px solid #bbdefb",
    boxShadow: "0px 0px 10px 1px #bbdefb",
  }
}));

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
        <Item variant='outlined'>
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
  </Item>
  </Grid>
))}
      </Grid>
    </Box>
  );
}
