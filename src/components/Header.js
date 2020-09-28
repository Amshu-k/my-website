import React from 'react'
import avatar from '../avatar.png';
import Typed from "react-typed";
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    title: {
        color: 'white'
    },
    subtitle: {
        color: 'tan',
        marginBottom: "1rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: 'center',
        zIndex: 1
    },
    avatar: {
        margin: theme.spacing(1),
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    listItem: {
        color: 'tan'
    },
    anchor: {
        color: 'white'
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify='center'>
                <Avatar className={classes.avatar} style={{ width: '240px', height: '240px' }} src={avatar} alt="Amshu" />
            </Grid>
            <Typography className={classes.title} variant="h6">
                <Typed
                    strings={['Amshuman Krishnamurthy']}
                    typeSpeed={40}

                />
            </Typography>
            <br />
            <Typography variant="h5" className={classes.subtitle}>
                <Typed
                    strings={['Frontend Engineering', 'Angular', 'React', 'Node.js']}
                    typeSpeed={40}
                    backSpeed={15}
                    loop
                />
            </Typography>
            <Typography variant="h5">
                <a target="_blank" rel="noopener noreferrer" href="https://1drv.ms/w/s!ApDaAs1Vh3Xy_FH6x0MXr2KL-pSs?e=y7Bezv" className={classes.anchor}>My resume</a>
            </Typography>

        </Box>
    )
}

export default Header
