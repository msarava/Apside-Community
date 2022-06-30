import React, { useState } from 'react';
import { Grid, Box, MenuItem, TextField, Typography } from '@mui/material';
import clients from '../../../data/client.json';
import Projects from '../../pages/Projects';
import { DateTime } from 'luxon';

function Step1() {
  let today = DateTime.now();
  today = `${today.year}-${today.month.toString().padStart(2, '0')}-${
    today.day
  }`;
  const [form, updateForm] = useState({
    name: '',
    client_id: 1,
    date_start: '',
    date_end: '',
  });

  const handleUpdateForm = (e) => {
    updateForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };
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
          Informations du projet
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            sx={{ width: '90%' }}
            id='project_name'
            name='name'
            value={form.name}
            label='Nom du project'
            helperText='Entrer le nom du projet'
            onChange={handleUpdateForm}
          />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            sx={{ width: '90%' }}
            select
            id='project_client'
            name='client_id'
            helperText='Choisissez le client'
            value={
              clients.filter((client) => client.id == form.client_id)[0].id
            }
            onChange={handleUpdateForm}
          >
            {clients.map((client) => (
              <MenuItem key={client.id} value={client.id}>
                {client.society}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            sx={{ width: '90%' }}
            id='date_start'
            name='date_start'
            type='date'
            defaultValue={today}
            helperText='Date de début du projet'
          />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            sx={{ width: '90%' }}
            id='date_end'
            name='date_end'
            type='date'
            defaultValue={today}
            helperText='Date de fin estimé du projet'
          />
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TextField
            multiline
            rows={10}
            label='Problématique'
            helperText='Description de la problématique rencontrée par le client'
            sx={{
              width: '90%',
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TextField
            multiline
            label='Solution'
            helperText='Description de la solution envisagée'
            rows={10}
            sx={{ width: '90%' }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

function Step2() {
  return <div>Step2</div>;
}

export { Step1, Step2 };
