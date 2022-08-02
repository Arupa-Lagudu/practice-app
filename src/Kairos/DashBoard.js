import {Typography } from '@mui/material';
import Box from '@mui/material/Box';
import QualityBar from './QualityBar';
import ConsFiles from './ConsFiles';
import Chart from './Chart';
import DataSource from './DataSource';
import {StyledPaperwithBC } from './Styles/Styled.Paper';

const DashBoard = () =>{
  const drawerWidth = 180;
  return(
    <StyledPaperwithBC sx={{width: { sm: `calc(100% - ${drawerWidth}px)` },
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
    
    </StyledPaperwithBC>
  )
}

export default DashBoard;