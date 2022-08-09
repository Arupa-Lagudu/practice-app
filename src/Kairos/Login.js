
import Loginform from './Loginform';
import { StyledPaperwithBC } from './Styles/Styled.Paper';

const Login = () =>{
  return(
    <StyledPaperwithBC sx={{mt: 0.2,
    height: '100vh'}} elevation={0}>
      <Loginform />
    </StyledPaperwithBC>
  );
}

export default Login;