import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Projects.css';
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
        height: '100vh'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '1.5rem auto'
    }
})

const Projects = () => {
    const classes = useStyles();
    return (
        <div className="overflow">
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
                                        Newsvoice
                                </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        Voice controlled React.js news application using Alan AI for voice commands and Material-UI for design.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    <a
                                        target="_blank"
                                        href="https://github.com/Amshu-k/newsvoice">
                                        GitHub
                                    </a>
                                </Button>
                                <Button size='small' color='primary'>
                                    <a
                                        target="_blank"
                                        href="https://newsvoicee.web.app/">
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
        </div>

    )
}

export default Projects
