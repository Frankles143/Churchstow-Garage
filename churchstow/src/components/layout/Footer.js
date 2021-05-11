import React from 'react';
import { makeStyles } from '@material-ui/core';

// import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles(theme => ({

    footer: {
        marginTop: "2rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: "lightgrey",
        width: "100%",
        textAlign: "center",
    }

}))

export const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            Churchstow Garage ©2021
        </div>
    )
}