import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Link } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { InterestCalculator } from "../functions/interestCalculator";
import { InterestContext } from "../context/interest-context";
import InterestTable from "../components/InterestTable";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexFlow: "column",
    margin: theme.spacing(1),
  },
  input: {
    margin: "16px 0"
  }
}));

const CompoundForm = () => {
  const [disabled, setDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const { compoundedArray, setCompoundedArray } = useContext(InterestContext);

  const classes = useStyles();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInputValue({
      ...inputValue,
      [id]: value.substring(0, 30),
    });
    setDisabled(false);
  };

  const handleSubmit = () => {
    setCompoundedArray(InterestCalculator(inputValue));
  };

  const preventDefault = (event) => event.preventDefault();

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={11} sm={11} md={6} lg={4}>
        <Paper style={{ paddingTop: "25px", paddingBottom: "25px" }}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={11} className={classes.root} style={{ textAlign: "center" }}>
              <Link
                href="https://flowprotocol.io"
                onClick={preventDefault}
                color="primary"
                variant="h3"
                
              >
                Flow Protocol
              </Link>
            </Grid>
            <Grid item xs={11} className={classes.root}>
              <Typography>
                Enter your current balance of  tokens to see the compounded
                interest you will gain after each cycle inflation.
              </Typography>
            </Grid>
            <Grid item xs={11} style={{ width: "100%" }}>
              <form className={classes.form}>
                <TextField
                  required
                  id="initBalance"
                  label="Current Balance"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  value={inputValue.title}
                  onChange={handleInputChange}
                  color="primary"  
                  className={classes.input}
                  onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                      ev.preventDefault();
                      handleSubmit()
                    }
                  }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  disabled={disabled}
                  onClick={handleSubmit}
                >
                  Calculate
                </Button>
              </form>
            </Grid>
            {compoundedArray.length > 1 ? (
              <Grid item xs={12} style={{ width: "100%", padding: "24px" }}>
                <InterestTable />
              </Grid>
            ) : null}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CompoundForm;