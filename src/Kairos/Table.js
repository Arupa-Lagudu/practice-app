import React from 'react';
import { ListItem} from '@mui/material';
import { LI } from './Styles/Styled.LIB';

export default function DataTable(prop) {
  const {data} = prop;
  return (
    
     data.map((row) =>(
      <LI>
      {Object.entries(row).map(([key, value])=>( 
       <ListItem><b style={{color: '#b0bec5', marginRight: 10}}>{key}:</b> {value}</ListItem>
      ))}
      </LI>
      ))

  );
}
