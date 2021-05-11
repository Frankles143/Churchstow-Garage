import React from 'react';
import { AppBar, Link, makeStyles, Toolbar, Typography } from '@material-ui/core';

import BuildIcon from '@material-ui/icons/Build';
import PhoneIcon from '@material-ui/icons/Phone';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({

    title: {
        display: "contents",
    },
    logo: {
        marginLeft: "15px",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    titleWrapper: {
        marginLeft: "5%",
        display: "flex",
        flexDirection: "row",
    },
    linkWrapper: {
        display: "flex",
        flexDirection: "row",
        marginRight: "5%",
    },
    call: {
        color: "white",
        marginRight: "15px"
    },
    linkText: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    icon: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 40,
        },
    }

}))

export const Header = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar style={{justifyContent: "space-between"}}>
                    <div className={classes.titleWrapper}>
                        <Typography variant="h5" className={classes.title} >
                            Churchstow Garage
                        </Typography>
                        <BuildIcon className={classes.logo} />
                    </div>

                    <div className={classes.linkWrapper}>
                        <Typography variant="h5" >
                            <Link href="tel: 01752123456" className={classes.call}>
                                <PhoneIcon className={classes.icon} /> <span className={classes.linkText}>Call Now</span>
                            </Link>
                        </Typography>

                        <Typography variant="h5">
                            <Link href="https://g.page/churchstowmotcentre?share" target="_blank" className={classes.call}>
                                <DirectionsIcon className={classes.icon} /> <span className={classes.linkText}>Get Directions</span>
                        </Link>
                        </Typography>
                    </div>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}