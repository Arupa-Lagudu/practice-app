import React from 'react';
import { blueGrey } from '@mui/material/colors';
import { styled } from '@mui/styles';
import { ListItem} from '@mui/material';

const LI = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body2,
  "&:hover": {
      backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : '#0277bd',
      boxShadow: "0px 0px 5px 1px #9e9e9e",
    }
})); 

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
