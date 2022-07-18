import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleDataSource from './SingleDataSource';
import Comparative from './Comparative';

export default function DataSource() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item lg={4.8}>
            <SingleDataSource />
        </Grid>
        <Grid item lg={7.2}>
          <Comparative />
        </Grid>
      </Grid>
    </Box>
  );
}
