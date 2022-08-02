import { StyledPaperwithBC } from './Styles/Styled.Paper';
import TestHubList from './TestHub_List';

const TestHub= () =>{
  const drawerWidth = 180;
  return(
    <StyledPaperwithBC sx={{width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` }}} elevation={0}>
      <TestHubList />
    </StyledPaperwithBC>
  );
}

export default TestHub;