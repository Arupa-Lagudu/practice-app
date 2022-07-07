import * as React from 'react';
import {Chart,BarSeries,Legend, Tooltip} from '@devexpress/dx-react-chart-material-ui';
import {Animation, Stack, EventTracker } from '@devexpress/dx-react-chart';
import { Box } from '@mui/material';


const data = [
  { Files: '', Good: 30, Average: 7, Poor: 3 }
];

const Root = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);

export default function RotatedBar(){
    return (
        <Box>
        <Chart
          data={data}
          rotated
        >

          <BarSeries
            name='Good'
            valueField="Good"
            argumentField='Files'
            color='#4b9fea'
            barWidth={0.1}
          />

          <BarSeries
            name='Average'
            valueField="Average"
            argumentField='Files'
            color='#EF6C00'
            barWidth={0.1}
          />

          <BarSeries
            name='Poor'
            valueField="Poor"
            argumentField='Files'
            color='#AB47BC'
            barWidth={0.1}
          />


          <Animation />
          <Legend position="bottom" rootComponent={Root}/>

          <Stack
            stacks={[
              { series: ['Good', 'Average', 'Poor'] }
            ]}
          />

          <EventTracker />
          <Tooltip />
        </Chart>
        </Box>
    );
}
