import React from "react";
import { Typography, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";


const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const InterestTableHead = () => {
  return (
    <TableHead>
      <StyledTableRow>
        <StyledTooltip
          interactive
          title={
            <>
              <Typography style={{ marginBottom: "1rem" }}>
                <b>This is the ending date of each era.</b>
              </Typography>
              <Typography color="inherit" style={{ marginBottom: ".5rem" }}>
                <Link
                  color="primary"
                  href="https://flowprotocol.io"
                  target="_blank"
                >
                  <u>
                    <b>FLOW</b>
                  </u>
                </Link>
                &nbsp;token and its distribution are governed by&nbsp;
                <Link
                  color="primary"
                  href="https://flowprotocol.io/static/media/flow-protocol.df8f84c5.pdf#page=3"
                  target="_blank"
                >
                  <u>
                    <b>Eras</b>
                  </u>
                </Link>
                . At the end of each Era the inflation rate is halved.
              </Typography>
            </>
          }
        >
          <StyledTableCell>Eras</StyledTableCell>
        </StyledTooltip>
        <StyledTooltip
          interactive
          title={
            <>
              <Typography style={{ marginBottom: "1rem" }}>
                <b>
                  This is the your compounded amount of FLOW at the end of each
                  era.
                </b>
              </Typography>
              <Typography color="inherit">
                <Link
                  color="primary"
                  href="https://flowprotocol.io/static/media/flow-protocol.df8f84c5.pdf#page=1"
                  target="_blank"
                >
                  <u>
                    <b>FLOW</b>
                  </u>
                </Link>
                &nbsp;is designed to be a hedge against Bitcoin as today’s
                primary digital store of value.
              </Typography>
            </>
          }
        >
          <StyledTableCell align="right">FLOW</StyledTableCell>
        </StyledTooltip>

        <StyledTooltip
          interactive
          title={
            <>
              <Typography color="inherit">
                Your compounded FLOW multiplied by the current&nbsp;
                <Link
                  color="primary"
                  href="https://www.coingecko.com/en/coins/flow-protocol"
                  target="_blank"
                >
                  <u>
                    <b>price</b>
                  </u>
                </Link>
                &nbsp;in USD.
              </Typography>
            </>
          }
        >
          <StyledTableCell align="right">Price&nbsp;(usd)</StyledTableCell>
        </StyledTooltip>
      </StyledTableRow>
    </TableHead>
  );
};

export default InterestTableHead;
