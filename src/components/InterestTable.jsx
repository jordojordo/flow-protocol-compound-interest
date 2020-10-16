import React, { useContext } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { InterestContext } from "../context/interest-context";
import InterestTableHead from "./InterestTableHead";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const InterestTable = () => {
  const { compoundedArray, price } = useContext(InterestContext);
  const classes = useStyles();

  const eras = [
    "Oct 10, 2020 (Genesis)",
    "Oct 10, 2021",
    "Oct 10, 2022",
    "Oct 10, 2023",
    "Oct 9, 2024",
    "Oct 9, 2025",
    "Oct 9, 2026",
    "Oct 9, 2027",
    "Oct 8, 2028",
    "Oct 8, 2029",
    "Oct 8, 2030",
    "Oct 8, 2031"
  ];

  return (
    <>
      {compoundedArray.length > 1 ? (
        <section id="interest-table">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="interest table">
              <InterestTableHead />
              <TableBody>
                {compoundedArray.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {eras.map((era, eraIndex) =>
                        eraIndex === index ? era : null
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.toFixed(4)}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {(item * price).toFixed(2)}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      ) : null}
    </>
  );
};

export default InterestTable;
