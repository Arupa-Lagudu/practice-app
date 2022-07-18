import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
// import { makeStyles } from '@mui/styles';
import { blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const PassedTests = 6;
const FailedTests = 0;

const Item = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : blueGrey[50],
  padding: theme.spacing(1),
  marginTop: 2,
  fontSize: 12,
  borderRadius: 5,
})); 

// const useStyles = makeStyles({
  // font: {
    // fontSize: 12,
  // },
  // Btn:{
    // fontSize: 10, 
    // textTransform: 'none', 
    // padding: 0,
    // marginLeft: 5,
  // }
// });

export default function DataCard() {
  return(
  <React.Fragment>
    <Box marginTop={1.5}>
        {[22, 7, 22, 20 ].map((text, index) => (
          <Item key={text}>
            {['Tests', 'Validations', 'Records Validations', 'Data Sources'].at(index)}
            <b>{text}</b>
          </Item>
        ))}
      <Box display= 'flex'
      position='flex-start'
      flexDirection='row'
      marginTop={1}>
        <Typography color= 'primary'
        sx={{fontSize: 12}}>{PassedTests} Passed
        <Typography color= '#f381a7' display='inline'
        sx={{fontSize: 12,marginLeft:1}} >{FailedTests} Failed
        </Typography></Typography>
        <Button sx={{fontSize: 10, textTransform: 'none', padding: 0,marginLeft: 3,}}>+ New</Button>
        </Box>
    </Box>

  </React.Fragment>
);
}
