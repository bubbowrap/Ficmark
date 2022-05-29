import React, { useContext } from 'react';
import StateContext from 'context/state-context';
import theme from 'styles/theme';

import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const drawerWidth = 240;

const AppDrawer = () => {
  const stateCtx = useContext(StateContext);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: `${theme.palette.primary.dark}`,
          borderRight: 'none',
        },
      }}
      variant='persistent'
      anchor='left'
      open={stateCtx.drawerOpen}
    >
      <Toolbar />

      {/* <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader> 
      <Divider />*/}
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AppDrawer;
