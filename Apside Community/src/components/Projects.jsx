import React from 'react';
import { Link } from 'react-router-dom';
import LinkBehavior from '../components/LinkBehavior';
import CreateIcon from '@mui/icons-material/Create';
import { Avatar, AvatarGroup, Box } from '@mui/material';
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
    // newprojectList = projectList.filter(
    //   (project) => project.team.includes(id) || project.manager === id
    // );
    newprojectList = newprojectList = projectList.slice(30, 35);
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
    newprojectList = projectList.slice(30, 40);
  }
  console.log(Utils.getUserById(projectList[0].manager));
  return (
    <Box sx={{ pr: 2 }}>
      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={8}
                align='center'
                sx={{ backgroundColor: '#e77620' }}
              >
                <div className='title-container'>
                  <div className='title-proj'>
                    <Typography sx={{ color: 'white', fontWeight: 'bold' }}>
                      {title.toUpperCase()}
                    </Typography>
                  </div>
                  <div className='btn-new-proj'>
                    {!allfavoris && !favoris ? (
                      <Button
                        sx={{ backgroundColor: '#183650' }}
                        size='small'
                        variant='contained'
                        startIcon={<CreateIcon />}
                        component={LinkBehavior}
                        to='/new-project'
                      >
                        + Nouveau projet
                      </Button>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right' sx={{ fontWeight: 'bold' }}>
                <Typography sx={{ color: '#e89759', fontWeight: 'bold' }}>
                  Voir
                </Typography>
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>
                <Typography sx={{ color: '#e89759', fontWeight: 'bold' }}>
                  Projet
                </Typography>
              </TableCell>

              <TableCell align='right' sx={{ fontWeight: 'bold' }}>
                <Typography sx={{ color: '#e89759', fontWeight: 'bold' }}>
                  Client
                </Typography>
              </TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold' }}>
                <Typography sx={{ color: '#e89759', fontWeight: 'bold' }}>
                  Manager projet
                </Typography>
              </TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold' }}>
                <Typography sx={{ color: '#e89759', fontWeight: 'bold' }}>
                  Développeurs
                </Typography>
              </TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold' }}>
                <Typography sx={{ color: '#e89759', fontWeight: 'bold' }}>
                  Date début
                </Typography>
              </TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold' }}>
                <Typography sx={{ color: '#e89759', fontWeight: 'bold' }}>
                  Date fin estimée
                </Typography>
              </TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold' }}>
                <Typography sx={{ color: '#e89759', fontWeight: 'bold' }}>
                  Technos
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newprojectList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Link to={`/Apside-Community/projects/${row.id}`}>
                    <GiMagnifyingGlass />
                  </Link>
                </TableCell>
                <TableCell align='left'>
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
                  <AvatarGroup max={4}>
                    {row.team.map((el) => (
                      <Avatar
                        src={Utils.getUserById(el).profile_pict}
                        sx={{ bgcolor: '#f0f0f0' }}
                        alt={Utils.getUserById(el).name}
                      />
                    ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell align='right'>{row.date_start}</TableCell>
                <TableCell align='right'>{row.date_end}</TableCell>
                <TableCell align='right'>
                  {row.techno.map(
                    (el) =>
                      technoIcons.filter((icon) => icon.name == el)[0].icon
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Project;
