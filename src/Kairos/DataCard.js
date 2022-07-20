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

const Fail = styled(Typography)(()=>({
  fontSize: 12,
  color: '#f381a7',
  display: 'inline',
  marginLeft: 6
}))

const Pass = styled(Typography)(()=>({
  fontSize: 12,
}))

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
        <Box sx={{display:'flex',
        justifyContent: 'space-between',
        marginTop: 1}}>
      <Box display= 'flex'
      position='flex-start'>
        <Pass color='primary'>{PassedTests} Passed </Pass>
        <Fail>{FailedTests} Failed
        </Fail>
        </Box>
        <Box display= 'flex'
          position='flex-end'>
        <Button sx={{fontSize: 10, textTransform: 'none', padding: 0, display:'inline'}}>+ New</Button>
        </Box>
        </Box>
        
    </Box>

  </React.Fragment>
);
}
