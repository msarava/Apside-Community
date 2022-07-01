import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Jauge({ state, height="5px" }) {
  return (
    <Box sx={{ width: '80px' }}>
      <LinearProgress variant='determinate' value={state * 20} sx={{height:{height}}} />
    </Box>
  );
}

export default Jauge;
