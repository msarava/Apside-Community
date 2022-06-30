import React from 'react';
import { Grid, Box, MenuItem, TextField, Typography } from '@mui/material';
import clients from '../../../data/client.json';
import Projects from '../../pages/Projects';
import { DateTime } from 'luxon';

function Step1() {
  let today = DateTime.now();
  today = `${today.year}-${today.month.toString().padStart(2, '0')}-${
    today.day
  }`;

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
      <Grid item xs={12} sx={{ border: '1px dashed grey' }}>
        <Typography variant='h3'>Informations du projet</Typography>
      </Grid>

      <TextField
        id='project_name'
        label='Nom du project'
        helperText='Entrer le nom du projet'
      />
      <TextField
        select
        id='project_client'
        helperText='Choisissez le client'
        value={clients[0].society}
      >
        {clients.map((client) => (
          <MenuItem key={client.id} value={client.society}>
            {client.society}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id='date_start'
        name='date_start'
        type='date'
        defaultValue={today}
        helperText='Date de début du projet'
      />
      <TextField
        id='date_end'
        name='date_end'
        type='date'
        defaultValue={today}
        helperText='Date de fin estimé du projet'
      />
    </Grid>
  );
}

function Step2() {
  return <div>Step2</div>;
}

export { Step1, Step2 };
