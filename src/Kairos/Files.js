import * as React from 'react';
import Box from '@mui/material/Box';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItemText } from '@mui/material';
import { StyledPaper } from './Styles/Styled.Paper';
import { ButtonStyled } from './Styles/Styled.Button';

const files= [{"Filetype":"Csv","Files":6},
              {"Filetype":"Txt","Files":7},
              {"Filetype":"Xls","Files":5},
              {"Filetype":"Xls","Files":6},];


export default function Files() {
  return (
    <StyledPaper variant='outlined' sx={{borderRadius: 2, marginTop: 2}}>
    <Box>
      <Box sx={{display:'flex', alignItems: 'center',justifyContent:'center', paddingY: 3}}>
      <FolderOpenRoundedIcon  sx={{ color: grey[600]}}/>
      <Typography sx={{ color: grey[600], marginLeft: 1}} variant='h6' display='inline'>
        <b>04</b>
      </Typography>
      </Box>
      <Divider />
      <Box sx={{display:'flex'}}>
      {files.map((File)=>{
        return(
          <Box sx={{display:'flex'}}>
          <ListItemText sx={{paddingX: 2}}>
            <Typography sx={{fontSize: 12, textAlign: 'center'}}>{File.Filetype}</Typography>
            <Typography sx={{fontSize: 15, textAlign: 'center', color: grey[810]}}> <b>0{File.Files}</b></Typography>
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
