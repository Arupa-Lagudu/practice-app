import styled from '@emotion/styled';
import {Box, Paper, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import Canvas from './Canvas';
import OImage from './Images/Original.jpeg'
import MImage from './Images/Modified.jpeg'
import data from './Data/sample.json'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : blueGrey[50],
  padding: theme.spacing(2),
}));

const drawLabel = (context,info, label) => {
  const ctx = context; 
  const { x, y, w, h } = info;
  const Label = label;

  ctx.fillStyle = "black";
  ctx.font = "bold 25px Arial";
  ctx.fillText(Label, x+(w/2) , y+(h/2));

}

const drawRect = (context, info) => {
    const ctx = context;    
    const { x, y, w, h } = info;
 
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 100, 150, 0.4)';
    ctx.fillRect(x, y, w, h);
  }

const draw = (ctx) => {
  const image1 = new Image();
  image1.src = OImage;
  image1.onload = () => {
    ctx.drawImage(image1, 0, 500 );
  };

  const image2 = new Image();
  image2.src = MImage;
    image2.onload = () => {
      ctx.drawImage(image2, 0, 0);
      
    Object.values(data.Object_Differences).map((diff)=>{
      let Info = { x: diff.x, y: diff.y, w: diff.width, h: diff.height };
      return(
      <div>
      {drawRect(ctx, Info)}
      {drawLabel(ctx, Info, diff.Label)}
      </div>
      );
      })

  };
  
    
    
};
  

const ImageDiff= () =>{
  const drawerWidth = 180;
  return(
    <Item sx={{width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` }, mt: 0.1}} elevation={0}>
      <Box
      sx={{ display:'flex',
      alignContent: 'center',
      justifyContent: 'center',
      }}>
        <Typography component='h6' variant='h6'>Total Differences Count:  <b style={{color: 'rgb(255, 0, 0)'}}>{data.Differences.Total_Differences_Count}</b></Typography>
      </Box>
      <Box 
      sx={{ display:'flex',
            alignContent: 'center',
            justifyContent: 'center',
      }}>
        <Canvas draw={draw} height={1000} width={800}/>
      </Box>      
    </Item>
  );
}

export default ImageDiff;