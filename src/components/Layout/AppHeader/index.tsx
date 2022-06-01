import React, { useContext } from 'react';
import StateContext from 'context/state-context';
import theme from 'styles/theme';
import { styled } from '@mui/material/styles';

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Avatar,
  Button,
  MenuItem,
  Menu,
} from '@mui/material';

import ArrowLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import PlusIcon from '@mui/icons-material/Add';

import Logo from 'assets/logo-ficmark.svg';
import UserImage from 'assets/user-image.jpg';

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;

  img {
    max-width: 48px;
    margin-right: 8px;
  }
`;

const IconButtonNoHover = styled(IconButton)`
  &:hover {
    background: none;
  }
`;

const WhiteButton = styled(Button)`
  border-radius: 36px;
  background: white;
  padding: 6px 18px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.palette.primary.main};
  text-transform: inherit;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);

  &:hover {
    background: rgba(255, 255, 255, 0.85);
  }
`;

const AppHeader = () => {
  const stateCtx = useContext(StateContext);
  return (
    <AppBar
      position='relative'
      sx={{ padding: '4px 0', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      enableColorOnDark
      elevation={0}
    >
      <Toolbar>
        {stateCtx.drawerOpen ? (
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='close drawer'
            sx={{ mr: { xs: 1, md: 2 } }}
            onClick={() => stateCtx.closeDrawer()}
          >
            <ArrowLeftIcon />
          </IconButton>
        ) : (
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: { xs: 1, md: 2 } }}
            onClick={() => stateCtx.openDrawer()}
          >
            <MenuIcon />
          </IconButton>
        )}
        <LogoContainer>
          <img src={Logo} alt='FicMark Logo' />
          <Typography
            variant='h4'
            noWrap
            component='h1'
            sx={{
              display: { xs: 'none', sm: 'inline-block' },
              fontWeight: '800',
            }}
          >
            FicMark
          </Typography>
        </LogoContainer>

        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search> */}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <WhiteButton startIcon={<PlusIcon />}>New FicMark</WhiteButton>
          <IconButtonNoHover
            size='large'
            aria-label='show 17 new notifications'
            color='inherit'
          >
            <Badge badgeContent={17} color='error'>
              <NotificationsIcon />
            </Badge>
          </IconButtonNoHover>
          <IconButtonNoHover
            size='large'
            edge='end'
            aria-label='account of current user'
            aria-haspopup='true'
            color='inherit'
            onClick={() => stateCtx.logout()}
          >
            <Avatar
              alt='Booker James'
              src={UserImage}
              sx={{ maxWidth: '32px', height: '32px' }}
            />
          </IconButtonNoHover>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton
            size='large'
            aria-label='show more'
            aria-haspopup='true'
            color='inherit'
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
