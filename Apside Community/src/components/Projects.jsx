import React from 'react';
import { Link } from 'react-router-dom';
import LinkBehavior from '../components/LinkBehavior';
import CreateIcon from '@mui/icons-material/Create';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import projectList from '../../data/project.json';
import Utils from '../utils/Utils';
import Jauge from './Jauge';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { Button, Typography } from '@mui/material';
import { DiJava } from 'react-icons/di';
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoVue,
  IoLogoAngular,
  IoLogoNodejs,
  IoLogoPython,
} from 'react-icons/io5';
import {
  SiCplusplus,
  SiCsharp,
  SiExpress,
  SiMysql,
  SiPhp,
} from 'react-icons/si';
import { RowingSharp } from '@mui/icons-material';

function Project({
  favoris = false,
  myproject = false,
  shortlist = false,
  allfavoris = false,
}) {
  const technoIcons = [
    { name: 'javascript', icon: <IoLogoJavascript /> },
    { name: 'java', icon: <DiJava /> },
    { name: 'php', icon: <SiPhp /> },
    { name: 'html', icon: <IoLogoHtml5 /> },
    { name: 'css', icon: <IoLogoCss3 /> },
    { name: 'react', icon: <IoLogoReact /> },
    { name: 'vue', icon: <IoLogoVue /> },
    { name: 'angular', icon: <IoLogoAngular /> },
    { name: 'node', icon: <IoLogoNodejs /> },
    { name: 'c++', icon: <SiCplusplus /> },
    { name: 'c#', icon: <SiCsharp /> },
    { name: 'express', icon: <SiExpress /> },
    { name: 'sql', icon: <SiMysql /> },
    { name: 'python', icon: <IoLogoPython /> },
  ];
  const id = 'c4e349c5-0a9e-40b9-bde7-c84bad61a15a';
  let newprojectList = projectList;
  let title = 'projets';
  if (myproject) {
    title = 'mes projets';
    newprojectList = projectList.filter(
      (project) => project.team.includes(id) || project.manager === id
    );
  }
  if (favoris) {
    title = 'mes favoris';
    newprojectList = projectList.slice(0, 5);
  }
  if (allfavoris) {
    title = 'tous mes favoris';
    newprojectList = projectList.slice(0, 8);
  }
  if (shortlist) {
    title = 'tous mes projets';
    newprojectList = projectList.slice(30, 35);
  }
  console.log(Utils.getUserById(projectList[0].manager));
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='medium' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell
              colspan={8}
              align='center'
              sx={{ backgroundColor: '#e89759' }}
            >
              <div className='title-container'>
                <div className='title-proj'>{title.toUpperCase()}</div>
                <div className='btn-new-proj'>
                  <Button
                    size='small'
                    variant='contained'
                    startIcon={<CreateIcon />}
                    component={LinkBehavior}
                    to='/new-project'
                  >
                    + Créer un projet
                  </Button>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='right'>Voir</TableCell>
            <TableCell>Projet</TableCell>

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
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='right'>
                <Link to={`/projects/${row.id}`}>
                  <GiMagnifyingGlass />
                </Link>
              </TableCell>
              <TableCell component='th' scope='row'>
                <Typography sx={{ mb: 1 }}>{row.name}</Typography>
                <Jauge state={row.state} height='10px' />
              </TableCell>

              <TableCell align='right'>
                {Utils.getClientById(row.client_id).society}
              </TableCell>
              <TableCell align='right'>
                {Utils.getUserById(row.manager).name}
              </TableCell>
              <TableCell align='right'>
                {row.team.map((el) => Utils.getUserById(el).name)}
              </TableCell>
              <TableCell align='right'>{row.date_start}</TableCell>
              <TableCell align='right'>{row.date_end}</TableCell>
              <TableCell align='right'>
                {row.techno.map(
                  (el) => technoIcons.filter((icon) => icon.name == el)[0].icon
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Project;
