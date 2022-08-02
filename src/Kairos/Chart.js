import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CircleIcon from '@mui/icons-material/Circle';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Chart2 } from './Chart2';
import { StyledPaper } from './Styles/Styled.Paper';
import { Items } from './Styles/Styled.ListItem';
import { Fail, Smallfont } from './Styles/Styled.Typo';

export default function Chart() {
    const [value, setValue] = React.useState(null);
  return (
    <StyledPaper variant='outlined' sx={{borderRadius: 2, marginTop: 3, marginBottom: 15}}>
    <Box sx={{flexGrow: 1}}>
      <Box sx={{paddingY: 2, display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Typography sx={{marginLeft: 1, fontSize: 18}}>
        <b>Tests Executed in this given date range</b>
      </Typography>
      
      <Box sx={{display: 'flex',
                alignItems: 'center',
                justifyContent: "flex-end",}}>
      <Smallfont sx={{marginRight: 1}}>From Date</Smallfont>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
       <DatePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} size="small"/>}
      />
      </LocalizationProvider>
      <Smallfont sx={{marginLeft: 2, marginRight: 1}}>To Date</Smallfont>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} size="small"/>}
      />
      </LocalizationProvider>
      </Box>
      </Box>
      
      <Divider />

        <Box sx={{display:'flex',
                justifyContent: 'space-between',
                alignItems: 'center'}}>
          <Box sx={{display:'flex',
                    justifyContent: 'flex-start'}}>
            <Box sx={{paddingX: 1.5, marginTop: 3}}>
              <Smallfont>Tests </Smallfont>
              <Items>
                <b>03</b></Items>
              </Box> 
              <Box sx={{paddingX: 1.5, marginTop: 3}}>
                <Smallfont>Validations </Smallfont>
                <Items>
                  <b>06</b></Items>
              </Box> 
              <Box sx={{paddingX: 1.5, marginTop: 3}}>
                <Smallfont>Data Sources </Smallfont>
                <Items>
                  <b>20</b></Items>
              </Box> 
          </Box>
        
          <Box sx={{display: 'flex',
                justifyContent:'flex-end',
                marginTop: 3}}>
            <Box sx={{paddingX: 1.5}}>
            <Smallfont>Records Validated </Smallfont>
            <Items>
            <b>10</b></Items>
            </Box> 
            <Box sx={{marginRight: 3, marginLeft: 4, mt: 0.5}}>
              <Smallfont color= 'primary'>6 Passed
                <Fail
                sx={{marginLeft:1}} >0 Failed
              </Fail></Smallfont>
            </Box>
          </Box>
          </Box>

      <Box marginTop={2} paddingX={2} sx={{flexGrow: 1}}>
      <Box sx={{display:'flex', 
        alignItems: 'center',
        justifyContent: 'center' }}>
        <CircleIcon sx={{fontSize: 10, color: '#4b9fea'}} />
        <Smallfont color= '#4b9fea'sx={{marginLeft: 0.5, marginTop: 0.3}}> Passed</Smallfont>
        <CircleIcon sx={{color: '#f381a7', display:'inline', fontSize: 10, marginLeft: 1.5}} />
        <Fail sx={{marginLeft: 0.5, marginTop: 0.3}}> Failed</Fail>
      </Box>
        <Box marginTop={1}>
          <Chart2 />
        </Box>
      </Box>
    </Box>
    </StyledPaper>
  );
}
