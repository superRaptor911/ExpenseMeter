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
import CategoryIcon from '@mui/icons-material/Category';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';

const Items = [
  {name: 'Dashboard', path: ROUTES.dashboard, icon: DashboardIcon},
  {name: 'Transactions', path: ROUTES.transactions, icon: LocalAtmIcon},
  {name: 'Categories', path: ROUTES.categories, icon: CategoryIcon},
  {name: 'Summary', path: ROUTES.summary, icon: SummarizeIcon},
];

const SideDrawer = () => {
  const showSideBar = useUiStore(state => state.showSideBar);
  const toggleSideBar = useUiStore(state => state.toggleSideBar);
  const history = useHistory();

  return (
    <Drawer open={showSideBar} onClose={toggleSideBar}>
      <List>
        {Items.map((item, id) => (
          <ListItem key={id} sx={{padding: 0}}>
            <ListItemButton
              onClick={() => {
                history.push(item.path);
                toggleSideBar();
              }}>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export default SideDrawer;
