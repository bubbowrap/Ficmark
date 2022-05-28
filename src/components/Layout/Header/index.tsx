import React, { useContext } from 'react';
import StateContext from 'context/state-context';

import { styled } from '@mui/material/styles';

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Avatar,
  MenuItem,
  Menu,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

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

const Header = () => {
  const stateCtx = useContext(StateContext);
  return (
    <AppBar position='static' sx={{ padding: '4px 0' }} enableColorOnDark>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{ mr: { xs: 1, md: 2 } }}
        >
          <MenuIcon />
        </IconButton>
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
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButtonNoHover
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
          >
            <Badge badgeContent={4} color='error'>
              <MailIcon />
            </Badge>
          </IconButtonNoHover>
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

export default Header;
