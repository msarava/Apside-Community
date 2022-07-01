import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function JaugeXL({ state }) {
  return (
    <LinearProgress
      sx={{ height: '20px' }}
      variant='determinate'
      value={state * 20}
    />
  );
}

export default JaugeXL;
