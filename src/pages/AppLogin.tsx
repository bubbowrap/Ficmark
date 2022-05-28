import { useContext } from 'react';
import StateContext from 'context/state-context';
import theme from 'styles/theme';
import { styled } from '@mui/material/styles';
import {
  GlobalStyles,
  Container,
  Box,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import Logo from 'assets/logo-ficmark.svg';

const LoginBox = styled(Box)`
  background: ${theme.palette.primary.main};
  border-radius: 10px;
  max-width: 480px;
  width: 100%;
  padding: 36px 44px 44px 44px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

const Heading = styled(Typography)`
  font-size: 64px;
  font-weight: 800;
`;

const LoginButton = styled(Button)`
  border-radius: 36px;
  background: ${theme.palette.background.default};
  padding: 14px;
  width: 100%;
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-transform: inherit;
  margin-bottom: 24px;

  &:hover {
    background: black;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const AppLogin = () => {
  const stateCtx = useContext(StateContext);
  return (
    <>
      <GlobalStyles
        styles={() => {
          return {
            body: {
              background:
                'linear-gradient(90deg, #2839BD 0.08%, #4D29C1 100%);',
              height: '100vh',
            },
          };
        }}
      />
      <Container
        component='main'
        maxWidth='lg'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <LoginBox>
          <img src={Logo} alt='FicMark Logo' style={{ maxWidth: '96px' }} />
          <Heading variant='h1'>FicMark</Heading>
          <Typography sx={{ fontSize: '20px' }}>
            Save your favorite AO3 queries.
          </Typography>
          <Divider sx={{ m: '24px' }} />
          <LoginButton onClick={() => stateCtx.login()}>
            Login with Google
          </LoginButton>
          <LoginButton>Login with Twitter</LoginButton>
          <LoginButton>Login with Username</LoginButton>
        </LoginBox>
      </Container>
    </>
  );
};

export default AppLogin;
