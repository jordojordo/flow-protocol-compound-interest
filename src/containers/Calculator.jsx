import React from "react";
import CompoundForm from "../components/CompoundForm";
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  calculator: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Calculator = () => {
  const classes = useStyles();

  return (
    <section id="calculator" className={classes.calculator}>
      <Container className={classes.container}>
        <CompoundForm />
      </Container>
    </section>
  )
}

export default Calculator;