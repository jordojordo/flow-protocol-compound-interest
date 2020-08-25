import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particles: {
    position: 'fixed',
    height:'100vh',
    width:'100vw',
    zIndex: -1,
    background: theme.palette.secondary.main
  }
}));

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#EEC353"
    },
    line_linked: {
      color: "#EEC353"
    }
  }
}

export const Splash = () => {
  const classes = useStyles();

  return (
    <section id="splash">
      <Particles className={classes.particles} params={particlesOptions} />
    </section>
  )
}