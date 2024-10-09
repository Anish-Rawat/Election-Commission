import { Box, Typography } from '@mui/material';
import React from 'react';

interface HeaderProps {
    state: string;
}

const Header: React.FC<HeaderProps> = ({ state }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100%', 
        textAlign: 'center',
        padding: '20px', 
      }}
    > 
      <Typography sx={{ fontSize: '24px', fontWeight: '500', mb: 2 }}>
        General Election to Assembly Constituencies: Trends & Results October - 2024
      </Typography>
      <Typography sx={{ fontWeight: 'bold', fontSize: '28px' }} color='#0A76BA'>
        {state}
      </Typography>
    </Box>
  );
};

export default Header;
