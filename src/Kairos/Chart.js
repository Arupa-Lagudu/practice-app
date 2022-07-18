import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { blueGrey, grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CircleIcon from '@mui/icons-material/Circle';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Chart2 } from './Chart2';
import { ListItem } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
})); 

const Items = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : blueGrey[50],
  fontSize: 13, 
  padding: 3, 
  textAlign: 'center', 
  color: grey[810],
  display: 'inline',
  borderRadius: 5

})); 


export default function Chart() {
    const [value, setValue] = React.useState(null);
  return (
    <Item variant='outlined' sx={{borderRadius: 2, marginTop: 3, marginBottom: 15}}>
    <Box sx={{flexGrow: 1}}>
      <Box sx={{paddingY: 2, display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Typography sx={{marginLeft: 1, fontSize: 18}}>
        <b>Tests Executed in this given date range</b>
      </Typography>
      
      <Box sx={{display: 'flex',
                alignItems: 'center',
                justifyContent: "flex-end",}}>
      <Typography sx={{ fontSize: 11, display: 'inline', marginRight: 1}}>From Date</Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
       <DatePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} size="small"/>}
      />
      </LocalizationProvider>
      <Typography sx={{fontSize: 11, display: 'inline', marginLeft: 2, marginRight: 1}}>To Date</Typography>
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
              <Typography sx={{fontSize: 11, textAlign: 'center', display: 'inline'}}>Tests </Typography>
              <Items>
                <b>03</b></Items>
              </Box> 
              <Box sx={{paddingX: 1.5, marginTop: 3}}>
                <Typography sx={{fontSize: 11, textAlign: 'center', display: 'inline'}}>Validations </Typography>
                <Items>
                  <b>06</b></Items>
              </Box> 
              <Box sx={{paddingX: 1.5, marginTop: 3}}>
                <Typography sx={{fontSize: 11, textAlign: 'center', display: 'inline'}}>Data Sources </Typography>
                <Items>
                  <b>20</b></Items>
              </Box> 
          </Box>
        
          <Box sx={{display: 'flex',
                justifyContent:'flex-end',
                marginTop: 3}}>
            <Box sx={{paddingX: 1.5}}>
            <Typography sx={{fontSize: 11, textAlign: 'center', display: 'inline'}}>Records Validated </Typography>
            <Items>
            <b>10</b></Items>
            </Box> 
            <Box sx={{marginRight: 3, marginLeft: 4, mt: 0.5}}>
              <Typography color= 'primary'
                sx={{fontSize: 11,}}>6 Passed
                <Typography color= '#f381a7' display='inline'
                sx={{fontSize: 11,marginLeft:1}} >0 Failed
              </Typography></Typography>
            </Box>
          </Box>
          </Box>

      <Box marginTop={2} paddingX={2} sx={{flexGrow: 1}}>
      <Box sx={{display:'flex', 
        alignItems: 'center',
        justifyContent: 'center' }}>
        <CircleIcon sx={{fontSize: 10, color: '#4b9fea'}} />
        <Typography color= '#4b9fea'sx={{fontSize: 11,marginLeft: 0.5, marginTop: 0.3}}> Passed</Typography>
        <CircleIcon sx={{color: '#f381a7', display:'inline', fontSize: 10, marginLeft: 1.5}} />
        <Typography color= '#f381a7'sx={{fontSize: 11,marginLeft: 0.5, marginTop: 0.3}}> Failed</Typography>
      </Box>
        <Box marginTop={1}>
          <Chart2 />
        </Box>
      </Box>
    </Box>
    </Item>
  );
}
