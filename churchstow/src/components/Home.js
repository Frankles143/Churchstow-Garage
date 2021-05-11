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

export const Home = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            Home
        </React.Fragment>
    )
}

export default Home;