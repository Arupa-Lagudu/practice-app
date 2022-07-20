import {Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import QualityBar from './QualityBar';
import ConsFiles from './ConsFiles';
import Chart from './Chart';
import DataSource from './DataSource';
import { blueGrey } from '@mui/material/colors';
import styled from '@emotion/styled';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : blueGrey[50],
  padding: theme.spacing(0.1),
  marginTop: 1,
}));

const DashBoard = () =>{
  const drawerWidth = 180;
  return(
    <Item sx={{width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` }}}>
      <QualityBar />
      <Box sx={{ml: 6, mt:4, mr: 4}}>
        <Typography 
        variant='h6'
        component='h5'>
         <b>Data Quality</b>
        </Typography>
          <DataSource />
          <ConsFiles />
          <Chart />
          {/* <RotatedBar2 /> */}
      </Box>
      {/* <Box> */}
        {/* <Counter /> */}
        {/* <UseContext /> */}
        {/* <UseMemo /> */}
        {/* <UseCallback /> */}
      {/* </Box> */}
    
    </Item>
  )
}

export default DashBoard;