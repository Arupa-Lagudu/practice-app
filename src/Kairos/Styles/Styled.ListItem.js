import { styled } from '@mui/material/styles';
import { ListItem } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

export const Items = styled(ListItem)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : blueGrey[50],
    fontSize: 13, 
    padding: 3, 
    textAlign: 'center', 
    color: grey[810],
    display: 'inline',
    borderRadius: 5
  
  })); 

export const DataCardItems = styled(ListItem)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : blueGrey[50],
    padding: theme.spacing(1),
    marginTop: 2,
    fontSize: 12,
    borderRadius: 5,
  })); 