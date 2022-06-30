import React from 'react';
import { Box, MenuItem, TextField } from '@mui/material';
import clients from '../../../data/client.json';
import Projects from '../../pages/Projects';

function Step1() {
  const today = Date.now();
  console.log( today);

  return (
    <Box component='form' sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
      <h2>Informations du projet</h2>
      <TextField
        id='project_name'
        label='Nom du project'
        helperText='Entrer le nom du projet'
      />
      <TextField
        select
        id='project_client'
        label='Client'
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
        type='date'
        defaultValue={Date.now().toLocaleString('fr-FR')}
      ></TextField>
    </Box>
  );
}

function Step2() {
  return <div>Step2</div>;
}

export { Step1, Step2 };
