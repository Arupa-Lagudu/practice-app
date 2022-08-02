import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { blueGrey } from '@mui/material/colors';

export const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
  })); 

export const StyledPaperwithHover = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    borderRadius: 10,
    "&:hover": {
      border: "2px solid #bbdefb",
      boxShadow: "0px 0px 10px 1px #bbdefb",
    }
  }));

  export const StyledPaperwithBC = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : blueGrey[50],
    padding: theme.spacing(0.1)
  }));

  export const StyledPaperwithBorder = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    height: 70,
    borderColor: "#bbdefb",
  }));