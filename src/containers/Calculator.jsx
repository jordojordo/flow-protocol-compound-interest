import React from "react";
import { CompoundForm } from "../components/CompoundForm";
import Container from '@material-ui/core/Container';
import { InterestTable } from "../components/InterestTable";

const Calculator = () => {
  return (
    <section id="calculator">
      <Container maxWidth="sm">
        <CompoundForm />
        <InterestTable />
      </Container>
    </section>
  )
}

export default Calculator;