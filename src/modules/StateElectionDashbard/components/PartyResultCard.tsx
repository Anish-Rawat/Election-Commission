import { Box, Typography } from '@mui/material'
import React from 'react'
import { CardsState } from '../type'

interface PartyResultCardProps{
  card: CardsState;
}

const PartyResultCard: React.FC<PartyResultCardProps> = ({ card }) => {
  const { party, won, color } = card; 

  return (
    <Box 
      sx={{
        display: "flex", 
        justifyContent: "center", 
        flexDirection: "column", 
        alignItems: "center", 
        backgroundColor: color, 
        padding: "16px",
        borderRadius: "8px",
        width: "150px",
        height: "100px",
        textAlign: "center",
        color:"white"
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>{party}</Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold", fontSize:"44px"}}>{won}</Typography>
    </Box>
  );
}

export default PartyResultCard;
