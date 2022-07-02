import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Collaborators from '../../../data/collaborator.json';
import Agencies from '../../../data/agency.json';
import { TextField, Typography } from '@mui/material';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function StepTeam({ form, updateForm }) {
  const [agency, setAgency] = React.useState(
    '55f29782-498e-48ff-8b8c-5a7222ab4b71'
  );
  const [techno, setTechno] = React.useState('');

  const searchedAgency = Agencies.filter((el) => el.id === agency)[0]?.id || '';

  const collabList = Collaborators.filter(
    (collab) => collab.technos.includes(techno.toLowerCase()) || techno === ''
  )
    .filter(
      (collab) => collab.agency === searchedAgency || searchedAgency === ''
    )
    .map((collab) => collab.name);

  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(collabList);
  const [right, setRight] = React.useState([]);
  const [collab, setCollab] = React.useState('');

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items) => (
    <Paper sx={{ width: 300, height: 300, overflow: 'auto' }}>
      <List dense component='div' role='list'>
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role='listitem'
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  const technoList = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'Angular' },
    { id: 4, name: 'CSS' },
    { id: 5, name: 'HTML' },
    { id: 6, name: 'C#' },
    { id: 7, name: 'Php' },
    { id: 8, name: 'Vue' },
    { id: 9, name: 'C++' },
    { id: 10, name: 'Python' },
    { id: 11, name: 'Express' },
    { id: 12, name: 'SQL' },
    { id: 13, name: 'React.Js' },
  ];

  const handleChangeAgency = (event) => {
    setAgency(event.target.value);
  };

  const handleChangeTechno = (event) => {
    setTechno(event.target.value);
  };

  const handleChangeCollab = (event) => {
    setCollab(event.target.value);
  };

  React.useEffect(() => {
    setLeft(collabList);
  }, [agency, techno]);

  return (
    <div className='step-collab-container'>
      <div className='step-collab-title'>
        {' '}
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
      </div>
      <div className='step-collab-filters'>
        <TextField
          helperText='Entrer le nom du collaborateur'
          label='Rechercher un collaborateur'
          onChange={handleChangeCollab}
          value={collab}
        />
        <TextField
          id='outlined-select-agency'
          select
          value={Agencies.filter((el) => el.id === agency)[0].id}
          onChange={handleChangeAgency}
          helperText='Sélectionner une agence'
        >
          {Agencies.map((agency) => (
            <MenuItem key={agency.id} value={agency.id}>
              {agency.city}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id='outlined-select-techno'
          select
          value={techno}
          onChange={handleChangeTechno}
          helperText='Sélectionner une techno'
        >
          {technoList.map((techno) => (
            <MenuItem key={techno.id} value={techno.name}>
              {techno.name}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <Grid item>
          {customList(
            left.filter((user) =>
              user.toLowerCase().includes(collab.toLocaleLowerCase())
            )
          )}
        </Grid>
        <Grid item>
          <Grid container direction='column' alignItems='center'>
            <Button
              sx={{ my: 0.5 }}
              variant='outlined'
              size='small'
              onClick={handleAllRight}
              disabled={left.length === 0}
              aria-label='move all right'
            >
              ≫
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant='outlined'
              size='small'
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label='move selected right'
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant='outlined'
              size='small'
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label='move selected left'
            >
              &lt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant='outlined'
              size='small'
              onClick={handleAllLeft}
              disabled={right.length === 0}
              aria-label='move all left'
            >
              ≪
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(right)}</Grid>
      </Grid>
    </div>
  );
}
