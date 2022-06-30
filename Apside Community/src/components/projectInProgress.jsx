import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ProjectInProgress() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>PROJECT IN PROGRESS</TableCell>

            <TableCell align='right'>Customer</TableCell>
            <TableCell align='right'>Project Manager</TableCell>
            <TableCell align='right'>Start date</TableCell>
            <TableCell align='right'>Estimed end</TableCell>
            <TableCell align='right'>techno</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.customer}</TableCell>
              <TableCell align='right'>{row.project_manager}</TableCell>
              <TableCell align='right'>{row.start_date}</TableCell>
              <TableCell align='right'>{row.estimed_end}</TableCell>
              <TableCell align='right'>{row.techno}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProjectInProgress;
