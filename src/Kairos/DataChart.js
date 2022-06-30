import * as React from 'react';
import {Chart,BarSeries,ArgumentAxis,ValueAxis, Legend, Tooltip} from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation, Stack, EventTracker } from '@devexpress/dx-react-chart';
import { scaleBand } from '@devexpress/dx-chart-core';


const data = [
  { Date: '26/05', passed: 35, failed: 15 },
  { Date: '25/05', passed: 28, failed: 20 },
  { Date: '24/05', passed: 15, failed: 5 },
  { Date: '23/05', passed: 20, failed: 10 },
  { Date: '22/05', passed: 0, failed: 0 },
  { Date: '21/05', passed: 0, failed: 0 },
  { Date: '20/05', passed: 0, failed: 0 },
  { Date: '19/05', passed: 0, failed: 0 }   
];

const Root = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);

export default function DataChart(){
    return (
        <Chart
          data={data}
        >
          <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
          <ValueAxis/>

          <BarSeries
            name='Passed'
            valueField="passed"
            argumentField="Date"
            color='#4b9fea'
            barWidth={0.7}

          />

          <BarSeries
            name='Failed'
            valueField="failed"
            argumentField="Date"
            color='#f381a7'
            barWidth={0.7}
          />

          <Animation />
          <Legend position="top" rootComponent={Root}/>

          <Stack
            stacks={[
              { series: ['Passed', 'Failed'] }
            ]}
          />

          <EventTracker />
          <Tooltip />
        </Chart>
    );
}
