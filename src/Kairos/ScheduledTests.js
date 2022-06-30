import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider, List, ListItemText, Typography } from '@mui/material';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
})); 

const Tests= [{"Batch":"Batch A","ScheduledDate":"May 31, 2022 19:00"},
              {"Batch":"Batch B","ScheduledDate":"May 31, 2022 22:00"},
              {"Batch":"Batch C","ScheduledDate":"June 10, 2022 09:00"},
              {"Batch":"Batch C","ScheduledDate":"June 10, 2022 09:00"},
              {"Batch":"Batch A","ScheduledDate":"June 15, 2022 19:00"},
              {"Batch":"Batch A","ScheduledDate":"June 15, 2022 19:00"},
              {"Batch":"Batch D","ScheduledDate":"June 18, 2022 20:00"},
              {"Batch":"Batch B","ScheduledDate":"June 20, 2022 10:00"},
              {"Batch":"Batch c","ScheduledDate":"June 29, 2022 12:00"},
              {"Batch":"Batch A","ScheduledDate":"July 1, 2022 21:00"}];


export default function Schedules() {
  return (
    <Item variant='outlined' sx={{borderRadius: 2, marginTop: 2}}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
        <List sx={{maxHeight: 130, overflow: 'auto', textAlign: 'center'}}>
        {Tests.map((Test)=>{
          return(
            <ListItemText>
              <Typography sx={{fontSize: 12}}>{Test.Batch} - <Typography sx={{fontSize: 12, marginRight: 1}}
              color='primary' display='inline'> {Test.ScheduledDate}</Typography>
              </Typography>
              <Divider light sx={{marginBottom: 1, marginTop: 1, marginLeft: 0, boxShadow: "0px 0px 17px 0px"}} />
            </ListItemText> 
          )})}            
        </List>
      </Grid>
      <Grid item xs={5} sx={{display:'flex', alignItems: 'center',justifyContent:'center'}}>
        <CalendarMonthRoundedIcon sx={{ color: grey[600]}}/>
        <Typography sx={{ color: grey[600]}} variant='h6' display='inline'>
          <b>{Tests.length}</b>
        </Typography>
        <Button sx={{fontSize: 10, textTransform: 'none', textAlign: 'right'}}>+ New</Button>
      </Grid>
      </Grid>
    </Box>
    </Item>
  );
}
