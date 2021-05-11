import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    root: {
        maxWidth: '94%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: "10px"
    }

}))

export const Footer = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            Footer
        </React.Fragment>
    )
}