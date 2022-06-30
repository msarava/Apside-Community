import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import projectList from '../../data/project.json';
import Utils from '../utils/Utils';

function ProjectInProgress() {
  const id = 'c4e349c5-0a9e-40b9-bde7-c84bad61a15a';
  const projectListFiltered = projectList.filter(
    (project) => project.team.includes(id) || project.manager === id
  );
  console.log(projectListFiltered);
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size='medium' aria-label='a dense table'>
      <TableHead>
        <TableRow>
          <TableCell>MES PROJETS</TableCell>

          <TableCell align='right'>Client</TableCell>
          <TableCell align='right'>Equipe</TableCell>
          <TableCell align='right'>Manager projet</TableCell>
          <TableCell align='right'>Date début</TableCell>
          <TableCell align='right'>Date fin estimée</TableCell>
          <TableCell align='right'>Techno</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {projectListFiltered.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component='th' scope='row'>
              {row.name}
            </TableCell>
            <TableCell align='right'>{row.customer}</TableCell>
          
            <TableCell align='right'>
              {Utils.getUserById(row.manager).name}
            </TableCell>
            <TableCell align='right'>{row.date_start}</TableCell>
            <TableCell align='right'>{row.date_end}</TableCell>
            <TableCell align='right'>{row.techno.map((el) => el)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default ProjectInProgress;
