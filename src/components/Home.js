import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Particles from 'react-particles-js'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    particles: {
        position: 'absolute'
    }
}))

function Home() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Navbar />
            <Header />
            <Particles
                canvasClassName={classes.particles}
                params={{
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 2000
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: true,
                            }
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            }
                        }
                    }
                }}
            />
        </React.Fragment >
    )
}

export default Home
