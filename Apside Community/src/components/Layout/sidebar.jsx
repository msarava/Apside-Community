import { Button, Link } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import CreateIcon from '@mui/icons-material/Create';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import LinkBehavior from '../LinkBehavior';

function Sidebar() {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className='sidebar'>
      <div className='list-menu-container'>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              {/* Menu */}
            </ListSubheader>
          }
        >
          <Link component={LinkBehavior} to='/' underline='none' color='black'>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Accueil' />
            </ListItemButton>
          </Link>
          <Link component={LinkBehavior} to='/projects' underline='none'color='black'>
            <ListItemButton>
              <ListItemIcon>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary='Mes projets' />
            </ListItemButton>
          </Link>
          <Link component={LinkBehavior} to='/favorites' underline='none'color='black'>
            <ListItemButton>
              <ListItemIcon>
                <FolderSpecialIcon />
              </ListItemIcon>
              <ListItemText primary='Mes Favoris' />
            </ListItemButton>
          </Link>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ManageSearchIcon />
            </ListItemIcon>
            <ListItemText primary='Recherche' />
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
          </ListItemButton>
          {/* <Collapse in={open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding> */}
          <Link component={LinkBehavior} to='/' underline='none'color='black'>
            <ListItemButton
              style={{
                fontSize: 25,
              }}
              sx={{ pl: 6 }}
            >
              <ListItemIcon>
                <ContentPasteSearchIcon />
              </ListItemIcon>
              <ListItemText primary='Projets' />
            </ListItemButton>{' '}
          </Link>
          <Link component={LinkBehavior} to='/' underline='none'color='black'>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                <PersonSearchIcon />
              </ListItemIcon>
              <ListItemText primary='Collaborateurs' />
            </ListItemButton>
          </Link>
          <Link component={LinkBehavior} to='/' underline='none'color='black'>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                <TravelExploreIcon />
              </ListItemIcon>
              <ListItemText primary='Agences' />
            </ListItemButton>
          </Link>
          {/* </List>
          </Collapse> */}
        </List>
      </div>
      <div className='btn-create-container'>
        <Button size='small' variant='outlined' startIcon={<CreateIcon />}>
          + Créer un projet
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
