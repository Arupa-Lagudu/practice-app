import * as React from 'react';
import Box from '@mui/material/Box';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItemText } from '@mui/material';
import { StyledPaper } from './Styles/Styled.Paper';
import { ButtonStyled } from './Styles/Styled.Button';

const connections= [{"DB":"Sql","connections":8},
              {"DB":"Snowflake","connections":4},
              {"DB":"My Sql","connections":2},
              {"DB":"Oracle","connections":9},];


export default function Connections() {
  return (
    <StyledPaper variant='outlined' sx={{borderRadius: 2, marginTop: 2}}>
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{display:'flex', 
              alignItems: 'center', 
              justifyContent:'center',
              paddingY: 3}}>
      <HubRoundedIcon  sx={{ color: grey[600]}}/>
      <Typography sx={{ color: grey[600], marginLeft: 1}} variant='h6' display='inline'>
        <b>06</b>
      </Typography>
      </Box>
      <Divider />
      <Box sx={{display:'flex'}}>
      {connections.map((connection)=>{
        return(
          <Box sx={{display:'flex', textAlign:'center'}}>
          <ListItemText sx={{paddingX: 2}}>
            <Typography sx={{fontSize: 12}}>{connection.DB}</Typography>
            <Typography sx={{fontSize: 15, color: grey[810]}}>
              <b>0{connection.connections}</b></Typography>
          </ListItemText> 
          <Divider orientation='vertical' sx={{display:'inline'}}/>
          </Box>
        )})}            
        <ButtonStyled>+ New</ButtonStyled>
      </Box>
    </Box>
    </StyledPaper>
  );
}
