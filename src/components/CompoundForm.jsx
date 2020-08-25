import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { InterestCalculator } from "../functions/interestCalculator";
import { InterestContext } from "../context/interest-context";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const CompoundForm = () => {
  const [inputValue, setInputValue] = useState("");

  const { setCompoundedArray } = useContext(InterestContext);

  const classes = useStyles();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInputValue({
      ...inputValue,
      [id]: value.substring(0, 30),
    });
  };

  const handleSubmit = () => {
    setCompoundedArray(InterestCalculator(inputValue));
  };

  return (
    <form className={classes.root}>
      <Box display="flex" flexDirection="column">
        <Box m="1rem">
          <TextField
            required
            id="initBalance"
            label="Current Balance"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={inputValue.title}
            onChange={handleInputChange}
          />
        </Box>
        <Box m="1rem">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Calculate
          </Button>
        </Box>
      </Box>
    </form>
  );
};
