import React, { useContext } from 'react';
import StateContext from 'context/state-context';
import { styled } from '@mui/material/styles';

import AppHeader from './AppHeader';
import AppDrawer from './AppDrawer';

interface LayoutProps {
  style?: object;
  children?: React.ReactNode;
}

const drawerWidth = 240;

const Main = styled('main', {
  shouldForwardProp: (prop: any) => prop !== 'open',
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  }),
}));

const AppLayout: React.FC<LayoutProps> = ({ children, style }) => {
  const stateCtx = useContext(StateContext);

  return (
    <div style={style}>
      <AppHeader />
      <AppDrawer />
      <Main open={stateCtx.drawerOpen}>{children}</Main>
    </div>
  );
};

export default AppLayout;
