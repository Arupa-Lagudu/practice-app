import styled from '@emotion/styled';
import ListItemButton from '@mui/material/ListItemButton';
import { blueGrey} from '@mui/material/colors';
import { ListItem } from '@mui/material';

export const LIB = styled(ListItemButton)(() => ({
    "&:hover": {
        backgroundColor: '#0277bd',
      },
      "&:selected": {
        backgroundColor: "#0277bd",
      }
  })); 

export const LI = styled(ListItem)(({ theme }) => ({
    ...theme.typography.body2,
    "&:hover": {
        backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : '#0277bd',
        boxShadow: "0px 0px 5px 1px #9e9e9e",
      }
  })); 
  