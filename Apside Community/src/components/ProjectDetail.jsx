import { Grid, Paper } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import projectDatas from '../../data/project.json';
import JaugeXL from './Jauge-secondary';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BuildIcon from '@mui/icons-material/Build';

function ProjectDetail() {
  const { id } = useParams();
  const [projectData] = projectDatas.filter((project) => project.id === id);
  return (
    <Grid container spacing={2} sx={{ pl: 1, pr: 1 }}>
      <Grid item xs={12}>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={2}>
            <Typography align='center'>
              Date de début : {projectData.date_start}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <JaugeXL state={projectData.state} />
          </Grid>
          <Grid item xs={2}>
            <Typography align='center'>
              Date de fin : {projectData.date_end}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography align='center' variant='h5'>
              Etape {projectData.state}/5
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography 
              sx={{  fontSize: 14}}
              color='text.secondary'
              gutterBottom
            >
              Créé le {projectData.created_at}
            </Typography>
            <Typography align='center' variant='h3'>{projectData.name}</Typography>

            <Typography variant='body2'></Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
          <Grid item xs={6}>
            <Card>
              <CardContent sx={{ minHeight: 120 }}>
                <Typography variant='h5' component='div'>
                  Problematique :
                </Typography>
                <Typography variant='body2'>
                  {projectData.problematic}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent sx={{ minHeight: 120 }}>
                <Typography variant='h5' component='div'>
                  Solution :
                </Typography>
                <Typography variant='body2'>{projectData.solution}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={5}>
        <Typography align='center' variant='h5'>
          Participants
        </Typography>
        <Card>
          {projectData.team.map((data) => (
            <ListItem divider>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={data} />
            </ListItem>
          ))}
        </Card>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={5}>
        <Typography align='center' variant='h5'>
          Outils
        </Typography>
        <Card>
          <Grid container spacing={2} sx={{ p: 3 }}>
            {projectData.tools.map((data) => (
              <Grid item xs={4}>
                <ListItemAvatar>
                  <Avatar>
                    <BuildIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data} />
              </Grid>
            ))}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProjectDetail;
