import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import { Box, createTheme, Paper } from '@mui/material';
import Badge from '@mui/material/Badge';
import FeedIcon from '@mui/icons-material/Feed';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import feeds from '../../data/feed.json';

export default function Actualites() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {feeds.map((feed) => (
          <ListItem key={feed.id} disablePadding>
            <ListItemButton>
              <div className='feed-container'>
                <FeedIcon />
                <div>
                  <span className='feed-item'>{feed.item}</span>
                  <span className='feed-message'>{feed.message}</span>
                  <span className='feed-target'>{feed.target}</span>
                </div>
              </div>
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const [newsFeed, setNewsFeed] = React.useState(4);
  return (
    <div>
      <div>
        <span className='title-actualites'>Actualités</span>
        <Button onClick={toggleDrawer('right', true)}>
          <Badge badgeContent={newsFeed} color='primary'>
            <FeedIcon color='action' />
          </Badge>
        </Button>
      </div>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        <div className='arrow-feed-container'>
          <div>Actualités</div>
          <ArrowForwardIosIcon onClick={toggleDrawer('right', false)} />
        </div>
        {list('right')}
      </Drawer>
    </div>
  );
}
