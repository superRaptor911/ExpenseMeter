import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import {useUiStore} from '../store';
import {ROUTES} from '../Routes';
import {useHistory} from 'react-router-dom';

const Items = [
  {name: 'Dashboard', path: ROUTES.dashboard},
  {name: 'Transactions', path: ROUTES.transactions},
  {name: 'Categories', path: ROUTES.categories},
  {name: 'Summary', path: ROUTES.summary},
];

const SideDrawer = () => {
  const showSideBar = useUiStore(state => state.showSideBar);
  const toggleSideBar = useUiStore(state => state.toggleSideBar);
  const history = useHistory();

  return (
    <Drawer open={showSideBar} onClose={toggleSideBar} sx={{minWidth: 300}}>
      <List>
        {Items.map((item, id) => (
          <ListItem key={id}>
            <ListItemButton
              onClick={() => {
                history.push(item.path);
                toggleSideBar();
              }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export default SideDrawer;
