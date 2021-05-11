import React from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';

import Tools from '../images/GarageTools.jpg'

const useStyles = makeStyles(theme => ({

    title: {
        marginTop: "1.5rem",
        marginBottom: "0.5rem",
        color: "#3f51b5",
        fontWeight: "600",
    },
    subtitle: {
        marginBottom: "1.5rem",
    },
    homeImage: {
        width: "100%",
        height: "500px",
        objectFit: "cover",
        marginBottom: "2rem",
    },
    contact: {
        marginTop: "2rem"
    },
    map: {
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            height: "400px"
        },
        [theme.breakpoints.up('md')]: {
            height: "500px"
        },
        [theme.breakpoints.up('xl')]: {
            height: "600px"
        },

    }

}))

export const Home = () => {
    const classes = useStyles();

    return (
        <React.Fragment>

            <Typography variant="h2" className={classes.title}>
                Churchstow Garage
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
                Everything from tyres to brakes,<br /> whatever you need from your local, trustworthy garage!
            </Typography>

            <img src={Tools} className={classes.homeImage} alt="Tools neatly hanging up on a wall" />

            <Divider />
            <br />

            <Typography variant="h6" style={{ color: "#3f51b5" }}>
                Contact us
            </Typography>
            <br />

            {/* Embedded Google map */}
            <div className={classes.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.6878949650563!2d-3.807195684108035!3d50.29775360623641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486ce0973f2af8c7%3A0x880ccfed8b105e3e!2sChurchstow%20MOT%20Centre!5e0!3m2!1sen!2suk!4v1620744585333!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"></iframe>
            </div>

            <Grid container className={classes.contact}>
                <Grid item xs={12} lg={4}>
                    <Typography variant="h6">
                        Contact
                    </Typography>

                    01752 123456
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Typography variant="h6">
                        Address
                    </Typography>

                    Unit 4c, <br />
                    South Hams Business Park,<br />
                    Churchstow, <br />
                    Kingsbridge <br />
                    TQ7 3QH
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Typography variant="h6">
                        Opening Hours
                    </Typography>

                    Monday - Friday: 8:30am - 5:30pm <br />
                    Saturday: 9am - 1pm <br />
                    Sunday: Closed
                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default Home;