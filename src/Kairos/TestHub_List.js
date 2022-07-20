import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ListItem} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import data from './Data/scan-json-request.json'
import Divider from '@mui/material/Divider';
import { styled } from '@mui/styles';
import { blueGrey } from '@mui/material/colors';

const LI = styled(ListItem)(({ theme }) => ({
    ...theme.typography.body2,
    "&:hover": {
        backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : '#0277bd',
        boxShadow: "0px 0px 5px 1px #9e9e9e",
      }
  })); 

  const TB = styled(TableBody)(({ theme }) => ({
    ...theme.typography.body2,
    "&:hover": {
        backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : '#0277bd',
        boxShadow: "0px 0px 5px 1px #9e9e9e",
      }
  })); 

export default function TestHubList() {
  const [open, setOpen] = React.useState({Testopen: false, DFopen: false, SDopen: false});


  return (
    <List sx={{bgcolor: 'background.paper',padding: 0, mt: 2}}>
      <LI>
        <ListItemText primary={data.Name} />
      </LI>
      <Divider variant="fullWidth" component="li" />
      <LI onClick={()=>{setOpen({Testopen: !open.Testopen})}}>
        {open.Testopen ? <RemoveIcon  fontSize='small'/> : <AddIcon fontSize='small'/>}
        <ListItemText sx={{ml:3}} primary="Test" />
      </LI>
      <Divider variant="fullWidth" component="li" />
      <Collapse in={open.Testopen} timeout="auto" unmountOnExit>
      <LI sx={{paddingX: 5}} onClick={()=>{setOpen({Testopen: open.Testopen, DFopen: !open.DFopen})}}>
        {open.DFopen ? <RemoveIcon  fontSize='small'/> : <AddIcon fontSize='small'/>}
        <ListItemText sx={{ml:3}} primary="DataFetched" />
      </LI>
      <Divider variant="fullWidth" component="li" />
      <Collapse in={open.DFopen} timeout="auto" unmountOnExit>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Salary</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>

          {data.Test.DataFetched.map((row) => (
          <TB>
            <TableCell align="right" >{row.Id}</TableCell>
            <TableCell align="right">{row.FirstName}</TableCell>
            <TableCell align="right">{row.LastName}</TableCell>
            <TableCell align="right">{row.Age}</TableCell>
            <TableCell align="right">{row.Salary}</TableCell>
            <TableCell align="right">{row.Email}</TableCell>
            </TB>
           ))}
        </Table>
      </Collapse>
      </Collapse>
      <LI onClick={()=>{setOpen({SDopen: !open.SDopen})}}>
        {open.SDopen ? <RemoveIcon  fontSize='small'/> : <AddIcon fontSize='small'/>}
        <ListItemText sx={{ml:3}} primary="SampleData" />
      </LI>
      <Divider variant="fullWidth" component="li" />
        <Collapse in={open.SDopen} timeout="auto" unmountOnExit>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Salary</TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
            {data.SampleData.map((row) => (
            <TB>
              <TableCell align="right" >{row.Id}</TableCell>
              <TableCell align="right">{row.FirstName}</TableCell>
              <TableCell align="right">{row.LastName}</TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Salary}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
            </TB>
            ))}
          </Table>
        </Collapse>      
    </List>
  );
}
