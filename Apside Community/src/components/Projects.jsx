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
import Jauge from "./Jauge";

function Project({
  favoris = false,
  myproject = false,
  shortlist = false,
  allfavoris = false,
}) {
  const id = 'c4e349c5-0a9e-40b9-bde7-c84bad61a15a';
  let newprojectList = projectList;
  let title = "projets";
  if (myproject) {
    title = "mes projets"
    newprojectList = projectList.filter(
      (project) => project.team.includes(id) || project.manager === id
    );
  }
  if (favoris) {
    title = "mes favoris"
    newprojectList = projectList.slice(0, 5);
  }
  if (allfavoris) {
    title = "tous mes favoris"
    newprojectList = projectList.slice(0, 8);
  }
  if (shortlist) {
    title = "tous mes projets"
    newprojectList = projectList.slice(30, 35);
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='medium' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>{title}</TableCell>
            
            <TableCell align='right'>Client</TableCell>
            <TableCell align='right'>Manager projet</TableCell>
            <TableCell align='right'>Développeurs</TableCell>
            <TableCell align='right'>Date début</TableCell>
            <TableCell align='right'>Date fin estimée</TableCell>
            <TableCell align='right'>Technos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newprojectList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              
              <TableCell align='right'>
                {Utils.getClientById(row.client_id).society}
              </TableCell>
              <TableCell align='right'>
                {Utils.getUserById(row.manager).name}
              </TableCell>
              <TableCell align='right'>{row.team.map((el) => el)}</TableCell>
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

export default Project;
