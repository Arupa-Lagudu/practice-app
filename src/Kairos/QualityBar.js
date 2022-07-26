import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import BarChart from './BarChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  height: 70,
  borderColor: "#bbdefb",
}));

export default function QualityBar() {
    const TotalTests = 25;
    const ValidTests = 15;
    const RecordsValidated = 30;
    const PassedTests = 30;
    const FailedTests = 0;
    const DataSources = 45;
  return (
      <Grid container sx={{boxShadow: "0px 0px 15px 0px #bbdefb"}}>
        <Grid item lg={2} xs={12}>
          <Item variant='outlined' square borderColor="primary.main">
          <Typography
            variant='body2'
            component="h6"
            color="primary"
            textAlign="center"
            marginTop={1}>
            <b>Overall Data Quality</b>
          </ Typography>
          </Item>
        </Grid>
        <Grid item lg={5.5} xs={12}>
          <Item variant='outlined' square >
            <Grid container>
              <Grid item xs={3}>
          <Typography
          variant='body2'
          component="h6"
          >
            <b>Data Sources: </b>
          </Typography>
          <Typography
          sx={{fontSize: 12}}
          >
          No of Data Sources: <Typography sx={{fontSize: 14}} color="primary" display="inline"><b>{DataSources}</b></Typography>
          </Typography>
          </Grid>
          <Grid item xs={9} 
          alignItems= 'center'>
            <Box>
            <BarChart />
          </Box>
          </Grid>
          </Grid>
        </Item>
        </Grid>
        <Grid item lg={1} xs={6}>
          <Item variant='outlined' square> 
            <Typography
            variant='body2'
            component="h6"
            >
            <b>Tests </b>
            </Typography>
            <Typography
            sx={{fontSize: 12}}
            >
              No of Tests: <Typography sx={{fontSize: 14}} color="primary" display="inline"><b>{TotalTests}</b></Typography>
            </Typography>
          </Item>
        </Grid>
        <Grid item lg={1} xs={6}>
          <Item variant='outlined' square>
            <Typography
            variant='body2'
            component="h6"
            >
              <b>Validation</b>
            <Typography
            sx={{fontSize: 12}}
            >
              No of Tests: <Typography sx={{fontSize: 14}} color="primary" display="inline"><b>{ValidTests}</b></Typography>
            </Typography>
            </Typography>
          </Item>
        </Grid>
        <Grid item lg={2.5} xs={12}>
          <Item variant='outlined' square>
          <Typography
          variant='body2'
          component="h6"
          >
          <b>No of Records Records Validated: </b><Typography variant='body2' color="primary" display="inline"><b>{RecordsValidated}</b></Typography>
          </Typography>
        <Typography sx={{fontSize: 12}} color="primary" display="inline"
        >{PassedTests} Passed  </Typography>
        <Typography sx={{fontSize: 12}} color="#f381a7" display="inline"> {FailedTests} Failed</Typography>
        </Item>
        </Grid>
      </Grid>
  );
}