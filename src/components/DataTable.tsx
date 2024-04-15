import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHeaderStyle } from "../styles/TextStyles";
// import { TableSortLabel } from '@mui/material';
interface TicketInterface {
  RowsData: Ticket[] | undefined;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export const DataTable: React.FC<TicketInterface> = ({ RowsData }) => {
  // console.log(RowsData);
  return (
    <TableContainer
      sx={{ boxShadow: "0px 0px 8px rgba(53, 81, 180, 0.1)" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead> */}

        <TableHead>
          <TableRow>
            <TableCell sx={TableHeaderStyle}>Court Location</TableCell>
            <TableCell sx={TableHeaderStyle} align="left">
              Issue Date
            </TableCell>
            <TableCell sx={TableHeaderStyle} align="left">
              Payment Date
            </TableCell>
            <TableCell sx={TableHeaderStyle} align="left">
              Fine ($ JMD)
            </TableCell>
            <TableCell sx={TableHeaderStyle} align="left">
              Status
            </TableCell>
            <TableCell sx={TableHeaderStyle} align="left">
              Offence Description
            </TableCell>
            <TableCell sx={TableHeaderStyle} align="center">
              Demerit Points
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {RowsData?.length ? (
            RowsData.map((item, key) => (
              <TableRow
                // key={row.demeritPoints}

                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.court}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.issueDate}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.paymentDueDate}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.fineAmount}
                </TableCell>
                <TableCell component="th" scope="row">
                  status
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.offenceDesc}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {item.demeritPoints}
                </TableCell>

                {/* <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))
          ) : (
            null
            // <TableRow
            //   // key={row.demeritPoints}
            //   className="text-center "
            //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            // >
            //   <TableCell component="th" scope="row">
            //     No Tickets to Show!
            //   </TableCell>{" "}
            // </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
