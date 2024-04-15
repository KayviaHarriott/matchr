import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHeaderStyle } from "../styles/TextStyles";
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
export const DataTable = ({ RowsData }) => {
    // console.log(RowsData);
    return (React.createElement(TableContainer, { sx: { boxShadow: "0px 0px 8px rgba(53, 81, 180, 0.1)" }, component: Paper },
        React.createElement(Table, { sx: { minWidth: 650 }, "aria-label": "simple table" },
            React.createElement(TableHead, null,
                React.createElement(TableRow, null,
                    React.createElement(TableCell, { sx: TableHeaderStyle }, "Court Location"),
                    React.createElement(TableCell, { sx: TableHeaderStyle, align: "left" }, "Issue Date"),
                    React.createElement(TableCell, { sx: TableHeaderStyle, align: "left" }, "Payment Date"),
                    React.createElement(TableCell, { sx: TableHeaderStyle, align: "left" }, "Fine ($ JMD)"),
                    React.createElement(TableCell, { sx: TableHeaderStyle, align: "left" }, "Status"),
                    React.createElement(TableCell, { sx: TableHeaderStyle, align: "left" }, "Offence Description"),
                    React.createElement(TableCell, { sx: TableHeaderStyle, align: "center" }, "Demerit Points"))),
            React.createElement(TableBody, null, RowsData?.length ? (RowsData.map((item, key) => (React.createElement(TableRow
            // key={row.demeritPoints}
            , { 
                // key={row.demeritPoints}
                sx: { "&:last-child td, &:last-child th": { border: 0 } } },
                React.createElement(TableCell, { component: "th", scope: "row" }, item.court),
                React.createElement(TableCell, { component: "th", scope: "row" }, item.issueDate),
                React.createElement(TableCell, { component: "th", scope: "row" }, item.paymentDueDate),
                React.createElement(TableCell, { component: "th", scope: "row" }, item.fineAmount),
                React.createElement(TableCell, { component: "th", scope: "row" }, "status"),
                React.createElement(TableCell, { component: "th", scope: "row" }, item.offenceDesc),
                React.createElement(TableCell, { align: "center", component: "th", scope: "row" }, item.demeritPoints))))) : (null
            // <TableRow
            //   // key={row.demeritPoints}
            //   className="text-center "
            //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            // >
            //   <TableCell component="th" scope="row">
            //     No Tickets to Show!
            //   </TableCell>{" "}
            // </TableRow>
            )))));
};
