import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

import { Header } from './Header';
import { Footer } from './Footer';

const useStyles = makeStyles(theme => ({

    root: {
        // maxWidth: '94%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: "10px"
    }

}))

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header />
            <Container className={classes.root}>
                {children}
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;