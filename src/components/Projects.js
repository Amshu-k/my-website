import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import Navbar from './Navbar';

const useStyles = makeStyles({
    mainContainer: {
        background: '#233',
        height: '100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem auto'
    }
})

const Projects = () => {
    const classes = useStyles();
    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar />
            <Grid container justify='center'>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    POLARIS
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Chat application built using Angular and Firebase. <br /> Firebase used for authentication and storage of data.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                <a
                                    target="_blank"
                                    href="https://github.com/Amshu-k/angular-firebase-chat">
                                    GitHub
                                    </a>
                            </Button>
                            <Button size='small' color='primary'>
                                <a
                                    target="_blank"
                                    href="https://chat-app-8e53f.web.app/login">
                                    View Project
                                    </a>
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Covid-19 Tracker
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Angular application to display latest Covid19 statistics country wise. <br /> Developed with Angular 9 and Angular Material. Deployed the application on Docker
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                <a
                                    target="_blank"
                                    href="https://github.com/Amshu-k/covid19">
                                    GitHub
                                    </a>
                            </Button>
                            <Button size='small' color='primary'>
                                <a
                                    target="_blank"
                                    href="https://hub.docker.com/r/gandalf7/covid19">
                                    Docker
                                    </a>
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Projects
