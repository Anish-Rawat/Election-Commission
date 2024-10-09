import {
    Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { PartyWiseTableState } from "../type";

interface PartyResultTableProps {
  partyWiseTable: PartyWiseTableState;
}

const PartyResultTable: React.FC<PartyResultTableProps> = ({
  partyWiseTable,
}) => {
  const { columns, rows } = partyWiseTable;
  return (
    <Box sx={{ maxWidth: 1000, margin: "50px auto" }}>
    <Typography sx={{backgroundColor:"#D7CAFF", padding:"10px"}}>Party Wise Results</Typography>
      <TableContainer
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((col, index) => (
                <TableCell align={index === 0 ? "left" : "right"} sx={{fontWeight:"bold"}} key={index}>
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.party}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.party}
                </TableCell>
                <TableCell align="right">{row.won}</TableCell>
                <TableCell align="right">{row.leading}</TableCell>
                <TableCell align="right">{row.won + row.leading}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PartyResultTable;
