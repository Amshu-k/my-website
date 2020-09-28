import React from 'react'
import Navbar from './Navbar'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Box, Grid, Button, Typography, TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import emailjs from "emailjs-com";

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'tomato',
        },
        '& label': {
            color: 'tan',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'tan'
            },
            '&:hover fieldset': {
                borderColor: 'tomato'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'tomato'
            }
        }
    }
})(TextField)

const useStyles = makeStyles(theme => ({
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',

    },
    button: {
        marginTop: '1rem',
        color: 'tomato',
        borderColor: 'tomato'
    },
    textArea: {
        marginTop: '1rem',
        color: 'tomato',
        borderColor: 'tomato'
    }
}))

const Contact = () => {
    const classes = useStyles();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_gktky4y', e.target, 'user_eNLTQr5FQouA8t01Md9g8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <Box component='div' style={{ background: '#233', height: '100vh' }}>
            <Navbar />
            <Grid container justify='center'>
                <Box component='form' className={classes.form} onSubmit={sendEmail}>
                    <Typography variant='h5' style={{ color: 'tomato', textAlign: 'center', textTransform: 'uppercase' }}>
                        Contact Me
                </Typography>
                    <InputField
                        fullWidth={true}
                        label='Name'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'white' } }}
                        required
                        name='name'
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label='Email'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'white' } }}
                        required
                        name='email'
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="What's up?"
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'white' } }}
                        required
                        name='message'
                        placeholder='Keep it short'
                    />
                    <br />
                    <Button className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon />} type='submit'>
                        Contact
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact
