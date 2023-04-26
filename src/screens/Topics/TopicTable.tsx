import React from 'react';

// Material
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

// Types
import type { Topic } from '../../types/topics';

interface Props {
  data: Topic[],
  selected?: Topic | null,
  onClick?: (_: Topic) => void
}

const TopicTable = ({
  data = [],
  selected = null,
  onClick = (_: Topic) => {}
}: Props) => (
  <TableContainer component={Paper} sx={{ mb: 7 }}>
    <Table>
      <TableHead sx={{
        '& th': { fontWeight: 'bold'}
      }}>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Stars</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((m) => {
          const isSelected = selected?.id === m.id;

          return (
            <TableRow
              key={m.id}
              sx={{
                backgroundColor: isSelected ? 'lightgray' : 'transparent',
                cursor: 'pointer',
                '&:last-child td, &:last-child th': {
                  border: 0
                }
              }}
              onClick={() => onClick(m)}
            >
              <TableCell>{m.id}</TableCell>
              <TableCell>{m.name}</TableCell>
              <TableCell>{m.stargazers.totalCount}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TopicTable;