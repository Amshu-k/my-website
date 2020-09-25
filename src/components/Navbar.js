import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from '@material-ui/icons'
import avatar from '../avatar.png';

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'tan'
    }
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contact'
    }
]

const Navbar = () => {
    const [hideSideMenu, setHideSideMenu] = useState({ right: false });
    const classes = useStyles();

    const toggleSlider = ((slider, open) => () => (
        setHideSideMenu({ ...hideSideMenu, [slider]: open })
    ))

    const renderMenuItems = menuItems.map((item, key) => {
        return (
            <ListItem button key={key}>
                <ListItemIcon className={classes.listItem}>
                    {item.listIcon}
                </ListItemIcon>
                <ListItemText className={classes.listItem} primary={item.listText} />
            </ListItem>
        )
    })

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component='div' onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Amshu" />
            <Divider />
            <List>
                {renderMenuItems}
            </List>
        </Box>
    )

    return (
        <React.Fragment>
            <Box component='nav'>
                <AppBar position='static' style={{ background: '#222' }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <ArrowBack style={{ color: 'tomato' }} />
                        </IconButton>
                        <Typography variant='h5' style={{ color: 'tan' }}>
                            Hello
                    </Typography>
                        <MobileRightMenuSlider
                            anchor="left"
                            open={hideSideMenu.right}
                            onClose={toggleSlider('right', false)}
                        >
                            {sideList('right')}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    )
}

export default Navbar
