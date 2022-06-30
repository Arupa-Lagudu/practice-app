import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import DataChart from './DataChart';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
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
      <Typography sx={{ fontSize: 12, display: 'inline', marginRight: 1}}>From Date</Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
       <DatePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} size="small"/>}
      />
      </LocalizationProvider>
      <Typography sx={{fontSize: 12, display: 'inline', marginLeft: 2, marginRight: 1}}>To Date</Typography>
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
              <Typography sx={{fontSize: 12, textAlign: 'center', display: 'inline'}}>Tests </Typography>
              <Typography sx={{fontSize: 14, padding: 0.5, textAlign: 'center', color: grey[810], 
              display: 'inline', backgroundColor: '#eceff1', borderRadius: 1}}>
                <b>03</b></Typography>
              </Box> 
              <Box sx={{paddingX: 1.5, marginTop: 3}}>
                <Typography sx={{fontSize: 12, textAlign: 'center', display: 'inline'}}>Validations </Typography>
                <Typography sx={{fontSize: 14, padding: 0.5, textAlign: 'center', color: grey[810], display: 'inline', backgroundColor: '#eceff1',borderRadius: 1}}>
                  <b>06</b></Typography>
              </Box> 
              <Box sx={{paddingX: 1.5, marginTop: 3}}>
                <Typography sx={{fontSize: 12, textAlign: 'center', display: 'inline'}}>Data Sources </Typography>
                <Typography sx={{fontSize: 14, padding: 0.5, textAlign: 'center', color: grey[810], display: 'inline', backgroundColor: '#eceff1',borderRadius: 1}}>
                  <b>20</b></Typography>
              </Box> 
          </Box>
        
          <Box sx={{display: 'flex',
                justifyContent:'flex-end',
                marginTop: 3}}>
            <Box sx={{paddingX: 1.5}}>
            <Typography sx={{fontSize: 12, textAlign: 'center', display: 'inline'}}>Records Validated </Typography>
            <Typography sx={{fontSize: 14, padding: 0.5, textAlign: 'center', color: grey[810],
            display: 'inline', backgroundColor: '#eceff1', borderRadius: 1}}>
            <b>10</b></Typography>
            </Box> 
            <Box sx={{marginRight: 3, marginLeft: 4}}>
              <Typography color= 'primary'
                sx={{fontSize: 12,}}>6 Passed
                <Typography color= '#f44336' display='inline'
                sx={{fontSize: 12,marginLeft:1}} >0 Failed
              </Typography></Typography>
            </Box>
          </Box>
          </Box>

      <Box padding={2}>
        <DataChart />
      </Box>
    </Box>
    </Item>
  );
}
