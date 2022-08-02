
import Loginform from './Loginform';
import { StyledPaperwithBC } from './Styles/Styled.Paper';

const Connections = () =>{
  const drawerWidth = 180;
  return(
    <StyledPaperwithBC sx={{width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` },
    mt: 0.2,
    height: '100vh'}} elevation={0}>
      <Loginform />
    </StyledPaperwithBC>
  );
}

export default Connections;