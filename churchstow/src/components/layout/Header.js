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

export const Header = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            Header
        </React.Fragment>
    )
}