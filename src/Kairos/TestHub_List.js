import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ListItem} from '@mui/material';
import data from './Data/scan-json-request.json'
import Divider from '@mui/material/Divider';
import { styled } from '@mui/styles';
import { blueGrey } from '@mui/material/colors';
import DataTable from './Table';

const LI = styled(ListItem)(({ theme }) => ({
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
      {console.log(Object.keys(data).length)}
      {Object.entries(data).map(([key, value]) =>(
        console.log(key, value)
      ))}
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
        <DataTable data={data.Test.DataFetched} />
      </Collapse>
      </Collapse>
      <LI onClick={()=>{setOpen({SDopen: !open.SDopen})}}>
        {open.SDopen ? <RemoveIcon  fontSize='small'/> : <AddIcon fontSize='small'/>}
        <ListItemText sx={{ml:3}} primary="SampleData" />
      </LI>
      <Divider variant="fullWidth" component="li" />
        <Collapse in={open.SDopen} timeout="auto" unmountOnExit>
        <DataTable data={data.SampleData} />
        </Collapse>      
    </List>
  );
}
