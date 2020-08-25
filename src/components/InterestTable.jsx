import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { InterestContext } from "../context/interest-context";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export const InterestTable = () => {
  const { compoundedArray, price } = useContext(InterestContext);
  const classes = useStyles();

  return (
    <>
      {compoundedArray.length > 1 ? (
        <section id="interest-table">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="interest table">
              <TableHead>
                <TableRow>
                  <TableCell>Era</TableCell>
                  <TableCell align="right">Tokens</TableCell>
                  <TableCell align="right">Price&nbsp;(usd)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {compoundedArray.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{item.toFixed(4)}</TableCell>
                    <TableCell align="right">
                      {(item * price).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      ) : null}
    </>
  );
};
