import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import DataCard from './DataCard';
import QualityBar from './QualityBar';
import Card from '@mui/material/Card';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import CardContent from '@mui/material/CardContent';
import ConsFiles from './ConsFiles';
import Chart from './Chart';
import { RotatedBar2 } from './RotatedBar2';
import Counter from './Hooks/UseReducer';
import UseContext from './Hooks/UseContext';
import UseMemo from './Hooks/UseMemo';
import UseCallback from './Hooks/UseCallback';
const DashBoard = () =>{
    const drawerWidth = 180;
  return(  
    <Box 
    sx={{
    width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` },
    marginTop: 1,
    backgroundColor: '#f8f9fa'
    }}>
      <QualityBar />
      <Box sx={{ml: 8, mt:4}}>
        <Typography 
        variant='h6'
        component='h5'>
         <b>Data Quality</b>
        </Typography>
        <Box>
        <Typography 
        variant='body1'
        component='h6'
        color='primary'
        marginLeft={0.5}
        marginTop={2}>
          Single Data Source
          <Typography 
          variant='body1'
          component='h6'
          color='primary'
          marginLeft={47}
          marginTop={2}
          display='inline'>
          Comparative
          </Typography>
        </Typography>

        <Box
        sx={{display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',}}> 
        {['DB', 'File' ].map((cat, index) => (
              <Card variant='outlined' sx={{borderRadius: 2, minWidth: 232, marginRight: 1.5, marginTop: 1.5 }}>
                <CardContent >
                  <Box 
                  sx={{display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'row' }}>
                    {[<StorageRoundedIcon color='primary'/>, <InsertDriveFileRoundedIcon color='primary'/>].at(index)}
                    <Typography variant="body1" component="h6" marginLeft={1} marginTop={0.3}>
                      <b>{cat}</b>
                    </Typography>
                  </Box>
                    <DataCard />
                </CardContent>
              </Card>
            ))}
            <Box marginLeft={2}
            sx={{display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'row' }}>
            {['DB', 'File-DB', 'File-DB' ].map((cat, index) => (
      <Card variant='outlined' sx={{borderRadius: 2, minWidth: 232, marginRight: 1.5, marginTop: 1.5}}>
        <CardContent >
          <Box 
          sx={{display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'row' }}>
            {[<StorageRoundedIcon color='primary'/>, <InsertDriveFileRoundedIcon color='primary'/>,<InsertDriveFileRoundedIcon color='primary'/>].at(index)}
            <Typography variant="body1" component="h6" marginLeft={1} marginTop={0.3}>
              <b>{cat}</b>
            </Typography>
          </Box>
            <DataCard />
        </CardContent>
      </Card>
    ))}
    </Box>
          </Box>
          </Box>
          <ConsFiles />
          <Chart />
          <RotatedBar2 />
      </Box>
      <Box>
        <Counter />
        <UseContext />
        <UseMemo />
        <UseCallback />
      </Box>
    
    </Box>
  )
}

export default DashBoard;