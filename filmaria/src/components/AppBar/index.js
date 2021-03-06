import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
          <Link underline="none" color="inherit" href="/">Prime Flix</Link>
          </Typography>
          <Typography variant="h6" component="div" ml={2}>
          <Link underline="none" color="inherit" href="/favoritos">Favoritos</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
