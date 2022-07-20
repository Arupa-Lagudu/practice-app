import styled from '@emotion/styled';
import {Paper } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import TestHubList from './TestHub_List';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : blueGrey[50],
  height: 'auto'
}));

const TestHub= () =>{
  const drawerWidth = 180;
  return(
    <Item sx={{width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` }}} elevation={0}>
      <TestHubList />
    </Item>
  );
}

export default TestHub;