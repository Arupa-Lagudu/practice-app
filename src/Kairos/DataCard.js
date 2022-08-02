import * as React from 'react';
import Box from '@mui/material/Box';
import { DataCardItems } from './Styles/Styled.ListItem';
import { ButtonStyled } from './Styles/Styled.Button';
import { Fail, Smallfont } from './Styles/Styled.Typo';

const PassedTests = 6;
const FailedTests = 0;

export default function DataCard() {
  return(
  <React.Fragment>
    <Box marginTop={1.5}>
        {[22, 7, 22, 20 ].map((text, index) => (
          <DataCardItems key={text}>
            {['Tests', 'Validations', 'Records Validations', 'Data Sources'].at(index)}
            <b style={{marginLeft: 5}}>{text}</b>
          </DataCardItems>
        ))}
        <Box sx={{display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 1}}>
      <Box display= 'flex'
      position='flex-start'>
        <Smallfont color='primary'>{PassedTests} Passed </Smallfont>
        <Fail>{FailedTests} Failed
        </Fail>
        </Box>
        <Box display= 'flex'
          position='flex-end'>
            <ButtonStyled>+ New</ButtonStyled>
        </Box>
        </Box>
        
    </Box>

  </React.Fragment>
);
}
