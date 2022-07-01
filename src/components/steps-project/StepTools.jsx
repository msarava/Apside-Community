import React from 'react';
import { Grid, Typography } from '@mui/material';

function StepTools() {
  return (
    <Grid
      container
      component='form'
      sx={{
        '& > :not(style)': {
          m: 4,
          maxWidth: '100%',
          display: 'flex',
        },
      }}
    >
     <Grid container xs={12}>
        <Typography
          item
          variant='h3'
          sx={{
            fontSize: '1.5rem',
            fontWeight: '100',
            color: 'gray',
            textAlign: 'center',
            width: '100%',
          }}
        >
          Etapes Intermédiaires...
        </Typography>
      </Grid>
    </Grid>
  );
}

export default StepTools;
