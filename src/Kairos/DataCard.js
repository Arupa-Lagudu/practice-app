import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const PassedTests = 6;
const FailedTests = 0;

export default function DataCard() {
  return(
  <React.Fragment>
    <Box>
      <List>
        {[22, 7, 22, 20 ].map((text, index) => (
          <ListItem key={text} 
          sx={{fontSize: 12,
          backgroundColor: '#eceff1',
          margin: 0.3,
          marginTop: 0.5,
          borderRadius: 1.5}}>
            {['Tests', 'Validations', 'Records Validations', 'Data Sources'].at(index)}
            <b style={{marginLeft:5}}>{text}</b>
          </ListItem>
        ))}
      </List>
      <Box display= 'flex'
      position='sticky'>
        <Typography color= 'primary'
        sx={{fontSize: 12,}}>{PassedTests} Passed
        <Typography color= '#f381a7' display='inline'
        sx={{fontSize: 12,marginLeft:1}} >{FailedTests} Failed
        </Typography></Typography>
        <Button sx={{fontSize: 10, textTransform: 'none', padding: 0,marginLeft: 4.9}}>+ New</Button>
        </Box>
    </Box>

  </React.Fragment>
);
}
