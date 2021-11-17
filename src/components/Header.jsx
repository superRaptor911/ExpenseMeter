import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {ROUTES} from '../Routes';
import {useStore, useUiStore} from '../store';

const getLocationName = path => {
  for (const i in ROUTES) {
    if (ROUTES[i] === path) {
      return i;
    }
  }
  return '';
};

const Header = () => {
  const location = useLocation();
  const toggleSideBar = useUiStore(state => state.toggleSideBar);
  const cred = useStore(state => state.credential);
  const setCred = useStore(state => state.setCred);
  const history = useHistory();

  const handleLogout = () => {
    setCred(null);
    history.push(ROUTES.login);
  };

  const onLoginClick = () => {
    history.push(ROUTES.login);
  };

  const onTitleClick = () => {
    history.push(cred ? ROUTES.dashboard : ROUTES.home);
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          {cred && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleSideBar}
              sx={{mr: 2}}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            onClick={onTitleClick}
            sx={{flexGrow: 1, textTransform: 'capitalize', cursor: 'pointer'}}>
            {cred
              ? getLocationName(location && location.pathname)
              : 'Expense Meter'}
          </Typography>
          {cred ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={onLoginClick}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
