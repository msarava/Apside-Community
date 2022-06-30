import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Jauge({ state }) {
  return (
    <Box sx={{ width: '80px' }}>
      <LinearProgress variant='determinate' value={state * 20} />
    </Box>
  );
}

export default Jauge;
